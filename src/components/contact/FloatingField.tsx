// Text field whose label rests inside it and floats up on focus or once filled,
// with an accent line that draws in on focus and, for long text, a character ring.
import { type ChangeEvent } from 'react';
import { cn } from '@/lib/utils';

type FloatingFieldProps = {
  id: string;
  name: string;
  label: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  type?: string;
  multiline?: boolean;
  maxLength?: number;
  required?: boolean;
  disabled?: boolean;
  autoComplete?: string;
  counterLabel?: (count: number, max: number) => string;
};

const RING_R = 9;
const RING_C = 2 * Math.PI * RING_R;

const FloatingField = ({
  id,
  name,
  label,
  value,
  onChange,
  type = 'text',
  multiline = false,
  maxLength,
  required,
  disabled,
  autoComplete,
  counterLabel,
}: FloatingFieldProps) => {
  const fieldClass = cn(
    'peer block w-full rounded-lg border border-input bg-background/60 px-3 pb-2 text-sm text-foreground outline-none',
    'transition-[border-color,box-shadow,background-color] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]',
    'hover:border-[#483dfb]/40 focus:border-[#483dfb]/60 focus:bg-background focus:shadow-[0_0_0_4px_rgb(72_61_251_/_0.12)]',
    'disabled:cursor-not-allowed disabled:opacity-60',
    multiline ? 'min-h-[150px] resize-y pt-7' : 'h-14 pt-6'
  );

  const ratio = maxLength ? Math.min(1, value.length / maxLength) : 0;
  const ringColor = ratio >= 1 ? '#ef4444' : ratio > 0.9 ? '#f59e0b' : '#483dfb';

  return (
    <div className="relative">
      {multiline ? (
        <textarea
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          placeholder=" "
          required={required}
          disabled={disabled}
          maxLength={maxLength}
          aria-describedby={maxLength && counterLabel ? `${id}-count` : undefined}
          className={fieldClass}
        />
      ) : (
        <input
          id={id}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder=" "
          required={required}
          disabled={disabled}
          maxLength={maxLength}
          autoComplete={autoComplete}
          className={fieldClass}
        />
      )}

      <label
        htmlFor={id}
        className={cn(
          'pointer-events-none absolute start-3 top-4 origin-top-left rtl:origin-top-right text-sm text-muted-foreground',
          'transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]',
          'peer-focus:-translate-y-2.5 peer-focus:scale-[0.78] peer-focus:font-medium peer-focus:text-[#483dfb]',
          'peer-[:not(:placeholder-shown)]:-translate-y-2.5 peer-[:not(:placeholder-shown)]:scale-[0.78]'
        )}
      >
        {label}
      </label>

      {/* Accent line that draws in from the centre on focus */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-3 bottom-0 h-[2px] origin-center scale-x-0 rounded-full bg-gradient-to-r from-[#483dfb] to-[#9b87f5] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] peer-focus:scale-x-100"
      />

      {maxLength && (
        <div
          className={cn(
            'pointer-events-none absolute bottom-3 end-3 flex items-center gap-1.5 text-[11px] tabular-nums text-muted-foreground transition-opacity duration-300',
            value.length > 0 ? 'opacity-100' : 'opacity-0 peer-focus:opacity-100'
          )}
        >
          <span aria-hidden>{value.length > maxLength * 0.8 ? maxLength - value.length : ''}</span>
          <svg width="22" height="22" viewBox="0 0 22 22" aria-hidden className="-rotate-90">
            <circle cx="11" cy="11" r={RING_R} fill="none" strokeWidth="2.5" className="stroke-[hsl(var(--foreground)/0.12)]" />
            <circle
              cx="11"
              cy="11"
              r={RING_R}
              fill="none"
              strokeWidth="2.5"
              strokeLinecap="round"
              stroke={ringColor}
              strokeDasharray={RING_C}
              strokeDashoffset={RING_C * (1 - ratio)}
              style={{ transition: 'stroke-dashoffset 0.35s cubic-bezier(0.22,1,0.36,1), stroke 0.3s' }}
            />
          </svg>
          {counterLabel && <span id={`${id}-count`} className="sr-only">{counterLabel(value.length, maxLength)}</span>}
        </div>
      )}
    </div>
  );
};

export default FloatingField;
