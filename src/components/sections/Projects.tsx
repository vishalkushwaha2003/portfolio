"use client";

import { motion } from "framer-motion";
import { FolderOpen, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/lib/data";
import SectionHeading from "@/components/ui/section-heading";

export default function Projects() {
  return (
    <section id="projects" className="py-16 sm:py-24 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <SectionHeading icon={FolderOpen} title="Projects" />

        <div className="grid md:grid-cols-2 gap-6 mt-10">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <Card className="h-full border border-border/60 shadow-sm hover:shadow-md transition-all group">
                <CardContent className="p-6 space-y-4 h-full flex flex-col">
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <h3 className="text-sm sm:text-base font-semibold text-foreground group-hover:text-foreground/80 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs text-muted-foreground">
                        {project.period}
                      </p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-muted-foreground/50 group-hover:text-foreground/60 transition-colors shrink-0 mt-1" />
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <Badge key={t} variant="secondary" className="text-xs font-normal px-2 py-0.5">
                        {t}
                      </Badge>
                    ))}
                  </div>

                  <ul className="space-y-2 flex-1">
                    {project.highlights.map((h, j) => (
                      <li key={j} className="text-xs sm:text-sm text-muted-foreground leading-relaxed flex gap-2">
                        <span className="text-foreground/30 mt-1 shrink-0">•</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
