"use client";
import moment from "moment-timezone";
import { useState, useEffect } from "react";

export default function DhakaTime() {
  const [time, setTime] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const interval = setInterval(() => {
      setTime(moment().tz("Asia/Dhaka").format("hh:mm:ss A"));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div
      style={{ fontSize: "24px", fontWeight: "bold", fontFamily: "monospace" }}
    >
      <span>{time}</span>
    </div>
  );
}
