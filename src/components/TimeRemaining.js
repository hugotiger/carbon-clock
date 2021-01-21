import React from "react";
import { motion } from "framer-motion";

export default function TimeRemaining({ value }) {
  return (
    <motion.div
      key="remaining-time"
      className="carbon"
      initial={{ scale: 0.99, opacity: 0 }}
      animate={{
        scale: 1,
        opacity: 1,
        transition: {
          duration: 1,
        },
      }}
      exit={{ opacity: 0 }}
    >
      <span className="label">Time remaining</span>

      <div className="grid">
        <span className="time__value">{value.years}</span>
        <span className="time__value">{value.months}</span>
        <span className="time__value">{value.days}</span>
        <span className="time__value">{value.hours}</span>
        <span className="time__value">{value.minutes}</span>
        <span className="time__value">{value.seconds}</span>
        <span className="time-label">Years</span>
        <span className="time-label">Months</span>
        <span className="time-label">Days</span>
        <span className="time-label">Hours</span>
        <span className="time-label">Minutes</span>
        <span className="time-label">Seconds</span>
      </div>
    </motion.div>
  );
}
