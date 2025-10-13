
import { useTranslation } from 'react-i18next';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, GraduationCap, Book, BookOpen } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

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
        <h2 className="section-title text-center transition-all duration-300 ease-in-out hover:bg-muted hover:shadow-md hover:scale-[1.01]">{t('certificates.title')}</h2>
        <p className="section-subtitle text-center">{t('certificates.subtitle')}</p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
          {/* Education Section with 3 subsections */}
          <div className="space-y-8">
            {/* Main education */}
            <Card className="overflow-hidden ">
              <CardContent className="p-6 transition-all duration-300 ease-in-out hover:bg-muted hover:shadow-md hover:scale-[1.01] hover:border-l-4">
                <div className="flex items-center mb-4 ">
                  <GraduationCap className="text-[#483dfb] mr-3 transition-all duration-300 ease-in-out hover:bg-muted hover:shadow-md hover:scale-[1.01] hover:border-l-4" size={28} />
                  <h3 className="text-xl font-semibold">{t('certificates.education.title')}</h3>
                </div>

                <div className="mb-4 border-l-2 border-[#483dfb] pl-4 transition-all duration-300 ease-in-out hover:bg-muted hover:shadow-md hover:scale-[1.01] hover:border-l-4">
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

            {/* Academic Background */}
            <Card className="overflow-hidden">
              <CardContent className="p-6 transition-all duration-300 ease-in-out hover:bg-muted hover:shadow-md hover:scale-[1.01] hover:border-l-4">
                <div className="flex items-center mb-4">
                  <Book className="text-[#483dfb] mr-3 transition-all duration-300 ease-in-out hover:bg-muted hover:shadow-md hover:scale-[1.01] hover:border-l-4" size={28} />
                  <h3 className="text-xl font-semibold">{t('certificates.academic.title')}</h3>
                </div>

                <div className="mb-4 border-l-2 border-[#483dfb] pl-4 transition-all duration-300 ease-in-out hover:bg-muted hover:shadow-md hover:scale-[1.01] hover:border-l-4">
                  <h4 className="text-lg font-medium">{t('certificates.academic.bachelor')}</h4>
                  <p className="text-muted-foreground">{t('certificates.academic.bachelorYears')}</p>
                  <p className="mt-1 text-sm">{t('certificates.academic.bachelorDesc')}</p>
                </div>

                <div className="mb-4 border-l-2 border-[#483dfb] pl-4 transition-all duration-300 ease-in-out hover:bg-muted hover:shadow-md hover:scale-[1.01] hover:border-l-4">
                  <h4 className="text-lg font-medium">{t('certificates.academic.hnd')}</h4>
                  <p className="text-muted-foreground">{t('certificates.academic.hndYears')}</p>
                  <p className="mt-1 text-sm">{t('certificates.academic.hndDesc')}</p>
                </div>
              </CardContent>
            </Card>

            {/* Continuous Learning */}
            <Card className="overflow-hidden">
              <CardContent className="p-6 transition-all duration-300 ease-in-out hover:bg-muted hover:shadow-md hover:scale-[1.01] hover:border-l-4">
                <div className="flex items-center mb-4">
                  <BookOpen className="text-[#483dfb] mr-3 transition-all duration-300 ease-in-out hover:bg-muted hover:shadow-md hover:scale-[1.01] hover:border-l-4" size={28} />
                  <h3 className="text-xl font-semibold">{t('certificates.continuous.title')}</h3>
                </div>

                <div className="border-l-2 border-[#483dfb] pl-4 transition-all duration-300 ease-in-out hover:bg-muted hover:shadow-md hover:scale-[1.01] hover:border-l-4">
                  <h4 className="text-lg font-medium">{t('certificates.continuous.online')}</h4>
                  <p className="text-muted-foreground">{t('certificates.continuous.onlineYears')}</p>
                  <p className="mt-1 text-sm">{t('certificates.continuous.onlineDesc')}</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Certificates */}
          <div>
            <Card className="h-full">
              <CardContent className="p-6">
                <div className="flex items-center mb-6">
                  <Award className="text-[#483dfb] mr-3 transition-all duration-300 ease-in-out hover:bg-muted hover:shadow-md hover:scale-[1.01] hover:border-l-4" size={28} />
                  <div>
                    <h3 className="text-xl font-semibold">{t('certificates.sub')}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{t('certificates.salesforceCerts')}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {certificates.map((cert, index) => (
                    <div
                      key={index}
                      className="bg-secondary/20 rounded-lg p-4 flex flex-col items-center justify-center text-center 
                hover:shadow-lg hover:scale-105 hover:bg-secondary/30 transition-all duration-300 ease-in-out"
                    >
                      <div className={`w-12 h-12 rounded-full mb-3 flex items-center justify-center ${cert.color}`}>
                        <Award className="text-white" size={24} />
                      </div>
                      <h4 className="font-medium">{cert.name}</h4>
                      <Badge variant="outline" className="mt-2">Certified</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>

  );
};

export default CertificatesSection;