"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { experience } from "@/lib/data";
import SectionHeading from "@/components/ui/section-heading";

function getDuration() {
  const start = new Date(2024, 7); // August 2024 (month is 0-indexed)
  const now = new Date();
  let years = now.getFullYear() - start.getFullYear();
  let months = now.getMonth() - start.getMonth();
  if (months < 0) {
    years--;
    months += 12;
  }
  const parts: string[] = [];
  if (years > 0) parts.push(`${years} yr${years > 1 ? "s" : ""}`);
  if (months > 0) parts.push(`${months} mo${months > 1 ? "s" : ""}`);
  return parts.length > 0 ? parts.join(" ") : "< 1 mo";
}

export default function Experience() {
  return (
    <section id="experience" className="py-16 sm:py-24 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3">
          <SectionHeading icon={Briefcase} title="Experience" />
          <span className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full">
            {getDuration()}
          </span>
        </div>

        <div className="space-y-6 mt-10">
          {experience.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <Card className="border border-border/60 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6 space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                    <div>
                      <h3 className="text-base sm:text-lg font-semibold text-foreground">
                        {exp.company}
                      </h3>
                      <p className="text-xs sm:text-sm text-muted-foreground">
                        {exp.role} · {exp.type}
                      </p>
                    </div>
                    <span className="text-xs sm:text-sm text-muted-foreground whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t) => (
                      <Badge key={t} variant="secondary" className="text-xs font-normal">
                        {t}
                      </Badge>
                    ))}
                  </div>

                  <ul className="space-y-2">
                    {exp.highlights.map((h, j) => (
                      <li key={j} className="text-xs sm:text-sm text-muted-foreground leading-relaxed flex gap-2">
                        <span className="text-foreground/40 mt-1.5 shrink-0">•</span>
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
