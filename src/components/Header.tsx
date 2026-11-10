
import { useState, useEffect, useMemo, useCallback } from "react";
import SectionLink from "./SectionLink";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";
import ThemeSwitcher from "./ThemeSwitcher";
import Logo from "./Logo";
import MobileMenu, { MenuButton } from "./MobileMenu";
import { motion, useScroll, useSpring } from "framer-motion";
import { EASE_OUT } from "./motion";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t, i18n } = useTranslation();
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  const closeMenu = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = useMemo(() => [
    { name: t("nav.services"), to: "services" },
    { name: t("nav.projects"), to: "projects" },
    { name: t("nav.testimonials"), to: "testimonials" },
    { name: t("nav.about"), to: "about" },
    { name: t("nav.skills"), to: "skills" },
    { name: t("nav.contact"), to: "contact" },
  ], [t]);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: EASE_OUT }}
      className={`fixed top-0 left-0 right-0 transition-all duration-300 ${isOpen ? "z-[60] bg-transparent shadow-none" : `z-50 ${isScrolled ? "bg-background/90 backdrop-blur-md shadow-md" : "bg-transparent"}`}`}
      dir={i18n.language === "ar" ? "rtl" : "ltr"}
    >
      <div className="container mx-auto px-2 lg:px-4 py-4 flex justify-between items-center">
        <SectionLink to="hero" duration={500} className="cursor-pointer">
          <Logo className="text-[1.6rem] lg:text-[1.75rem]" />
        </SectionLink>

        {/* Desktop Nav */}
        <nav role="navigation" className="hidden lg:flex items-center gap-4 xl:gap-8">
          {navLinks.map((link) => (
            <SectionLink
              key={link.to}
              to={link.to}
              aria-label={`Navigate to ${link.name}`}
              duration={500}
              activeClass="nav-link-active"
              className="nav-link text-sm xl:text-base text-foreground hover:text-[#483dfb] transition-colors cursor-pointer whitespace-nowrap"
            >
              {link.name}
            </SectionLink>
          ))}
          <div className="flex items-center gap-2">
            <LanguageSwitcher />
            <ThemeSwitcher />
          </div>
        </nav>

        {/* Phones and tablets: menu button, full-screen menu */}
        <div className="lg:hidden">
          <MenuButton open={isOpen} onClick={() => setIsOpen((o) => !o)} controls="mobile-menu" />
        </div>
      </div>
      <MobileMenu id="mobile-menu" open={isOpen} onClose={closeMenu} links={navLinks} />
      {/* Reading progress */}
      <motion.div
        aria-hidden
        className={`absolute bottom-0 left-0 right-0 h-[2px] ${i18n.language === "ar" ? "origin-right" : "origin-left"} bg-gradient-to-r from-[#483dfb] to-[#9b87f5]`}
        style={{ scaleX: progress, opacity: isOpen ? 0 : 1 }}
      />
    </motion.header>
  );
};

export default Header;
