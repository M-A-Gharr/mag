// Everything under the hero, in its own chunk: the header and hero paint first, and this part
// is downloaded and rendered right after (it starts loading as soon as the page renders).
import { useEffect } from 'react';
import { scroller } from 'react-scroll';
import About from '@/pages/About';
import Project from '@/pages/Projects';
import Skills from '@/pages/Skills';
import Certificat from '@/pages/Certificates';
import Bonus from '@/pages/Bonus';
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
    <About />
    <Project />
    <Skills />
    <Certificat />
    <Bonus />
    <Contact />
  </>
  );
};

export default BelowFold;
