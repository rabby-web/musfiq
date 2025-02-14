"use client";
import moment from "moment-timezone";
import { useState, useEffect } from "react";

export default function Greeting() {
  const [greeting, setGreeting] = useState("");

  const updateGreeting = () => {
    const currentHour = moment().tz("Asia/Dhaka").hour();

    if (currentHour < 12) {
      setGreeting("Good Morning");
    } else if (currentHour < 18) {
      setGreeting("Good Afternoon");
    } else {
      setGreeting("Good Evening");
    }
  };

  useEffect(() => {
    // Update greeting initially
    updateGreeting();

    // Set an interval to update greeting if needed
    const interval = setInterval(updateGreeting, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ fontFamily: "monospace" }}>
      <span className="text-[#8750F7] text-4xl font-bold">{greeting}</span>
    </div>
  );
}
