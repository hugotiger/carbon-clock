import * as React from "react";
import { motion } from "framer-motion";
// @ts-ignore
import AnimatedNumber from "animated-number-react"; //TODO: Byt till https://heyman333.github.io/animated-numbers/

const formatValue = (value: number): String =>
  Math.trunc(value)
    .toString()
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1, ");

interface Props {
  value: number;
}

export const BudgetRemaining: React.FC<Props> = ({ value }) => {
  return (
    <motion.div
      key="remaining-budget"
      className="carbon"
      initial={{ scale: 0.99, opacity: 0 }}
      animate={{
        scale: 1,
        opacity: 1,
        transition: {
          duration: 5,
        },
      }}
      exit={{ opacity: 0 }}
    >
      <span className="label">
        CO<sub>2</sub> budget left (tons)
      </span>

      <div>
        <AnimatedNumber
          value={value.toString()}
          formatValue={formatValue}
          duration={500}
        />
      </div>
    </motion.div>
  );
};

export default BudgetRemaining;
