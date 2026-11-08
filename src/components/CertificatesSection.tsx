
import { useTranslation } from 'react-i18next';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, GraduationCap, Book, BookOpen } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Reveal, SectionHeading, Stagger, StaggerItem } from './motion';

const CertificatesSection = () => {
  const { t } = useTranslation();

  const certificates = [
    { name: 'Salesforce Admin', color: 'bg-blue-500' },
    { name: 'Platform Developer I', color: 'bg-cyan-500' },
    { name: 'Sales Cloud', color: 'bg-green-500' },
    { name: 'Service Cloud', color: 'bg-teal-500' },
    { name: 'React', color: 'bg-blue-600' },
    { name: 'SQL', color: 'bg-orange-500' },
    { name: 'Cisco', color: 'bg-green-600' },
    { name: 'Python', color: 'bg-yellow-500' },
    { name: 'HTML/CSS', color: 'bg-red-500' },
    { name: 'JavaScript', color: 'bg-purple-500' },
  ];

  return (
    <>
      <Helmet>
        <title>{t('certificates.meta.title')}</title>
        <meta name="description" content={t('certificates.meta.description')} />
        <meta property="og:title" content={t('certificates.meta.title')} />
        <meta property="og:description" content={t('certificates.meta.description')} />
        <meta property="og:image" content="https://maminegh.com/images/profile/magprofile.png" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://maminegh.com/certificates" />
      </Helmet>
      <section id="certificates" className="section-container">
        <SectionHeading title={t('certificates.title')} subtitle={t('certificates.subtitle')} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Education Section with 3 subsections */}
          <Stagger className="space-y-8" stagger={0.15}>
            {/* Main education */}
            <StaggerItem>
            <Card className="card-lift overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-center mb-4 ">
                  <GraduationCap className="text-[#483dfb] me-3" size={28} />
                  <h3 className="text-xl font-semibold">{t('certificates.education.title')}</h3>
                </div>

                <div className="mb-4 border-s-2 border-[#483dfb] ps-4 transition-colors duration-500 hover:border-[#9b87f5]">
                  <h4 className="text-lg font-medium">{t('certificates.education.degree')}</h4>
                  <p className="text-muted-foreground">{t('certificates.education.university')}, {t('certificates.education.years')}</p>
                  <ul className="mt-2 space-y-1 text-sm">
                    <li>{t('certificates.education.specialization')}</li>
                    <li>{t('certificates.education.projects')}</li>
                    <li>{t('certificates.education.internship')}</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            </StaggerItem>

            {/* Academic Background */}
            <StaggerItem>
            <Card className="card-lift overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Book className="text-[#483dfb] me-3" size={28} />
                  <h3 className="text-xl font-semibold">{t('certificates.academic.title')}</h3>
                </div>

                <div className="mb-4 border-s-2 border-[#483dfb] ps-4 transition-colors duration-500 hover:border-[#9b87f5]">
                  <h4 className="text-lg font-medium">{t('certificates.academic.bachelor')}</h4>
                  <p className="text-muted-foreground">{t('certificates.academic.bachelorYears')}</p>
                  <p className="mt-1 text-sm">{t('certificates.academic.bachelorDesc')}</p>
                </div>

                <div className="mb-4 border-s-2 border-[#483dfb] ps-4 transition-colors duration-500 hover:border-[#9b87f5]">
                  <h4 className="text-lg font-medium">{t('certificates.academic.hnd')}</h4>
                  <p className="text-muted-foreground">{t('certificates.academic.hndYears')}</p>
                  <p className="mt-1 text-sm">{t('certificates.academic.hndDesc')}</p>
                </div>
              </CardContent>
            </Card>

            </StaggerItem>

            {/* Continuous Learning */}
            <StaggerItem>
            <Card className="card-lift overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <BookOpen className="text-[#483dfb] me-3" size={28} />
                  <h3 className="text-xl font-semibold">{t('certificates.continuous.title')}</h3>
                </div>

                <div className="border-s-2 border-[#483dfb] ps-4 transition-colors duration-500 hover:border-[#9b87f5]">
                  <h4 className="text-lg font-medium">{t('certificates.continuous.online')}</h4>
                  <p className="text-muted-foreground">{t('certificates.continuous.onlineYears')}</p>
                  <p className="mt-1 text-sm">{t('certificates.continuous.onlineDesc')}</p>
                </div>
              </CardContent>
            </Card>
            </StaggerItem>
          </Stagger>

          {/* Certificates */}
          <Reveal delay={0.15}>
            <Card className="h-full">
              <CardContent className="p-6">
                <div className="flex items-center mb-6">
                  <Award className="text-[#483dfb] me-3" size={28} />
                  <div>
                    <h3 className="text-xl font-semibold">{t('certificates.sub')}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{t('certificates.salesforceCerts')}</p>
                  </div>
                </div>

                <Stagger className="grid grid-cols-2 sm:grid-cols-3 gap-4" stagger={0.06} delay={0.2}>
                  {certificates.map((cert, index) => (
                    <StaggerItem key={index}>
                    <div
                      className="card-lift group h-full bg-secondary/20 border border-transparent rounded-lg p-4 flex flex-col items-center justify-center text-center hover:bg-secondary/30"
                    >
                      <div className={`w-12 h-12 rounded-full mb-3 flex items-center justify-center transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110 group-hover:rotate-[8deg] ${cert.color}`}>
                        <Award className="text-white" size={24} />
                      </div>
                      <h4 className="font-medium">{cert.name}</h4>
                      <Badge variant="outline" className="mt-2">Certified</Badge>
                    </div>
                    </StaggerItem>
                  ))}
                </Stagger>
              </CardContent>
            </Card>
          </Reveal>
        </div>
      </section>
    </>

  );
};

export default CertificatesSection;