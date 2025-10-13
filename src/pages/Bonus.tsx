import { Helmet } from "react-helmet-async";
import BonusProfessionnelsSection from "@/components/BonusProfessionelsSection";
import '@/i18n/config';
import { useTranslation } from 'react-i18next';

const Bonus = () => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <Helmet>
        <title>{t('bonus.meta.title')}</title>
        <meta name="description" content={t('bonus.meta.description')} />
        <meta property="og:title" content={t('bonus.meta.title')} />
        <meta property="og:description" content={t('bonus.meta.description')} />
        <meta property="og:image" content="https://maminegh.com/images/profile/magprofile.png" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://maminegh.com/bonus" />
      </Helmet>
      <BonusProfessionnelsSection />
    </>
  );
};

export default Bonus;