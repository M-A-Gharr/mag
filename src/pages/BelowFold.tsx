// Everything under the hero, in its own chunk: the header and hero paint first, and this part
// is downloaded and rendered right after (it starts loading as soon as the page renders).
import { useEffect } from 'react';
import { scroller } from 'react-scroll';
import ServicesSection from '@/components/ServicesSection';
import Project from '@/pages/Projects';
import TestimonialsSection from '@/components/TestimonialsSection';
import About from '@/pages/About';
import Skills from '@/pages/Skills';
import Contact from '@/pages/Contact';

const BelowFold = () => {
  // A shared link like maminegh.com/#contact: the section did not exist when the browser
  // looked for it, so scroll to it once the sections are rendered.
  useEffect(() => {
    const id = decodeURIComponent(window.location.hash.slice(1));
    if (!id || !(document.getElementById(id) || document.getElementsByName(id).length)) return;
    const t = setTimeout(() => scroller.scrollTo(id, { smooth: 'easeInOutQuart', duration: 700, offset: -70 }), 300);
    return () => clearTimeout(t);
  }, []);

  return (
  <>
    {/* What I do, the proof, who I am, then how to reach me */}
    <ServicesSection />
    <Project />
    <TestimonialsSection />
    <About />
    <Skills />
    <Contact />
  </>
  );
};

export default BelowFold;
