"use client";

import { motion } from "framer-motion";
import { Code2, Database, Wrench, Braces } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { skills } from "@/lib/data";
import SectionHeading from "@/components/ui/section-heading";

const skillCategories = [
  { label: "Languages", icon: Braces, items: skills.languages },
  { label: "Frameworks & Libraries", icon: Code2, items: skills.frameworks },
  { label: "Databases", icon: Database, items: skills.databases },
  { label: "Tools", icon: Wrench, items: skills.tools },
];

export default function Skills() {
  return (
    <section id="skills" className="py-16 sm:py-24 px-4 sm:px-6 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <SectionHeading icon={Code2} title="Technical Skills" />

        <div className="grid sm:grid-cols-2 gap-8 mt-10">
          {skillCategories.map((cat, i) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                className="space-y-3"
              >
                <div className="flex items-center gap-2">
                  <Icon className="h-4 w-4 text-muted-foreground" />
                  <h3 className="text-sm font-medium text-foreground/80 uppercase tracking-wider">
                    {cat.label}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((skill) => (
                    <Badge
                      key={skill}
                      variant="outline"
                      className="text-xs sm:text-sm font-normal px-2 sm:px-3 py-1 hover:bg-foreground/5 transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
