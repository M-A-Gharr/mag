
import { useState, useEffect, useMemo } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import LanguageSwitcher from "./LanguageSwitcher";
import ThemeSwitcher from "./ThemeSwitcher";
import Logo from "./Logo";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { EASE_OUT } from "./motion";
// import Logo from './Logo';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t, i18n } = useTranslation();
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

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
    { name: t("nav.about"), to: "about" },
    { name: t("nav.projects"), to: "projects" },
    { name: t("nav.skills"), to: "skills" },
    { name: t("nav.certificates"), to: "certificates" },
    { name: t("nav.bonus"), to: "bonus-professionnels" },
    { name: t("nav.contact"), to: "contact" },
  ], [t]);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: EASE_OUT }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/90 backdrop-blur-md shadow-md" : "bg-transparent"
        }`}
      dir={i18n.language === "ar" ? "rtl" : "ltr"}
    >
      <div className="container mx-auto px-2 lg:px-4 py-4 flex justify-between items-center">
        <Link
          to="hero"
          aria-label="Go to hero section"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="cursor-pointer"
        >
          <Logo className="text-[1.6rem] lg:text-[1.75rem]" />
        </Link>

        {/* Desktop Nav */}
        <nav role="navigation" className="hidden lg:flex items-center space-x-4 xl:space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              aria-label={`Navigate to ${link.name}`}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              activeClass="nav-link-active"
              className="nav-link text-sm xl:text-base text-foreground hover:text-[#483dfb] transition-colors cursor-pointer whitespace-nowrap"
            >
              {link.name}
            </Link>
          ))}
          <div className="flex items-center space-x-2">
            <LanguageSwitcher />
            <ThemeSwitcher />
          </div>
        </nav>

        {/* Mobile menu button */}
        <div className="flex items-center space-x-2 lg:hidden">
          <LanguageSwitcher />
          <ThemeSwitcher />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: EASE_OUT }}
              className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md shadow-lg lg:hidden"
            >
              <motion.nav
                className="flex flex-col p-4"
                initial="hidden"
                animate="show"
                variants={{ hidden: {}, show: { transition: { staggerChildren: 0.05, delayChildren: 0.05 } } }}
              >
                {navLinks.map((link) => (
                  <motion.div
                    key={link.name}
                    variants={{
                      hidden: { opacity: 0, x: i18n.language === "ar" ? 12 : -12 },
                      show: { opacity: 1, x: 0, transition: { duration: 0.4, ease: EASE_OUT } },
                    }}
                  >
                    <Link
                      to={link.to}
                      aria-label={`Navigate to ${link.name}`}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                      className="block py-3 text-foreground hover:text-[#483dfb] transition-colors cursor-pointer"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </motion.nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      {/* Reading progress */}
      <motion.div
        aria-hidden
        className={`absolute bottom-0 left-0 right-0 h-[2px] ${i18n.language === "ar" ? "origin-right" : "origin-left"} bg-gradient-to-r from-[#483dfb] to-[#9b87f5]`}
        style={{ scaleX: progress }}
      />
    </motion.header>
  );
};

export default Header;
