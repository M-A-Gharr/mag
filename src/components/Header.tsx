
import { useState, useEffect, useMemo } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import LanguageSwitcher from "./LanguageSwitcher";
import ThemeSwitcher from "./ThemeSwitcher";
// import Logo from './Logo';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t, i18n } = useTranslation();

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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/90 backdrop-blur-md shadow-md" : "bg-transparent"
        }`}
      dir={i18n.language === "ar" ? "rtl" : "ltr"}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link
          to="hero"
          aria-label="Go to hero section"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="text-2xl font-bold text-gradient cursor-pointer"
        >
          M.A.G
        </Link>

        {/* Desktop Nav */}
        <nav role="navigation" className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              aria-label="Navigate to ${link.name}"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="text-foreground hover:text-[#483dfb] transition-colors cursor-pointer"
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
        <div className="flex items-center space-x-2 md:hidden">
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
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md shadow-lg md:hidden animate-fade-in">
            <nav className="flex flex-col p-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.to}
                  aria-label="Navigate to ${link.name}"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="py-3 text-foreground hover:text-[#483dfb] transition-colors cursor-pointer"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
