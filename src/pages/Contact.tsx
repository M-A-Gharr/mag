import { Helmet } from "react-helmet-async";
import ContactSection from "@/components/ContactSection";
import '@/i18n/config';
import { useTranslation } from 'react-i18next';

const Contact = () => {
    const { t, i18n } = useTranslation();
    return (
        <>
        <Helmet>
            <title>{t('contact.meta.title')}</title>
            <meta
                name="description"
                content={t('contact.meta.description')}
            />
            <meta property="og:title" content={t('contact.meta.title')} />
            <meta property="og:description" content={t('contact.meta.description')} />
            <meta property="og:image" content="https://maminegh.com/images/profile/magprofile.png" />
            <meta property="og:type" content="website" />
            <link rel="canonical" href="https://maminegh.com/contact" />
        </Helmet>
        <ContactSection />
    </> );
};
export default Contact;