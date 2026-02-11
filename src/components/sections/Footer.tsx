"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Instagram, Heart, MessageCircle } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { personalInfo } from "@/lib/data";
import SectionHeading from "@/components/ui/section-heading";

export default function Footer() {
  return (
    <footer id="contact" className="py-16 sm:py-24 px-4 sm:px-6 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <SectionHeading icon={Mail} title="Get in Touch" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-50px" }}
          className="mt-8 space-y-6"
        >
          <p className="text-muted-foreground text-xs sm:text-sm max-w-lg leading-relaxed">
            I&apos;m always open to discussing new opportunities, interesting projects, or
            just having a conversation. Feel free to reach out!
          </p>

          <div className="flex flex-wrap gap-2 sm:gap-3">
            <Button asChild variant="default" size="sm">
              <a href="mailto:vishal2003kushwaha@gmail.com?subject=Hello Vishal&body=Hi.. Vishal" target="_blank" rel="noopener noreferrer">
                <Mail className="h-4 w-4 mr-2" />
                Email Me
              </a>
            </Button>
            <Button asChild variant="outline" size="sm">
              <a href={personalInfo.whatsapp} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-4 w-4 mr-2" />
                WhatsApp
              </a>
            </Button>
            <Button asChild variant="outline" size="sm">
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4 mr-2" />
                GitHub
              </a>
            </Button>
            <Button asChild variant="outline" size="sm">
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-4 w-4 mr-2" />
                LinkedIn
              </a>
            </Button>
            <Button asChild variant="outline" size="sm">
              <a href={personalInfo.instagram} target="_blank" rel="noopener noreferrer">
                <Instagram className="h-4 w-4 mr-2" />
                Instagram
              </a>
            </Button>
          </div>
        </motion.div>

        <Separator className="my-12" />

        <div className="text-center">
          <p className="text-xs text-muted-foreground flex items-center justify-center gap-1">
            by {personalInfo.name} © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}
