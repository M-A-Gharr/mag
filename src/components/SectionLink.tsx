// Link to a section of the home page that works from every page: on the home page it scrolls
// smoothly (react-scroll); elsewhere, such as a case study, it goes to the home page of the
// current language at that section (the home page scrolls to the #hash once it has rendered).
import type { ReactNode } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { isHomePath, pathFor } from '@/i18n/paths';

type SectionLinkProps = {
  to: string;
  children: ReactNode;
  className?: string;
  'aria-label'?: string;
  /** Highlight the link while its section is on screen (home page only). */
  activeClass?: string;
  duration?: number;
  onClick?: () => void;
};

const SectionLink = ({ to, children, className, activeClass, duration = 600, onClick, ...rest }: SectionLinkProps) => {
  const { pathname } = useLocation();
  const { i18n } = useTranslation();

  if (isHomePath(pathname)) {
    return (
      <ScrollLink
        to={to}
        href={`#${to}`}
        spy={Boolean(activeClass)}
        activeClass={activeClass}
        smooth
        offset={-70}
        duration={duration}
        onClick={onClick}
        className={className}
        aria-label={rest['aria-label']}
      >
        {children}
      </ScrollLink>
    );
  }

  return (
    <RouterLink to={`${pathFor(i18n.language)}#${to}`} onClick={onClick} className={className} aria-label={rest['aria-label']}>
      {children}
    </RouterLink>
  );
};

export default SectionLink;
