"use client";

import { useState, useEffect, useCallback } from "react";
import dynamic from "next/dynamic";
import { motion, AnimatePresence } from "framer-motion";
import { GraduationCap, X, MapPin } from "lucide-react";
import { education } from "@/lib/data";
import SectionHeading from "@/components/ui/section-heading";

// Dynamic import to avoid SSR issues with Leaflet
const LeafletMap = dynamic(() => import("@/components/ui/leaflet-map"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center bg-muted/50">
      <div className="flex flex-col items-center gap-2">
        <div className="h-6 w-6 border-2 border-foreground/20 border-t-foreground/60 rounded-full animate-spin" />
        <span className="text-xs text-muted-foreground">Loading map…</span>
      </div>
    </div>
  ),
});

export default function Education() {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);
  const [mapData, setMapData] = useState<{
    institution: string;
    location: string;
    coords: { lat: number; lng: number };
  } | null>(null);

  const closeMap = useCallback(() => setMapData(null), []);

  // Close on Escape key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeMap();
        setSelectedImage(null);
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [closeMap]);

  return (
    <>
      <section id="education" className="py-16 sm:py-24 px-4 sm:px-6 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <SectionHeading icon={GraduationCap} title="Education" />

          <div className="mt-10 space-y-0">
            {education.map((edu, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                className="relative pl-8 pb-10 last:pb-0 border-l border-border/60"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-1 -translate-x-1/2 w-3 h-3 rounded-full bg-foreground/20 border-2 border-background" />

                <div className="space-y-1">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
                    <h3 className="text-sm sm:text-base font-semibold text-foreground">
                      {edu.institution}
                    </h3>
                    <span className="text-xs text-muted-foreground whitespace-nowrap">
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground">{edu.degree}</p>
                  <p className="text-xs sm:text-sm font-medium text-foreground/70">{edu.score}</p>

                  {/* Location with map icon */}
                  <button
                    onClick={() => {
                      if ("coords" in edu && edu.coords) {
                        setMapData({
                          institution: edu.institution,
                          location: edu.location,
                          coords: edu.coords as { lat: number; lng: number },
                        });
                      }
                    }}
                    className={`group relative flex items-center gap-1 w-fit ${
                      "coords" in edu && edu.coords
                        ? "cursor-pointer"
                        : "cursor-default"
                    }`}
                  >
                    <MapPin className={`h-3 w-3 ${
                      "coords" in edu && edu.coords
                        ? "text-muted-foreground group-hover:text-red-500 transition-colors"
                        : "text-muted-foreground"
                    }`} />
                    <span className={`text-xs text-muted-foreground ${
                      "coords" in edu && edu.coords
                        ? "group-hover:text-foreground transition-colors"
                        : ""
                    }`}>
                      {edu.location}
                    </span>
                    {"coords" in edu && edu.coords && (
                      <span className="absolute -top-7 left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] bg-foreground text-background px-2 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                        View on Map
                      </span>
                    )}
                  </button>

                  {/* College Photos */}
                  {"photos" in edu && edu.photos && (
                    <div className="flex gap-2 pt-3 overflow-x-auto scrollbar-hide">
                      {(edu.photos as { src: string; alt: string }[]).map((photo, j) => (
                        <div
                          key={j}
                          onClick={() => setSelectedImage(photo)}
                          className="shrink-0 w-28 h-20 sm:w-32 sm:h-22 rounded-lg overflow-hidden border border-border/60 shadow-sm cursor-pointer hover:shadow-md hover:scale-105 transition-all"
                        >
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={photo.src}
                            alt={photo.alt}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
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

      {/* Map Dialog */}
      <AnimatePresence>
        {mapData && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-100 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
            onClick={closeMap}
          >
            <motion.div
              initial={{ scale: 0.3, opacity: 0, borderRadius: "50%" }}
              animate={{ scale: 1, opacity: 1, borderRadius: "16px" }}
              exit={{ scale: 0.3, opacity: 0, borderRadius: "50%" }}
              transition={{ type: "spring", damping: 22, stiffness: 260 }}
              className="relative w-full max-w-2xl bg-background shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between px-5 py-3 border-b border-border/60">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-red-500" />
                  <div>
                    <h3 className="text-sm font-semibold text-foreground leading-tight">
                      {mapData.institution}
                    </h3>
                    <p className="text-xs text-muted-foreground">{mapData.location}</p>
                  </div>
                </div>
                <button
                  onClick={closeMap}
                  className="p-1.5 rounded-lg hover:bg-muted transition-colors"
                >
                  <X className="h-4 w-4 text-muted-foreground" />
                </button>
              </div>

              {/* Map */}
              <div className="w-full h-87.5 sm:h-105">
                <LeafletMap
                  lat={mapData.coords.lat}
                  lng={mapData.coords.lng}
                  institution={mapData.institution}
                  location={mapData.location}
                />
              </div>

              {/* Footer with links */}
              <div className="px-5 py-2.5 border-t border-border/60 flex items-center justify-between">
                <a
                  href={`https://www.openstreetmap.org/?mlat=${mapData.coords.lat}&mlon=${mapData.coords.lng}#map=16/${mapData.coords.lat}/${mapData.coords.lng}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
                >
                  Open in OpenStreetMap ↗
                </a>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${mapData.coords.lat},${mapData.coords.lng}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors group"
                >
                  {/* Google Maps icon */}
                  <svg className="h-4 w-4" viewBox="0 0 92.3 132.3" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#1a73e8" d="M60.2 2.2C55.8.8 51 0 46.1 0 32 0 19.3 6.4 10.8 16.5l21.8 18.3L60.2 2.2z" />
                    <path fill="#ea4335" d="M10.8 16.5C4.1 24.5 0 34.9 0 46.1c0 8.7 1.7 15.7 4.6 22l28-32.4L10.8 16.5z" />
                    <path fill="#4285f4" d="M46.2 28.5c9.8 0 17.7 7.9 17.7 17.7 0 4.3-1.6 8.3-4.2 11.4 0 0 13.9-16.2 27.5-32.1-5.6-10.8-15.3-19-27-22.7L32.6 34.8c3.3-3.8 8.1-6.3 13.6-6.3" />
                    <path fill="#fbbc04" d="M46.2 63.8c-9.8 0-17.7-7.9-17.7-17.7 0-4.3 1.6-8.3 4.1-11.3l-28 32.4c4.3 9.7 11.4 18.4 19.2 27.5l35.2-41C56 57.5 51.3 63.8 46.2 63.8" />
                    <path fill="#34a853" d="M59.1 109.2c15.4-24.1 33.3-35 33.3-63 0-7.7-1.9-14.9-5.2-21.3L23.8 94.8c3.5 4.1 6.8 8.2 9.4 12.3 8.1 12.8 8 25.2 13 25.2s4.9-12.4 12.9-23.1" />
                  </svg>
                  Open in Google Maps ↗
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
