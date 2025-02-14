"use client";
import moment from "moment-timezone";
import { useState, useEffect } from "react";

export default function CurrentDate() {
  const [date, setDate] = useState(
    moment().tz("Asia/Dhaka").format("dddd, DD MMMM YYYY")
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(moment().tz("Asia/Dhaka").format("dddd, DD MMMM YYYY"));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{ fontSize: "24px", fontWeight: "bold", fontFamily: "monospace" }}
    >
      <span>{date}</span>
    </div>
  );
}
