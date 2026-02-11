"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, Trophy, Images, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { coursework, extracurriculars, extracurricularPhotos } from "@/lib/data";
import SectionHeading from "@/components/ui/section-heading";

export default function Extras() {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);

  return (
    <>
      <section id="extras" className="py-16 sm:py-24 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Coursework */}
          <div>
            <SectionHeading icon={BookOpen} title="Relevant Coursework" />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-50px" }}
              className="flex flex-wrap gap-2 mt-6"
            >
              {coursework.map((course) => (
                <Badge
                  key={course}
                  variant="secondary"
                  className="text-xs sm:text-sm font-normal px-3 sm:px-4 py-1 sm:py-1.5"
                >
                  {course}
                </Badge>
              ))}
            </motion.div>
          </div>

          {/* Extracurriculars */}
          <div>
            <SectionHeading icon={Trophy} title="Extracurricular" />
            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-50px" }}
              className="mt-6 space-y-3"
            >
              {extracurriculars.map((item, i) => (
                <li key={i} className="text-xs sm:text-sm text-muted-foreground leading-relaxed flex gap-3">
                  <span className="text-foreground/30 mt-0.5 shrink-0">•</span>
                  {item}
                </li>
              ))}
            </motion.ul>

            {/* Photo Gallery */}
            <div className="mt-10">
              <div className="flex items-center gap-2 mb-4">
                <Images className="h-4 w-4 text-muted-foreground" />
                <h3 className="text-sm font-medium text-foreground/80 uppercase tracking-wider">
                  Moments
                </h3>
              </div>
              <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-hide">
                {extracurricularPhotos.map((photo, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    viewport={{ once: true, margin: "-50px" }}
                    onClick={() => setSelectedImage(photo)}
                    className="shrink-0 w-40 h-28 sm:w-48 sm:h-32 rounded-lg overflow-hidden border border-border/60 shadow-sm hover:shadow-md hover:scale-105 transition-all cursor-pointer"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Popup */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-100 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-3xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-10 right-0 sm:-top-3 sm:-right-10 text-white/80 hover:text-white transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full h-auto rounded-xl shadow-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
