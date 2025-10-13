import { Helmet } from "react-helmet-async";
import HeroSection from "@/components/HeroSection";
import '@/i18n/config';
import { useTranslation } from 'react-i18next';

const Hero = () => {
    const { t, i18n } = useTranslation();
    return (
    <>
            <Helmet>
                <title>{t('hero.meta.title')}</title>
                <meta
                    name="description"
                    content={t('hero.meta.description')}
                />
                <meta property="og:title" content={t('hero.meta.title')} />
                <meta property="og:description" content={t('hero.meta.description')} />
                <meta property="og:image" content="https://maminegh.com/images/profile/magprofile.png" />
                <meta property="og:type" content="website" />
                <link rel="canonical" href="https://maminegh.com/" />
            </Helmet>
            <HeroSection />
        </>
    );
};
    
export default Hero;