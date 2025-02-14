import React from "react";

interface SectionTitleProps {
  title: string;
  className?: string;
}
export default function DashboardSectionTitle({
  title,
  className,
}: SectionTitleProps) {
  return (
    <div className={`text-2xl font-semibold ${className}`}>
      <p className="text-[#8750F7]">{title}</p>
    </div>
  );
}
