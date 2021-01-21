import * as React from "react";
import { motion } from "framer-motion";
import Counter from "./Counter";

const formatValue = (value: number): String =>
  Math.trunc(value)
    .toString()
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1, ");

interface Props {
  value: number;
}

export const BudgetRemaining: React.FC<Props> = (props) => {
  const { value } = props;

  return (
    <motion.div
      key="remaining-budget"
      className="carbon"
      initial={{ scale: 0.99, opacity: 0 }}
      animate={{
        scale: 1,
        opacity: 1,
        transition: {
          duration: 2,
        },
      }}
      exit={{ opacity: 0, transition: { duration: 0 } }}
    >
      <span className="label">
        CO<sub>2</sub> budget left (tons)
      </span>

      {/* <div> */}
      <Counter value={value} formatValue={formatValue} />
      {/* </div> */}
    </motion.div>
  );
};

export default BudgetRemaining;
