"use client";

import { motion } from "framer-motion";
import { Mail, MessageCircle, Github, Linkedin, Instagram, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { personalInfo } from "@/lib/data";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 pt-20 md:pt-0 relative">
      <div className="max-w-5xl w-full mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        {/* Photo — shows first on mobile */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="flex justify-center md:justify-end order-first md:order-last"
        >
          <div className="relative w-60 h-72 sm:w-64 sm:h-80 md:w-96 md:h-120 rounded-full overflow-hidden border-4 border-border shadow-lg bg-muted">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={personalInfo.profileImage}
              alt={personalInfo.name}
              className="w-full  object-cover"
            />
          </div>
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="space-y-5 text-center md:text-left"
        >
          <div className="space-y-2">
            <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground">
              Hello, I&apos;m
            </p>
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
              {personalInfo.name}
            </h1>
            <p className="text-base sm:text-xl text-muted-foreground mt-2">
              {personalInfo.title}
            </p>
            <p className="text-xs sm:text-base text-muted-foreground/80 max-w-md mx-auto md:mx-0">
              {personalInfo.subtitle}
            </p>
          </div>

          <div className="flex flex-col gap-2 text-sm text-muted-foreground items-center md:items-start">
            <a
              href="mailto:vishal2003kushwaha@gmail.com?subject=Hello Vishal&body=Hi.. Vishal"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-foreground transition-colors truncate max-w-full"
            >
              <Mail className="h-4 w-4 shrink-0" />
              <span className="truncate">{personalInfo.email}</span>
            </a>
          </div>

          <div className="flex flex-wrap gap-2 sm:gap-3 pt-2 justify-center md:justify-start">
            <Button asChild variant="default" size="sm">
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4 mr-1.5" />
                GitHub
              </a>
            </Button>
            <Button asChild variant="outline" size="sm">
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-4 w-4 mr-1.5" />
                LinkedIn
              </a>
            </Button>
            <Button asChild variant="outline" size="sm">
              <a href={personalInfo.whatsapp} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-4 w-4 mr-1.5" />
                WhatsApp
              </a>
            </Button>
            <Button asChild variant="outline" size="sm">
              <a href={personalInfo.instagram} target="_blank" rel="noopener noreferrer">
                <Instagram className="h-4 w-4 mr-1.5" />
                Instagram
              </a>
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 sm:bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8 }}
        >
          <ArrowDown className="h-5 w-5 text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  );
}
