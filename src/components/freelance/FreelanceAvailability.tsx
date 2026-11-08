import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { FileText, Briefcase, Download, Sparkles, Workflow, ShoppingCart } from "lucide-react";
import { toast } from "sonner";
import { useTranslation } from 'react-i18next';

const FreelanceAvailability = () => {
  const {t} = useTranslation();
  
  const servicesList = t('bonus.freelance.servicesList', { returnObjects: true });
  const services = Array.isArray(servicesList) ? (servicesList as string[]) : [];

  const technologies = [
    { name: "React", icon: <FileText className="h-5 w-5" /> },
    { name: "Node.js", icon: <Briefcase className="h-5 w-5" /> },
    { name: "Claude", icon: <Sparkles className="h-5 w-5" /> },
    { name: "Make", icon: <Workflow className="h-5 w-5" /> },
    { name: "PrestaShop", icon: <ShoppingCart className="h-5 w-5" /> },
    { name: "Shopify", icon: <ShoppingCart className="h-5 w-5" /> },
  ];

  const handleCVDownload = () => {
    try {
      // Create a URL to a sample CV PDF file (assuming it's in the public folder)
      const cvUrl = "/cv/Mohamed-Amine-Gharrab-CV-EN.pdf";
      
      // Create a link element
      const link = document.createElement("a");
      link.href = cvUrl; // Path to your CV file
      link.setAttribute("download", "Mohamed-Amine-Gharrab-CV-EN.pdf");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      // Show a success message
      toast.success(t(`bonus.freelance.downloadStarted`));
    } catch (error) {
      // Show an error message
      toast.error(t(`bonus.freelance.downloadError`));
      console.error("Download error:", error);
    }
  };

  return (
    <Card className="border border-[#483dfb] overflow-hidden hover:shadow-md transition-all duration-300 w-full max-w-[700px] mx-auto">
      <CardHeader className="bg-blue-50 dark:bg-blue-900/20">
        <CardTitle className="text-xl text-center text-blue-600 dark:text-[#9b87f5]">
          {t(`bonus.freelance.availableForWork`)}
        </CardTitle>
      </CardHeader>
      <CardContent className="px-4 md:px-6 py-4">
        <h4 className="font-semibold mb-2 text-base md:text-lg">{t(`bonus.freelance.availableForWork`)}:</h4>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 mb-6 text-sm md:text-base">
          {services.map((service, index) => (
            <li key={index} className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              <span>{service}</span>
            </li>
          ))}
        </ul>
        
        <Separator className="my-4" />
        
        <div className="flex flex-wrap gap-2 mt-4 justify-center md:justify-start">
          {technologies.map((tech, index) => (
            <Badge 
              key={index} 
              variant="outline" 
              className={cn(
                "bg-blue-50 dark:bg-blue-900/20 transition-all ease-in-out animate-scale-in hover:border-[#483dfb]/40 hover:shadow-lg hover:shadow-[#483dfb]/15",
                "flex items-center gap-1 py-1 px-3"
              )}
            >
              {tech.icon}
              <span>{tech.name}</span>
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex flex-col sm:flex-row sm:justify-between gap-3 px-4 pb-4">
        <Button 
          className="relative inline-flex items-center justify-center sm:flex-row w-4/6 py-3 bg-[#261bfb] hover:bg-[#3e30fb] dark:hover:bg-[#3e30fb] text-white sm:w-auto"
          onClick={() => {
            const contactSection = document.getElementById('contact');
            if (contactSection) {
              contactSection.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        >
          {t(`bonus.freelance.contactMe`)}
        </Button>
        <Button 
          variant="outline"
          className="relative inline-flex items-center justify-center w-5/6 px-6 py-3 overflow-hidden font-medium rounded-md border border-[#483dfb] bg-transparent text-[#483dfb] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-[#483dfb] hover:text-white hover:-translate-y-0.5 dark:text-[#9b87f5] dark:border-[#9b87f5] dark:hover:bg-[#483dfb] dark:hover:border-[#483dfb] dark:hover:text-white"
          onClick={handleCVDownload}
        >
          <Download className="h-4 w-4" />
          {t(`bonus.freelance.downloadCV`)}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default FreelanceAvailability;
