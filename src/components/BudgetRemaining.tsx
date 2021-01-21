import * as React from "react";
import Counter from "./Counter";
import Countdown from "./Countdown";
import { formatNumberValue } from "../utils";

interface Props {
  value: number;
}

const BudgetRemaining: React.FC<Props> = (props) => {
  const { value } = props;

  const label = (
    <>
      CO<sub>2</sub> budget left (tons)
    </>
  );

  return (
    <Countdown label={label}>
      <Counter
        value={value}
        formatValue={formatNumberValue}
        className="budget-value"
      />
    </Countdown>
  );
};

export default BudgetRemaining;
