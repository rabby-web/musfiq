import React from "react";

interface SectionTitleProps {
  title: string;
  className?: string;
}

export default function SectionTitle({ title, className }: SectionTitleProps) {
  return (
    <div
      className={`text-2xl font-semibold flex items-baseline gap-1 ${className}`}
    >
      <div className="text-[#8750F7]">{title}</div>
      <div className="max-w-48 min-w-32 border border-[#8750F7]"></div>
    </div>
  );
}
