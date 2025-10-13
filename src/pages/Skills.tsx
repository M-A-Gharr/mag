import { Helmet } from "react-helmet-async";
import SkillsSection from "@/components/SkillsSection";
import '@/i18n/config';
import { useTranslation } from 'react-i18next';

const Skills = () => {
    const { t, i18n } = useTranslation();
    return (
        <>
            <Helmet>
                <title>{t('skills.meta.title')}</title>
                <meta
                    name="description"
                    content={t('skills.meta.description')}
                />
                <meta property="og:title" content={t('skills.meta.title')} />
                <meta property="og:description" content={t('skills.meta.description')} />
                <meta property="og:image" content="https://maminegh.com/images/profile/magprofile.png" />
                <meta property="og:type" content="website" />
                <link rel="canonical" href="https://maminegh.com/skills" />
            </Helmet>
            <SkillsSection/>
        </>
    );
};

export default Skills;