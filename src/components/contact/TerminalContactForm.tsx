import { useRef, useState } from 'react';
import { Check, ChevronDown, Loader2, Pencil, Terminal } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import type { SendStatus } from './PaperPlaneButton';

type Data = { from_name: string; reply_to: string; need: string; timeframe: string; message: string };
type Props = {
  data: Data;
  status: SendStatus;
  context?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  onRestart: () => void;
};
const fields = ['from_name', 'reply_to', 'need', 'timeframe', 'message'] as const;
const labels = { from_name: 'name', reply_to: 'email', need: 'need', timeframe: 'timeframe', message: 'message' };

export default function TerminalContactForm({ data, status, context, onChange, onSubmit, onRestart }: Props) {
  const { t } = useTranslation();
  const [step, setStep] = useState(0);
  const [editing, setEditing] = useState(false);
  const [invalid, setInvalid] = useState(false);
  const form = useRef<HTMLFormElement>(null);
  const heading = useRef<HTMLHeadingElement>(null);
  const review = step === fields.length;
  const busy = status === 'sending';
  const field = fields[step];
  const display = (key: typeof fields[number]) => {
    if (!data[key]) return t('contact.terminal.skipped');
    return key === 'need' || key === 'timeframe' ? t(`contact.form.${key}Options.${data[key]}`) : data[key];
  };
  const moveTo = (next: number) => {
    setInvalid(false);
    setStep(next);
    requestAnimationFrame(() => {
      if (next === fields.length) heading.current?.focus();
      else form.current?.querySelector<HTMLElement>('input, select, textarea')?.focus();
    });
  };
  const advance = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (busy || status === 'sent') return;
    if (review) { onSubmit(event); return; }
    if (!form.current?.reportValidity()) return;
    if ((field === 'from_name' || field === 'message') && !data[field].trim()) {
      setInvalid(true);
      return;
    }
    moveTo(editing ? fields.length : step + 1);
    setEditing(false);
  };
  const inputClass = 'w-full min-w-0 rounded-md border border-slate-300 dark:border-white/15 bg-slate-50 dark:bg-white/5 px-3 py-3 text-base text-slate-900 dark:text-slate-100 outline-none transition focus:border-violet-600 dark:focus:border-violet-400 focus:ring-2 focus:ring-violet-600/20 dark:focus:ring-violet-400/25 disabled:opacity-60';
  const buttonClass = 'rounded-lg bg-violet-600 dark:bg-violet-500 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-violet-700 dark:hover:bg-violet-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-600 dark:focus-visible:outline-violet-300 disabled:opacity-60';

  return (
    <div className="overflow-hidden rounded-2xl [color-scheme:light] dark:[color-scheme:dark] border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#10111d] text-slate-900 dark:text-slate-100 shadow-xl shadow-violet-950/5 dark:shadow-violet-950/10">
      <div className="flex items-center justify-between gap-3 border-b border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-white/[0.04] px-5 py-4 font-mono text-xs text-slate-600 dark:text-slate-400" dir="ltr">
        <span className="flex items-center gap-2"><Terminal size={16} aria-hidden /> contact.sh</span>
        <span>maminegh / portfolio</span>
      </div>
      <div className="p-5 font-mono sm:p-7">
        <p className="mb-5 break-words text-sm" dir="ltr"><span className="text-violet-700 dark:text-violet-300">➜ portfolio</span> contact --new</p>
        <h3 className="text-lg font-semibold">{t('contact.form.title')}</h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{t('contact.terminal.intro')}</p>
        {context && <p className="mt-4 border-s-2 border-violet-500 dark:border-violet-400 ps-3 text-sm text-violet-800 dark:text-violet-200">{context}</p>}

        <form ref={form} onSubmit={advance} className="mt-7" aria-label={t('contact.form.title')}>
          <div className="space-y-5">
            {fields.slice(0, review ? fields.length : step).map((key, index) => (
              <div key={key} className="group border-s border-slate-300 dark:border-white/15 ps-4">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-sm text-slate-600 dark:text-slate-400">{t(`contact.form.${labels[key]}`)}</p>
                  <button type="button" disabled={busy || status === 'sent'} onClick={() => { setEditing(review); moveTo(index); }} className="rounded p-2 text-slate-600 dark:text-slate-400 hover:text-violet-700 dark:hover:text-violet-200 focus-visible:outline focus-visible:outline-violet-600 dark:focus-visible:outline-violet-300 disabled:hidden" aria-label={`${t('contact.terminal.edit')} : ${t(`contact.form.${labels[key]}`)}`}><Pencil size={14} aria-hidden /></button>
                </div>
                <p dir="auto" className="whitespace-pre-wrap break-words text-sm leading-relaxed text-slate-800 dark:text-slate-200">{display(key)}</p>
              </div>
            ))}
          </div>

          {status === 'sent' ? (
            <div className="mt-6">
              <p role="status" className="flex items-start gap-2 text-sm leading-relaxed text-emerald-700 dark:text-emerald-300"><Check size={18} className="shrink-0" aria-hidden />{t('contact.form.success')}</p>
              <button type="button" className={`${buttonClass} mt-5`} onClick={() => { onRestart(); moveTo(0); }}>{t('contact.terminal.restart')}</button>
            </div>
          ) : review ? (
            <div className="mt-7 border-t border-slate-200 dark:border-white/10 pt-5">
              <h4 ref={heading} tabIndex={-1} className="text-sm text-violet-800 dark:text-violet-200 outline-none">{t('contact.terminal.review')}</h4>
              <button type="submit" disabled={busy} className={`${buttonClass} mt-4 inline-flex items-center gap-2`}>
                {busy ? <Loader2 size={16} className="animate-spin motion-reduce:animate-none" aria-hidden /> : <Terminal size={16} aria-hidden />}
                {t(busy ? 'contact.form.sending' : 'contact.form.submit')}
              </button>
              {busy && <p role="status" className="sr-only">{t('contact.form.sending')}</p>}
              {status === 'error' && <p role="alert" className="mt-4 text-sm leading-relaxed text-rose-700 dark:text-rose-300">{t('contact.form.error')}</p>}
            </div>
          ) : (
            <div key={field} className="mt-5 motion-safe:animate-in motion-safe:fade-in motion-safe:duration-300">
              <label htmlFor={`terminal-${field}`} className="mb-3 block text-base"><span className="text-violet-700 dark:text-violet-300" aria-hidden>? </span>{t(`contact.form.${labels[field]}`)}</label>
              {field === 'message' && <p id="terminal-help" className="mb-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{t('contact.form.messageHelp')}</p>}
              <div className="flex items-start gap-2">
                <span className="pt-3 text-violet-700 dark:text-violet-300" aria-hidden>›</span>
                {field === 'need' || field === 'timeframe' ? (
                  <div className="relative min-w-0 flex-1">
                    <select id={`terminal-${field}`} name={field} value={data[field]} onChange={onChange} required={field === 'need'} className={`${inputClass} appearance-none pe-10`}>
                      <option className="bg-white dark:bg-slate-900" value="" disabled={field === 'need'}>{t(`contact.form.${field}Placeholder`)}</option>
                      {(field === 'need' ? ['webapps', 'ai', 'ecommerce', 'other'] : ['soon', 'oneToThreeMonths', 'later', 'flexible']).map(value => <option className="bg-white dark:bg-slate-900" key={value} value={value}>{t(`contact.form.${field}Options.${value}`)}</option>)}
                    </select>
                    <ChevronDown size={16} className="pointer-events-none absolute end-3 top-4 text-slate-600 dark:text-slate-400" aria-hidden />
                  </div>
                ) : field === 'message' ? (
                  <textarea id={`terminal-${field}`} name={field} value={data[field]} onChange={onChange} required maxLength={1000} rows={5} aria-describedby="terminal-help terminal-count" className={`${inputClass} resize-y`} />
                ) : (
                  <input id={`terminal-${field}`} name={field} value={data[field]} onChange={onChange} type={field === 'reply_to' ? 'email' : 'text'} autoComplete={field === 'reply_to' ? 'email' : 'name'} required className={inputClass} />
                )}
              </div>
              {field === 'message' && <p id="terminal-count" className="mt-2 text-end text-xs text-slate-600 dark:text-slate-400">{t('contact.form.characters', { count: data.message.length, max: 1000 })}</p>}
              {invalid && <p role="alert" className="mt-3 text-sm text-rose-700 dark:text-rose-300">{t('contact.terminal.required')}</p>}
              <div className="mt-5 flex flex-wrap items-center gap-3">
                <button type="submit" className={buttonClass}>{t(editing || field === 'message' ? 'contact.terminal.preview' : 'contact.terminal.next')}</button>
                {step > 0 && <button type="button" className="rounded px-3 py-2 text-sm text-slate-600 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white focus-visible:outline focus-visible:outline-violet-600 dark:focus-visible:outline-violet-300" onClick={() => moveTo(step - 1)}>{t('contact.terminal.back')}</button>}
              </div>
              <p className="mt-4 text-xs leading-relaxed text-slate-600 dark:text-slate-400">{t(field === 'message' ? 'contact.terminal.multiline' : 'contact.terminal.enter')}</p>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
