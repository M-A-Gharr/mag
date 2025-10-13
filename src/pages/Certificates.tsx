import { Helmet } from "react-helmet-async";
import CertificatesSection from "@/components/CertificatesSection";
import '@/i18n/config';
import { useTranslation } from 'react-i18next';

const Certificates = () => {
    const { t, i18n } = useTranslation();
    return (
        <>
            <Helmet>
                <title>{t('certificates.meta.title')}</title>
                <meta
                    name="description"
                    content={t('certificates.meta.description')}
                />
                <meta property="og:title" content={t('certificates.meta.title')} />
                <meta property="og:description" content={t('certificates.meta.description')} />
                <meta property="og:image" content="https://maminegh.com/images/profile/magprofile.png" />
                <meta property="og:type" content="website" />
                <link rel="canonical" href="https://maminegh.com/certificates" />
            </Helmet>
            <CertificatesSection />
        </>
    );
};

export default Certificates;