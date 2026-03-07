import { cn } from "@/lib/utils";

interface SectionLabelProps {
  children: React.ReactNode;
  light?: boolean;
  className?: string;
}

export default function SectionLabel({
  children,
  light = false,
  className,
}: SectionLabelProps) {
  return (
    <div className={cn("flex items-center justify-center gap-3 mb-6", className)}>
      <div
        className={cn(
          "h-px w-8",
          light ? "bg-white/40" : "bg-[#C9922A]"
        )}
      />
      <span
        className={cn(
          "label-caps",
          light ? "text-white/60" : "text-[#C9922A]"
        )}
      >
        {children}
      </span>
    </div>
  );
}
