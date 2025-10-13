
import { useState } from 'react';
import { MapPin, Mail, Phone, Linkedin, Youtube } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import emailjs from 'emailjs-com'
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';

const ContactSection = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    from_name: '',
    reply_to: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Envoi de l'email vers TOI (Notification)
    emailjs
      .send(
        'service_8nsntik',
        'template_ziyld0c',  // <-- Ton template qui t'envoie le message
        formData,
        'vfswi8UCo__CgVoZo'
      )
      .then(() => {
        // Ensuite envoi de l'email de confirmation à l'utilisateur
        emailjs.send(
          'service_8nsntik',
          'template_pnyo2ld', // <-- Ton template pour l'utilisateur
          formData,
          'vfswi8UCo__CgVoZo'
        )
          .then(() => {
            console.log('SUCCESS!');
            setIsSubmitting(false);
            setIsSubmitted(true);
            setFormData({ from_name: '', reply_to: '', message: '' });
            setTimeout(() => setIsSubmitted(false), 5000);
          })
          .catch((error) => {
            console.error('FAILED sending confirmation email...', error.text);
            setIsSubmitting(false);
          });
      })
      .catch((error) => {
        console.error('FAILED sending notification email...', error.text);
        setIsSubmitting(false);
      });
  };


  const contactInfo = [
    {
      icon: <MapPin className="h-5 w-5 text-[#483dfb]" />,
      label: t('contact.info.address'),
      value: t('contact.info.addressValue', 'Dubai, UAE'),
      link: null
    },
    {
      icon: <Mail className="h-5 w-5 text-[#483dfb]" />,
      label: t('contact.info.email'),
      value: "contact.maminegh@gmail.com",
      link: "mailto:contact.maminegh@gmail.com"
    },
    {
      icon: <Phone className="h-5 w-5 text-[#483dfb]" />,
      label: t('contact.info.phone'),
      value: "+971 55 388 2105",
      link: "tel:+971553882105"
    },
    {
      icon: <Linkedin className="h-5 w-5 text-[#483dfb]" />,
      label: t('contact.info.linkedin'),
      value: "linkedin.com/in/m-amine-gharrab",
      link: "https://linkedin.com/in/m-amine-gharrab"
    }
  ];

  return (
      <section id="contact" className="section-container">
        <h2 className="section-title text-center">{t('contact.title')}</h2>
        <p className="section-subtitle text-center max-w-3xl mx-auto">
          {t('contact.subtitle')}
        </p>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <div className="bg-secondary/20 rounded-xl p-6 md:p-8 animate-slide-in-bottom">
            <h3 className="text-2xl font-semibold mb-6">{t('contact.form.title')}</h3>

            {isSubmitted ? (
              <div className="p-4 bg-[#483dfb]/20 border border-[#483dfb]/30 rounded-lg mb-6">
                <p className="text-foreground font-medium">
                  {t('contact.form.success')}
                </p>
              </div>
            ) : null}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className='transition-all duration-300 hover:border-[#483dfb] hover:shadow-lg hover:shadow-[#483dfb]/10 animate-scale-in'>
                <Label htmlFor="name">{t('contact.form.name')}</Label>
                <Input
                  id="name"
                  name="from_name"
                  placeholder={t('contact.form.name')}
                  value={formData.from_name}
                  onChange={handleChange}
                  required
                  className="mt-1"
                />
              </div>

              <div className='transition-all duration-300 hover:border-[#483dfb]/40 hover:shadow-lg hover:shadow-[#483dfb]/10 animate-scale-in'>
                <Label htmlFor="email">{t('contact.form.email')}</Label>
                <Input
                  id="email"
                  name="reply_to"
                  type="email"
                  placeholder={t('contact.form.email')}
                  value={formData.reply_to}
                  onChange={handleChange}
                  required
                  className="mt-1"
                />
              </div>

              <div className='transition-all duration-300 hover:border-[#483dfb]/40 hover:shadow-lg hover:shadow-[#483dfb]/10 animate-scale-in'>
                <Label htmlFor="message">{t('contact.form.message')}</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder={t('contact.form.message')}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="mt-1 min-h-[120px]"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-[#483dfb] hover:bg-[#483dfb]-dark text-white"
                disabled={isSubmitting}
              >
                {isSubmitting ? t('contact.form.sending') : t('contact.form.submit')}
              </Button>
            </form>
          </div>

          {/* Contact and map */}
          <div className="space-y-8">
            <div className="bg-secondary/20 rounded-xl p-6 md:p-8 animate-slide-in-bottom" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-2xl font-semibold mb-6">{t('contact.info.title')}</h3>

              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 p-2 bg-secondary/30 rounded-md mr-4">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-sm text-foreground/70">{item.label}</p>
                      {item.link ? (
                        <a
                          href={item.link}
                          target={item.link.startsWith('http') ? '_blank' : undefined}
                          rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="text-foreground hover:text-[#483dfb] transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-foreground">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="h-[300px] rounded-xl overflow-hidden animate-slide-in-bottom" style={{ animationDelay: '0.3s' }}>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.3863354144246!2d55.144320175378276!3d25.08878037778088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6b503778dffd%3A0x993727742c84f489!2sPrincess%20Tower!5e0!3m2!1sen!2sae!4v1745888033758!5m2!1sen!2sae" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>
      </section>
  );
};

export default ContactSection;
