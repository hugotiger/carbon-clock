import React from "react";
import { motion } from "framer-motion";
import { CoundownAttrs } from "../calc";

// TODO: Check if it's worth breaking out a utils folder
function capitalizeFirstLetter(string: String) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

interface Props {
  value: CoundownAttrs;
}

export const TimeRemaining: React.FC<Props> = (props) => {
  const { value } = props;

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
      <h1 className="label">Time remaining</h1>

      <div className="grid">
        {Object.entries(value).map(([key, value]) => (
          <div className="gridItem" key={key}>
            <span className="time__value">{value}</span>
            <span className="time-label">{capitalizeFirstLetter(key)}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default TimeRemaining;
