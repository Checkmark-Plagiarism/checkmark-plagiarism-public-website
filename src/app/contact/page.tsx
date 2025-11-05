import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MapPin, Phone } from "lucide-react";
import ContactForm from "@/sections/contact/contact-form";
import ContactHero from "@/sections/contact/contact-hero";

export const metadata: Metadata = {
  title: "Contact Us — Checkmark Plagiarism",
  description: "Get in touch with Checkmark Plagiarism. Schedule a demo, request pricing, or ask questions about our AI detection and autograding solutions for teachers and schools.",
};

const Contact = () => {

  return (
    <>
    <ContactHero />

    <main className="container mx-auto px-4">
      <div className="max-w-6xl mx-auto">

        <div className="grid lg:grid-cols-2 gap-12 pb-16">
          {/* Contact Form */}
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle className="text-2xl">Send us a message</CardTitle>
              <CardDescription>
                Fill out the form below and we&apos;ll get back to you as soon as possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ContactForm/>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="shadow-soft bg-brand-900">
              <CardHeader>
                <CardTitle className="text-2xl text-white">Get in touch</CardTitle>
                <CardDescription className="text-white">
                  Prefer to reach out directly? Here are other ways to contact us.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-brand-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Email Support</h3>
                    <a
                      href="mailto:support@checkmarkplagiarism.com"
                      className="text-white underline"
                    >
                      support@checkmarkplagiarism.com
                    </a>
                    <p className="text-sm text-white mt-1">
                      We typically respond within 24 hours
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>

    </>
  );
};

export default Contact;
