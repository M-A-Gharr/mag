import { useState, useEffect, useRef } from 'react';
import { Card, CardHeader, CardContent, CardFooter, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

type TestimonialType = {
  id: number;
  quote: string;
  name: string;
  role: string;
  avatar: string;
};

const TestimonialsCarousel = () => {
  const { t } = useTranslation();
  const isRTL = i18next.language === 'ar';

  const testimonials: TestimonialType[] = [
    {
      id: 1,
      quote: t('bonus.testimonialsData.0.quote'),
      name: t('bonus.testimonialsData.0.author'),
      role: t('bonus.testimonialsData.0.role'),
      avatar: 'images/profile/profile.svg',
    },
    {
      id: 2,
      quote: t('bonus.testimonialsData.1.quote'),
      name: t('bonus.testimonialsData.1.author'),
      role: t('bonus.testimonialsData.1.role'),
      avatar: 'images/profile/profile.svg',
    },
    {
      id: 3,
      quote: t('bonus.testimonialsData.2.quote'),
      name: t('bonus.testimonialsData.2.author'),
      role: t('bonus.testimonialsData.2.role'),
      avatar: 'images/profile/profile.svg',
    },
  ];

  const [current, setCurrent] = useState(0);
  const itemRefs = useRef<HTMLDivElement[]>([]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const hasMounted = useRef(false);

  useEffect(() => {
    if (hasMounted.current) {
      itemRefs.current[current]?.scrollIntoView({
        behavior: 'smooth',
        inline: 'center',
        block: 'nearest',
      });
    } else {
      hasMounted.current = true;
    }
  }, [current]);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const previous = () => setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));

  return (
    <div className="w-full px-4">
      <div
        className={`flex overflow-x-auto gap-1 snap-x snap-mandatory scroll-smooth ${isRTL ? 'flex-row-reverse' : ''
          }`}
        dir={isRTL ? 'rtl' : 'ltr'}
      >
        {testimonials.map((testimonial, index) => (
          <div
            key={testimonial.id}
            ref={(el) => (itemRefs.current[index] = el!)}
            className="min-w-full snap-center"
          >
            <Card className="h-full w-full">
              <CardHeader className="p-2">
                <CardTitle className="text-base md:text-lg italic">
                  “{testimonial.quote}”
                </CardTitle>
              </CardHeader>
              <CardContent className="px-2 pb-0">
                <div className="flex items-center gap-2 mt-2">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <CardDescription className="text-sm">{testimonial.role}</CardDescription>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="p-2" />
            </Card>
          </div>
        ))}
      </div>
      <div className="flex justify-center gap-4 mt-4">
        <Button onClick={previous} variant="outline" size="sm">←</Button>
        <Button onClick={next} variant="outline" size="sm">→</Button>
      </div>
    </div>
  );
};

export default TestimonialsCarousel;
