// Like React.lazy, with a preload(): once preloaded, the page renders on the first frame instead
// of suspending (which would replace the prerendered HTML with the loading fallback).
import { lazy, type ComponentType } from 'react';

export function lazyPage(load: () => Promise<{ default: ComponentType }>) {
  let Loaded: ComponentType | null = null;
  const remember = () => load().then((m) => {
    Loaded = m.default;
    return m;
  });
  const Lazy = lazy(remember);
  const Page = () => (Loaded ? <Loaded /> : <Lazy />);
  Page.preload = remember;
  return Page;
}
