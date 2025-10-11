"use client";

import { LinkButton } from "@/components/ui/link";
import Image from "next/image";

const heroImage = "/images/home/test (5).png";
const plagiarismReportImage = "/images/home/output.gif";

import { Button } from "@/components/ui/button";
import { ArrowRight, Play, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";

const YT_URL = ""; // TODO: add your YouTube URL here

export const Hero = () => {
  return (
    <section className="relative bg-brand-900 pt-36 pb-40 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-96 h-96 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-brand-300 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-display text-white mb-6 animate-fade-in">
            AI & Plagiarism Detection with Autograding
          </h1>
          <p
            className="text-body-lg text-white/90 mb-10 max-w-2xl mx-auto animate-fade-in"
            style={{ animationDelay: "0.1s" }}
          >
            Catch AI-written text, verify originality, and auto-grade—seamlessly
            inside Canvas and Google Classroom.
          </p>

          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            <LinkButton href="/" variant="hero" size="xl" className="group">
              Contact Us
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </LinkButton>

            {/* Modal Trigger */}
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline-white" size="xl" className="bg-brand-600">
                  <Play className="mr-2" />
                  Watch 60-sec Overview
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl p-0 overflow-hidden">
                <DialogHeader className="px-6 pt-6">
                  <DialogTitle className="text-xl">Product Overview</DialogTitle>
                </DialogHeader>
                <div className="aspect-video w-full bg-black">
                  <iframe
                    className="w-full h-full"
                    src={YT_URL || "about:blank"}
                    title="Product Overview"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>

      {/* Wave decoration at bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
