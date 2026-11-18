// Short qualification form that opens WhatsApp with a ready-made message. A wa.me link can only
// pre-fill text, so the form lives here and the visitor just presses Send in WhatsApp.
import { useState, type ChangeEvent, type FormEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import FloatingField from './FloatingField';
import WhatsAppIcon from './WhatsAppIcon';

export const WHATSAPP_NUMBER = '212644589207';

const NEEDS = ['webapps', 'ai', 'ecommerce', 'other'] as const;
const TIMEFRAMES = ['soon', 'oneToThreeMonths', 'later', 'flexible'] as const;
const MESSAGE_MAX = 500;

type WhatsAppDialogProps = { open: boolean; onOpenChange: (open: boolean) => void };

const EMPTY = { name: '', need: '', timeframe: '', message: '' };

const WhatsAppDialog = ({ open, onOpenChange }: WhatsAppDialogProps) => {
  const { t } = useTranslation();
  const [form, setForm] = useState(EMPTY);

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const text = [
      t('contact.whatsapp.greeting'),
      '',
      `${t('contact.form.name')} : ${form.name.trim()}`,
      `${t('contact.form.need')} : ${t(`contact.form.needOptions.${form.need}`)}`,
      ...(form.timeframe ? [`${t('contact.whatsapp.timeframe')} : ${t(`contact.form.timeframeOptions.${form.timeframe}`)}`] : []),
      ...(form.message.trim() ? ['', form.message.trim()] : []),
    ].join('\n');
    // Opened synchronously from the submit so pop-up blockers let it through.
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
    onOpenChange(false);
    setForm(EMPTY);
  };

  const selectClass =
    'h-14 w-full rounded-lg border border-input bg-background px-3 text-sm text-foreground outline-none transition-colors focus:border-[#25D366]/70 focus:ring-2 focus:ring-[#25D366]/20';

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[90dvh] w-[calc(100%-2rem)] overflow-y-auto rounded-2xl">
        {/* The close button sits at the right: keep the Arabic title clear of it */}
        <DialogHeader className="text-start sm:text-start rtl:ps-6">
          <DialogTitle className="flex items-center gap-2">
            <WhatsAppIcon size={22} className="text-[#25D366]" />
            {t('contact.whatsapp.title')}
          </DialogTitle>
          <DialogDescription>{t('contact.whatsapp.description')}</DialogDescription>
        </DialogHeader>

        <form onSubmit={onSubmit} className="space-y-4">
          <FloatingField id="wa-name" name="name" label={t('contact.form.name')} value={form.name} onChange={onChange} autoComplete="name" required />

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="wa-need" className="mb-2 block text-sm font-medium">{t('contact.form.need')}</label>
              <select id="wa-need" name="need" value={form.need} onChange={onChange} required className={selectClass}>
                <option value="" disabled>{t('contact.form.needPlaceholder')}</option>
                {NEEDS.map((v) => <option key={v} value={v}>{t(`contact.form.needOptions.${v}`)}</option>)}
              </select>
            </div>
            <div>
              <label htmlFor="wa-timeframe" className="mb-2 block text-sm font-medium">{t('contact.form.timeframe')}</label>
              <select id="wa-timeframe" name="timeframe" value={form.timeframe} onChange={onChange} className={selectClass}>
                <option value="">{t('contact.form.timeframePlaceholder')}</option>
                {TIMEFRAMES.map((v) => <option key={v} value={v}>{t(`contact.form.timeframeOptions.${v}`)}</option>)}
              </select>
            </div>
          </div>

          <FloatingField
            id="wa-message"
            name="message"
            label={t('contact.whatsapp.message')}
            value={form.message}
            onChange={onChange}
            multiline
            maxLength={MESSAGE_MAX}
            counterLabel={(count, max) => t('contact.form.characters', { count, max })}
          />

          <button
            type="submit"
            className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 text-sm font-semibold text-[#0b3d20] transition-[filter,transform] duration-300 hover:brightness-105 active:scale-[0.98]"
          >
            <WhatsAppIcon size={18} />
            {t('contact.whatsapp.submit')}
          </button>
          <p className="text-center text-xs text-muted-foreground">{t('contact.whatsapp.note')}</p>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default WhatsAppDialog;
