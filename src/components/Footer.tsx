
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-scroll';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary/30 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-10">
          <Link
            to="hero"
            spy={true}
            smooth={true}
            offset={-70}
            duration={800}
            className="p-3 bg-[#483dfb] hover:bg-[#483dfb]-dark text-white rounded-full cursor-pointer transition-colors"
          >
            <ArrowUp size={28} />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-gradient">{t('footer.title', 'Portfolio')}</h3>
            <p className="text-foreground/80 max-w-md whitespace-pre-line">
              {t('footer.description', 'Fullstack web developer passionate about creating modern and intuitive web applications. Specialized in React, Node.js, and SQL/NoSQL databases.')}
            </p>
          </div>
          
          <div className="flex flex-col md:items-end">
            <h3 className="text-xl font-semibold mb-4">{t('footer.stayConnected', 'Stay Connected')}</h3>
            <div className="flex space-x-4">
              <a 
                href="mailto:contact.maminegh@gmail.com" 
                className="p-3 bg-secondary/50 hover:bg-[#483dfb]/80 text-foreground hover:text-white rounded-full transition-colors"
              >
                <Mail size={20} />
              </a>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-3 bg-secondary/50 hover:bg-[#483dfb]/80 text-foreground hover:text-white rounded-full transition-colors"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://linkedin.com/in/m-amine-gharrab" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-3 bg-secondary/50 hover:bg-[#483dfb]/80 text-foreground hover:text-white rounded-full transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-secondary/50 pt-8 text-center text-foreground/60 text-sm">
          <p className="whitespace-pre-line">{t('footer.copyright', '© {{year}} Fullstack Developer Portfolio. All rights reserved.', { year: currentYear })}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
