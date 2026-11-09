// Online booking: pick a meeting type, a day and a time slot (Casablanca hours, shown in the
// visitor's time zone), then leave a name and email. The request is sent with EmailJS, with
// the same templates as the contact form, and Amine confirms it by email. Once sent, the
// visitor can add the slot to Google Calendar or download an .ics file.
import { useMemo, useState, type ChangeEvent, type FormEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { AnimatePresence, motion } from 'framer-motion';
import emailjs from 'emailjs-com';
import { addDays, startOfDay } from 'date-fns';
import { arMA, enUS, es, fr, hi, it, ru, type Locale } from 'date-fns/locale';
import { ArrowLeft, CalendarCheck, CalendarPlus, Check, Clock, Download, Loader2, MessageCircle, Phone, Video } from 'lucide-react';
import { Calendar } from '@/components/ui/calendar';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import FloatingField from './contact/FloatingField';
import { EASE_OUT } from './motion';

// ---- Availability: edit here -------------------------------------------------------------
const TZ = 'Africa/Casablanca';
/** Start times (Casablanca) by weekday, 0 = Sunday. Days without slots cannot be picked. */
const HOURS: Record<number, string[]> = {
  1: ['18:00', '18:30', '19:00', '19:30', '20:00'],
  2: ['18:00', '18:30', '19:00', '19:30', '20:00'],
  3: ['18:00', '18:30', '19:00', '19:30', '20:00'],
  4: ['18:00', '18:30', '19:00', '19:30', '20:00'],
  5: ['18:00', '18:30', '19:00', '19:30', '20:00'],
  6: ['10:00', '10:30', '11:00', '11:30', '12:00', '12:30'],
};
const BOOKING_WINDOW_DAYS = 30; // how far ahead visitors can book
const MIN_NOTICE_HOURS = 12; // no slot sooner than this
// --------------------------------------------------------------------------------------------

const MEETINGS = [
  { id: 'discovery', minutes: 30 },
  { id: 'consultation', minutes: 45 },
  { id: 'review', minutes: 30 },
] as const;
type MeetingId = (typeof MEETINGS)[number]['id'];

const FORMATS = [
  { id: 'meet', icon: Video },
  { id: 'phone', icon: Phone },
  { id: 'whatsapp', icon: MessageCircle },
] as const;
type FormatId = (typeof FORMATS)[number]['id'];

const DATE_LOCALES: Record<string, Locale> = { en: enUS, fr, ar: arMA, es, it, ru, hi };

// EmailJS: same service and templates as the contact form.
const EMAILJS = { service: 'service_8nsntik', notify: 'template_ziyld0c', confirm: 'template_pnyo2ld', key: 'vfswi8UCo__CgVoZo' };

/** Offset in ms between a time zone's wall clock and UTC at a given instant. */
const tzOffset = (tz: string, utcMs: number) => {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: tz,
    hourCycle: 'h23',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  }).formatToParts(new Date(utcMs));
  const get = (type: string) => Number(parts.find((p) => p.type === type)?.value);
  return Date.UTC(get('year'), get('month') - 1, get('day'), get('hour'), get('minute'), get('second')) - utcMs;
};

/** The UTC instant of a Casablanca wall-clock time on the given calendar day. */
const casablancaToDate = (day: Date, hhmm: string) => {
  const [h, m] = hhmm.split(':').map(Number);
  const guess = Date.UTC(day.getFullYear(), day.getMonth(), day.getDate(), h, m);
  return new Date(guess - tzOffset(TZ, guess));
};

const slotsFor = (day: Date) => {
  const weekday = new Date(Date.UTC(day.getFullYear(), day.getMonth(), day.getDate())).getUTCDay();
  const earliest = Date.now() + MIN_NOTICE_HOURS * 3600_000;
  return (HOURS[weekday] ?? []).map((hhmm) => ({ hhmm, at: casablancaToDate(day, hhmm) })).filter((s) => s.at.getTime() > earliest);
};

const icsStamp = (d: Date) => d.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '');

type Step = 'slot' | 'details' | 'done';

const BookingCalendar = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  const rtl = lang === 'ar';
  const visitorTz = useMemo(() => Intl.DateTimeFormat().resolvedOptions().timeZone, []);

  const [step, setStep] = useState<Step>('slot');
  const [meeting, setMeeting] = useState<MeetingId>('discovery');
  const [day, setDay] = useState<Date | undefined>();
  const [slot, setSlot] = useState<Date | undefined>();
  const [format, setFormat] = useState<FormatId>('meet');
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'error'>('idle');

  const today = startOfDay(new Date());
  const lastDay = addDays(today, BOOKING_WINDOW_DAYS);
  const slots = day ? slotsFor(day) : [];
  const minutes = MEETINGS.find((m) => m.id === meeting)!.minutes;
  const end = slot ? new Date(slot.getTime() + minutes * 60_000) : undefined;

  const fmtTime = (d: Date, tz?: string) => new Intl.DateTimeFormat(lang, { hour: '2-digit', minute: '2-digit', timeZone: tz }).format(d);
  const fmtDay = (d: Date, tz?: string) =>
    new Intl.DateTimeFormat(lang, { weekday: 'long', day: 'numeric', month: 'long', timeZone: tz }).format(d);
  const meetingTitle = (id: MeetingId, lng?: string) => t(`about.book.cal.meetings.${id}.title`, lng ? { lng } : undefined);

  const onField = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
    if (status === 'error') setStatus('idle');
  };

  const eventTitle = `${meetingTitle(meeting)} · Mohamed Amine Gharrab`;
  const eventDetails = `${t(`about.book.cal.formats.${format}`)} — ${t('about.book.cal.pending')}\nhttps://www.maminegh.com`;

  const googleLink = () =>
    slot && end
      ? `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(eventTitle)}&dates=${icsStamp(slot)}/${icsStamp(end)}&details=${encodeURIComponent(eventDetails)}`
      : '#';

  const downloadIcs = () => {
    if (!slot || !end) return;
    const esc = (s: string) => s.replace(/[\\,;]/g, (c) => `\\${c}`).replace(/\n/g, '\\n');
    const ics = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//maminegh.com//Booking//EN',
      'BEGIN:VEVENT',
      `UID:${slot.getTime()}-${Math.random().toString(36).slice(2)}@maminegh.com`,
      `DTSTAMP:${icsStamp(new Date())}`,
      `DTSTART:${icsStamp(slot)}`,
      `DTEND:${icsStamp(end)}`,
      `SUMMARY:${esc(eventTitle)}`,
      `DESCRIPTION:${esc(eventDetails)}`,
      'END:VEVENT',
      'END:VCALENDAR',
    ].join('\r\n');
    const url = URL.createObjectURL(new Blob([ics], { type: 'text/calendar;charset=utf-8' }));
    const a = Object.assign(document.createElement('a'), { href: url, download: 'meeting-mag.ics' });
    a.click();
    URL.revokeObjectURL(url);
  };

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    if (!slot || status === 'sending') return;
    setStatus('sending');
    // Written in English for Amine, whatever the site's language.
    const casa = new Intl.DateTimeFormat('en-GB', { dateStyle: 'full', timeStyle: 'short', timeZone: TZ }).format(slot);
    const local = new Intl.DateTimeFormat('en-GB', { dateStyle: 'full', timeStyle: 'short', timeZone: visitorTz }).format(slot);
    const message = [
      '📅 BOOKING REQUEST (maminegh.com)',
      `Meeting: ${meetingTitle(meeting, 'en')} (${minutes} min)`,
      `When (Casablanca): ${casa}`,
      `When (visitor, ${visitorTz}): ${local}`,
      `Format: ${t(`about.book.cal.formats.${format}`, { lng: 'en' })}`,
      needsPhone ? `Phone: ${form.phone}` : '',
      `Site language: ${lang}`,
      '',
      form.message || '(no project description)',
    ]
      .filter((line, i) => line !== '' || i === 7)
      .join('\n');
    const params = { from_name: form.name, reply_to: form.email, message };
    try {
      await emailjs.send(EMAILJS.service, EMAILJS.notify, params, EMAILJS.key);
    } catch (err) {
      console.error('Booking request failed', err);
      setStatus('error');
      return;
    }
    emailjs.send(EMAILJS.service, EMAILJS.confirm, params, EMAILJS.key).catch((err) => console.error('Booking confirmation failed', err));
    setStatus('idle');
    setStep('done');
  };

  const reset = () => {
    setStep('slot');
    setDay(undefined);
    setSlot(undefined);
    setForm({ name: '', email: '', phone: '', message: '' });
  };

  const needsPhone = format !== 'meet';
  const canSend = form.name.trim() && /\S+@\S+\.\S+/.test(form.email) && (!needsPhone || form.phone.trim().length >= 6);
  const stepIndex = { slot: 0, details: 1, done: 2 }[step];

  return (
    <div className="relative overflow-hidden rounded-2xl border border-secondary/20 bg-secondary/20 p-4 sm:p-6 md:p-8">
      <div aria-hidden className="pointer-events-none absolute -top-24 end-0 h-56 w-56 rounded-full bg-[#9b87f5]/15 blur-3xl" />

      {/* Header and progress */}
      <div className="relative mb-6 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <span className="rounded-xl bg-[#483dfb]/10 p-2.5">
            <CalendarCheck className="h-5 w-5 text-[#483dfb] dark:text-[#9b87f5]" />
          </span>
          <div>
            <h4 className="text-lg font-semibold leading-tight">{t('about.book.cal.title')}</h4>
            <p className="text-xs text-muted-foreground">{t('about.book.cal.subtitle')}</p>
          </div>
        </div>
        <ol className="flex items-center gap-1.5" aria-label={t('about.book.cal.title')}>
          {[0, 1, 2].map((i) => (
            <li
              key={i}
              aria-current={i === stepIndex ? 'step' : undefined}
              className={cn(
                'h-1.5 rounded-full transition-all duration-500',
                i === stepIndex ? 'w-8 bg-[#483dfb]' : i < stepIndex ? 'w-4 bg-[#9b87f5]' : 'w-4 bg-foreground/15'
              )}
            />
          ))}
        </ol>
      </div>

      <AnimatePresence mode="wait" initial={false}>
        {step === 'slot' && (
          <motion.div
            key="slot"
            initial={{ opacity: 0, x: rtl ? -24 : 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: rtl ? 24 : -24 }}
            transition={{ duration: 0.35, ease: EASE_OUT }}
            className="relative"
          >
            {/* 1. Meeting type */}
            <p className="mb-3 text-sm font-medium">{t('about.book.cal.chooseMeeting')}</p>
            <div className="mb-6 grid gap-2 sm:grid-cols-3" role="radiogroup">
              {MEETINGS.map((m) => {
                const selected = meeting === m.id;
                return (
                  <button
                    key={m.id}
                    type="button"
                    role="radio"
                    aria-checked={selected}
                    onClick={() => setMeeting(m.id)}
                    className={cn(
                      'rounded-xl border p-3 text-start transition-all duration-300',
                      selected
                        ? 'border-[#483dfb] bg-[#483dfb]/10 shadow-[0_0_0_3px_rgb(72_61_251_/_0.12)]'
                        : 'border-border bg-background/50 hover:border-[#483dfb]/40'
                    )}
                  >
                    <span className="flex items-center justify-between gap-2">
                      <span className="text-sm font-semibold">{meetingTitle(m.id)}</span>
                      <span className="flex shrink-0 items-center gap-1 text-xs text-muted-foreground" dir="ltr">
                        <Clock className="h-3 w-3" /> {m.minutes} min
                      </span>
                    </span>
                    <span className="mt-1 block text-xs text-muted-foreground">{t(`about.book.cal.meetings.${m.id}.desc`)}</span>
                  </button>
                );
              })}
            </div>

            {/* 2. Day and time */}
            <p className="mb-3 text-sm font-medium">{t('about.book.cal.chooseSlot')}</p>
            <div className="grid gap-6 md:grid-cols-[auto_1fr]">
              <div className="mx-auto w-fit rounded-xl border border-border bg-background/60" dir={rtl ? 'rtl' : 'ltr'}>
                <Calendar
                  mode="single"
                  selected={day}
                  onSelect={(d) => {
                    setDay(d);
                    setSlot(undefined);
                  }}
                  locale={DATE_LOCALES[lang] ?? enUS}
                  dir={rtl ? 'rtl' : 'ltr'}
                  fromDate={today}
                  toDate={lastDay}
                  showOutsideDays={false}
                  disabled={(d) => d < today || d > lastDay || slotsFor(d).length === 0}
                  classNames={{
                    nav_button_previous: 'absolute start-1',
                    nav_button_next: 'absolute end-1',
                    day_selected:
                      'bg-[#483dfb] text-white hover:bg-[#483dfb] hover:text-white focus:bg-[#483dfb] focus:text-white',
                    day_today: 'font-semibold text-[#483dfb] dark:text-[#9b87f5]',
                  }}
                />
              </div>

              <div className="min-w-0">
                <AnimatePresence mode="wait" initial={false}>
                  {!day ? (
                    <motion.p
                      key="none"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex h-full min-h-[120px] items-center justify-center rounded-xl border border-dashed border-border p-6 text-center text-sm text-muted-foreground"
                    >
                      {t('about.book.cal.pickDay')}
                    </motion.p>
                  ) : (
                    <motion.div key={day.toISOString()} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
                      <p className="mb-3 text-sm font-semibold first-letter:uppercase">{fmtDay(day)}</p>
                      <div className="grid grid-cols-3 gap-2 sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-4">
                        {slots.map((s, i) => {
                          const selected = slot?.getTime() === s.at.getTime();
                          return (
                            <motion.button
                              key={s.hhmm}
                              type="button"
                              onClick={() => setSlot(s.at)}
                              aria-pressed={selected}
                              initial={{ opacity: 0, scale: 0.9 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.25, delay: i * 0.03 }}
                              className={cn(
                                'rounded-lg border py-2 text-sm tabular-nums transition-colors duration-200',
                                selected ? 'border-[#483dfb] bg-[#483dfb] text-white' : 'border-border bg-background/60 hover:border-[#483dfb]/50 hover:text-[#483dfb]'
                              )}
                            >
                              {fmtTime(s.at)}
                            </motion.button>
                          );
                        })}
                      </div>
                      <p className="mt-3 text-xs text-muted-foreground">{t('about.book.cal.timezone', { tz: visitorTz.replace(/_/g, ' ') })}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            <div className="mt-6 flex flex-col-reverse items-stretch justify-between gap-3 sm:flex-row sm:items-center">
              <p className="text-xs text-muted-foreground">{t('about.book.cal.pending')}</p>
              <Button
                disabled={!slot}
                onClick={() => setStep('details')}
                className="bg-[#261bfb] text-white hover:bg-[#3e30fb] disabled:opacity-40"
              >
                {t('about.book.cal.continue')}
              </Button>
            </div>
          </motion.div>
        )}

        {step === 'details' && slot && (
          <motion.form
            key="details"
            onSubmit={submit}
            initial={{ opacity: 0, x: rtl ? -24 : 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: rtl ? 24 : -24 }}
            transition={{ duration: 0.35, ease: EASE_OUT }}
            className="relative"
          >
            {/* Chosen slot */}
            <div className="mb-6 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-[#483dfb]/25 bg-[#483dfb]/5 p-4">
              <div>
                <p className="text-sm font-semibold">
                  {meetingTitle(meeting)} · <bdi dir="ltr">{minutes} min</bdi>
                </p>
                <p className="text-sm first-letter:uppercase text-muted-foreground">
                  {fmtDay(slot)} · {fmtTime(slot)} – {end && fmtTime(end)}
                </p>
              </div>
              <Button type="button" variant="ghost" size="sm" onClick={() => setStep('slot')} className="gap-1.5">
                <ArrowLeft className="h-4 w-4 rtl:rotate-180" /> {t('about.book.cal.change')}
              </Button>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <FloatingField id="book-name" name="name" label={t('about.book.cal.name')} value={form.name} onChange={onField} required autoComplete="name" />
              <FloatingField id="book-email" name="email" type="email" label={t('about.book.cal.email')} value={form.email} onChange={onField} required autoComplete="email" />
            </div>

            <p className="mb-2 mt-5 text-sm font-medium">{t('about.book.cal.format')}</p>
            <div className="flex flex-wrap gap-2" role="radiogroup">
              {FORMATS.map(({ id, icon: Icon }) => (
                <button
                  key={id}
                  type="button"
                  role="radio"
                  aria-checked={format === id}
                  onClick={() => setFormat(id)}
                  className={cn(
                    'flex items-center gap-2 rounded-full border px-4 py-2 text-sm transition-colors duration-200',
                    format === id ? 'border-[#483dfb] bg-[#483dfb]/10 text-[#483dfb] dark:text-[#b4a8ff]' : 'border-border hover:border-[#483dfb]/40'
                  )}
                >
                  <Icon className="h-4 w-4" /> {t(`about.book.cal.formats.${id}`)}
                </button>
              ))}
            </div>

            <AnimatePresence initial={false}>
              {needsPhone && (
                <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="overflow-hidden">
                  <div className="pt-4 sm:w-1/2" dir="ltr">
                    <FloatingField id="book-phone" name="phone" type="tel" label={t('about.book.cal.phone')} value={form.phone} onChange={onField} required autoComplete="tel" />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="mt-4">
              <FloatingField id="book-message" name="message" label={t('about.book.cal.message')} value={form.message} onChange={onField} multiline maxLength={800} />
            </div>

            {status === 'error' && (
              <p role="alert" className="mt-3 text-sm text-red-500">
                {t('about.book.cal.error')}
              </p>
            )}

            <div className="mt-6 flex flex-col-reverse items-stretch justify-between gap-3 sm:flex-row sm:items-center">
              <p className="text-xs text-muted-foreground">{t('about.book.cal.pending')}</p>
              <Button type="submit" disabled={!canSend || status === 'sending'} className="gap-2 bg-[#261bfb] text-white hover:bg-[#3e30fb] disabled:opacity-40">
                {status === 'sending' && <Loader2 className="h-4 w-4 animate-spin" />}
                {status === 'sending' ? t('about.book.cal.sending') : t('about.book.cal.submit')}
              </Button>
            </div>
          </motion.form>
        )}

        {step === 'done' && slot && (
          <motion.div
            key="done"
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: EASE_OUT }}
            className="relative flex flex-col items-center py-4 text-center"
          >
            <motion.span
              className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-[0_0_0_8px_rgb(16_185_129_/_0.15)]"
              initial={{ scale: 0, rotate: -30 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: 'spring', stiffness: 380, damping: 18, delay: 0.1 }}
            >
              <Check className="h-7 w-7" strokeWidth={3} />
            </motion.span>
            <h5 className="text-xl font-semibold">{t('about.book.cal.doneTitle')}</h5>
            <p className="mt-1 text-sm first-letter:uppercase text-muted-foreground">
              {meetingTitle(meeting)} · {fmtDay(slot)} · {fmtTime(slot)}
            </p>
            <p className="mt-3 max-w-md text-sm text-muted-foreground">{t('about.book.cal.doneDesc', { email: form.email })}</p>
            <div className="mt-6 flex flex-wrap justify-center gap-2">
              <Button asChild variant="outline" className="gap-2">
                <a href={googleLink()} target="_blank" rel="noopener noreferrer">
                  <CalendarPlus className="h-4 w-4" /> {t('about.book.cal.addGoogle')}
                </a>
              </Button>
              <Button variant="outline" className="gap-2" onClick={downloadIcs}>
                <Download className="h-4 w-4" /> {t('about.book.cal.downloadIcs')}
              </Button>
            </div>
            <Button variant="link" className="mt-3 text-[#483dfb] dark:text-[#9b87f5]" onClick={reset}>
              {t('about.book.cal.another')}
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BookingCalendar;
