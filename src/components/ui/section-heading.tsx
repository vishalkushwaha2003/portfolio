import { LucideIcon } from "lucide-react";

interface SectionHeadingProps {
  icon: LucideIcon;
  title: string;
}

export default function SectionHeading({ icon: Icon, title }: SectionHeadingProps) {
  return (
    <div className="flex items-center gap-2 sm:gap-3">
      <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-foreground/5 border border-border/60">
        <Icon className="h-4 w-4 sm:h-5 sm:w-5 text-foreground/70" />
      </div>
      <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-foreground">
        {title}
      </h2>
    </div>
  );
}
