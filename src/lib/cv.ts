// Downloads the CV in the visitor's language: the French one on the French and Arabic pages
// (French is the business language in Morocco), the English one elsewhere.
export const downloadCv = (language: string) => {
  const fileName = ['fr', 'ar'].includes(language) ? 'Mohamed-Amine-Gharrab-CV-FR.pdf' : 'Mohamed-Amine-Gharrab-CV-EN.pdf';
  const link = Object.assign(document.createElement('a'), { href: `/cv/${fileName}`, download: fileName });
  document.body.appendChild(link);
  link.click();
  link.remove();
};
