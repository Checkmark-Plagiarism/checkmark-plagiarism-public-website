import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { Mail, MapPin, Phone } from "lucide-react";

type ContactFormValues = z.infer<typeof contactFormSchema>;

const Contact = () => {

  return (
    <main className="container mx-auto px-4 py-16">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Have questions about Checkmark? We&apos;re here to help! Reach out to learn more about our academic integrity solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle className="text-2xl">Send us a message</CardTitle>
              <CardDescription>
                Fill out the form below and we&apos;ll get back to you as soon as possible.
              </CardDescription>
            </CardHeader>
            <CardContent>

            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="text-2xl">Get in touch</CardTitle>
                <CardDescription>
                  Prefer to reach out directly? Here are other ways to contact us.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Email Support</h3>
                    <p className="text-muted-foreground">support@checkmark.edu</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      We typically respond within 24 hours
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Phone Support</h3>
                    <p className="text-muted-foreground">1-800-CHECKMARK</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Monday - Friday, 9 AM - 5 PM EST
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Office</h3>
                    <p className="text-muted-foreground">
                      123 Education Way<br />
                      Innovation District<br />
                      Boston, MA 02115
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-soft bg-gradient-primary text-white">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">Need a Demo?</h3>
                <p className="text-white/90 mb-4">
                  See Checkmark in action with a personalized demo tailored to your institution's needs.
                </p>
                <Button variant="secondary" className="w-full">
                  Schedule a Demo
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
