import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "@/components/ui/calendar";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { CalendarIcon, Code, Database, Search, Link } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";

const BookMeSection = () => {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [showCalendar, setShowCalendar] = useState(false);

  const services = [
    {
      name: "Frontend Development",
      description: "React/Next.js applications with modern UI/UX",
      icon: <Code className="h-5 w-5" />
    },
    {
      name: "API Integration",
      description: "Connecting your product with third-party services",
      icon: <Database className="h-5 w-5" />
    },
    {
      name: "SEO Optimization",
      description: "Improving your site's visibility and performance",
      icon: <Search className="h-5 w-5" />
    },
  ];

  const handleBookNow = () => {
    if (date) {
      const subject = encodeURIComponent("Booking Request");
      const body = encodeURIComponent(
        `I would like to book your services on ${format(date, 'PPP')}.`
      );
      try {
        window.location.href = `mailto:contact.maminegh@ggmail.com?subject=Booking Request&body=I would like to book your services${date ? ` on ${format(date, 'PPP')}` : ''}`;
      } catch {
        alert("Please configure an email app to send the booking request.");
      }
    } else {
      setShowCalendar(true);
    }
  };

  return (
    <section id="book-me" className="section relative overflow-hidden bg-gradient-to-b from-background to-blue-950/30">
      {/* Background elements */}
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full filter blur-3xl opacity-30"></div>
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full filter blur-3xl opacity-30"></div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-10">
          <h2 className="mb-3">Book My Services</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            I'm available for freelance projects and consulting services. Let's work together to bring your ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="bg-card/50 backdrop-blur-sm border border-blue-900/20 hover:border-blue-700/40 transition-all duration-300 hover:shadow-lg hover:shadow-blue-900/10">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{service.name}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-card/30 backdrop-blur-sm p-8 rounded-xl border border-blue-900/20 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Ready to collaborate?</h3>
              <p className="text-muted-foreground mb-6">
                Choose a date that works for you and let's discuss how I can help with your project.
              </p>

              <div className="flex flex-wrap gap-3 mb-6 overflow-visible">
                <Badge variant="outline" className="bg-blue-950/30 hover:bg-blue-900/30 border-blue-800/30">
                  <Code className="mr-1 h-3 w-3" /> Web Development
                </Badge>
                <Badge variant="outline" className="bg-blue-950/30 hover:bg-blue-900/30 border-blue-800/30">
                  <Database className="mr-1 h-3 w-3" /> API Integration
                </Badge>
                <Badge variant="outline" className="bg-blue-950/30 hover:bg-blue-900/30 border-blue-800/30">
                  <Search className="mr-1 h-3 w-3" /> SEO
                </Badge>
                <Badge variant="outline" className="bg-blue-950/30 hover:bg-blue-900/30 border-blue-800/30">
                  <Link className="mr-1 h-3 w-3" /> Salesforce Consultancy
                </Badge>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 relative z-10">
                <Popover open={showCalendar} onOpenChange={setShowCalendar}>
                  <PopoverTrigger asChild>
                    <Button variant="outline" className={cn(
                      "w-full sm:w-auto justify-start text-left font-normal",
                      !date && "text-muted-foreground"
                    )}>
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? format(date, "PPP") : "Select a date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={(newDate) => {
                        setDate(newDate);
                        setShowCalendar(false);
                      }}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>

                <Button
                  className="bg-blue-600 hover:bg-blue-700 text-white w-full sm:w-auto"
                  onClick={() => {
                    setShowCalendar(false);
                    handleBookNow();
                  }}

                >
                  Book Now
                </Button>
              </div>
            </div>

            <div className="hidden md:block">
              <div className="relative">
                <div className="absolute inset-0 bg-blue-500/10 rounded-full filter blur-3xl"></div>
                <div className="relative bg-blue-950/40 border border-blue-800/30 rounded-lg p-6 backdrop-blur-sm">
                  <h4 className="text-lg font-medium mb-4">My Availability</h4>
                  <Separator className="my-3 bg-blue-800/30" />
                  <ul className="space-y-2">
                    <li className="flex justify-between">
                      <span>Design Consultation</span>
                      <Badge>2-3 Days</Badge>
                    </li>
                    <li className="flex justify-between">
                      <span>Development Project</span>
                      <Badge>1-2 Weeks</Badge>
                    </li>
                    <li className="flex justify-between">
                      <span>Technical Review</span>
                      <Badge>24 Hours</Badge>
                    </li>
                  </ul>
                  <Separator className="my-3 bg-blue-800/30" />
                  <p className="text-sm text-muted-foreground">
                    Response time: Usually within 24 hours
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookMeSection;
