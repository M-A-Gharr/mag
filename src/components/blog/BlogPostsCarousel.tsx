import { useRef, useState, useEffect } from 'react';
import { Card, CardHeader, CardContent, CardFooter, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog";
import { X } from "lucide-react";
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

type BlogPost = {
  id: number;
  title: string;
  excerpt: string;
  content?: string;
  date: string;
  url: string;
  read: string;
  close: string;
};

const BlogPostsCarousel = () => {
  const { t } = useTranslation();
  const isRTL = i18next.language === 'ar';

  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [current, setCurrent] = useState(0);
  const itemRefs = useRef<HTMLDivElement[]>([]);

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: t(`bonus.blogPosts.0.title`),
      excerpt: t(`bonus.blogPosts.0.excerpt`),
      content: t('bonus.blogPosts.0.content'),
      date: t('bonus.blogPosts.0.date'),
      url: t('bonus.blogPosts.0.url'),
      read: t('bonus.read'),
      close: t('bonus.close'),
    },
    {
      id: 2,
      title: t(`bonus.blogPosts.1.title`),
      excerpt: t(`bonus.blogPosts.1.excerpt`),
      content: t(`bonus.blogPosts.1.content`),
      date: t(`bonus.blogPosts.1.date`),
      url: t(`bonus.blogPosts.1.url`),
      read: t('bonus.read'),
      close: t('bonus.close'),
    },
    {
      id: 3,
      title: t(`bonus.blogPosts.2.title`),
      excerpt: t(`bonus.blogPosts.2.excerpt`),
      content: t(`bonus.blogPosts.2.content`),
      date: t(`bonus.blogPosts.2.date`),
      url: t(`bonus.blogPosts.2.url`),
      read: t('bonus.read'),
      close: t('bonus.close'),
    },
    {
      id: 4,
      title: t(`bonus.blogPosts.3.title`),
      excerpt: t(`bonus.blogPosts.3.excerpt`),
      content: t(`bonus.blogPosts.3.content`),
      date: t(`bonus.blogPosts.3.date`),
      url: t(`bonus.blogPosts.3.url`),
      read: t('bonus.read'),
      close: t('bonus.close'),
    },
    {
      id: 5,
      title: t(`bonus.blogPosts.4.title`),
      excerpt: t(`bonus.blogPosts.4.excerpt`),
      content: t(`bonus.blogPosts.4.content`),
      date: t(`bonus.blogPosts.4.date`),
      url: t(`bonus.blogPosts.4.url`),
      read: t('bonus.read'),
      close: t('bonus.close'),
    }
  ];

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


  const next = () => {
    setCurrent((prev) => (prev + 1) % blogPosts.length);
  };

  const previous = () => {
    setCurrent((prev) => (prev === 0 ? blogPosts.length - 1 : prev - 1));
  };

  const handleReadMore = (post: BlogPost) => {
    setSelectedPost(post);
    setIsDialogOpen(true);
  };

  return (
    <>
      <div className="w-full">
        <div
          className={`flex overflow-x-auto gap-1 snap-x snap-mandatory scroll-smooth ${isRTL ? 'flex-row-reverse' : ''
            }`}
          dir={isRTL ? 'rtl' : 'ltr'}
        >
          {blogPosts.map((post, index) => (
            <div
              key={post.id}
              ref={(el) => (itemRefs.current[index] = el!)}
              className="min-w-full snap-center"
            >
              <Card className="h-full w-full">
                <CardHeader className="p-2">
                  <CardTitle className="text-base md:text-lg lg:text-xl">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-sm md:text-base">
                    {post.date}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pb-1 px-2">
                  <p className="text-sm">{post.excerpt}</p>
                </CardContent>
                <CardFooter className="p-2 flex justify-end">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleReadMore(post)}
                    className="hover:bg-muted hover:shadow-md hover:scale-[1.01]"
                  >
                    {post.read}
                  </Button>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
        <div className="flex justify-center gap-2 mt-2">
          <Button onClick={previous} variant="outline" size="sm">
            ←
          </Button>
          <Button onClick={next} variant="outline" size="sm">
            →
          </Button>
        </div>
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-screen-sm w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] px-4 py-6">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-primary">
              {selectedPost?.title}
            </DialogTitle>
            <p className="text-sm text-muted-foreground mt-1">
              {selectedPost?.date}
            </p>
          </DialogHeader>
          <div className="my-4 prose dark:prose-invert">
            <p>{selectedPost?.content}</p>
          </div>
          <div className="flex justify-end">
            <DialogClose asChild>
              <Button variant="outline">
                <X className="mr-2 h-4 w-4" />
                {t(`bonus.close`)}
              </Button>
            </DialogClose>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default BlogPostsCarousel;
