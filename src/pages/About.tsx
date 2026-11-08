import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import AboutSection from "@/components/AboutSection";

const About = () => {
    const { t } = useTranslation();
    return (
        <>
            <Helmet>
                <title>{t('about.meta.title')}</title>
                <meta name="description" content={t('about.meta.description')} />
                <meta property="og:title" content={t('about.meta.title')} />
                <meta property="og:description" content={t('about.meta.description')} />
                <meta property="og:image" content="https://maminegh.com/images/profile/magprofile.png" />
                <meta property="og:type" content="website" />
                <link rel="canonical" href="https://maminegh.com/about" />
            </Helmet>
            <AboutSection />
        </>
    );
};

export default About;
