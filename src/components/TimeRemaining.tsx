import React from "react";
import Countdown from "./Countdown";
import { capitalizeFirstLetter } from "../utils";
import { CountdownInterface } from "../helpers";

interface Props {
  value: CountdownInterface;
}

const TimeRemaining: React.FC<Props> = (props) => {
  const { value } = props;

  return (
    <Countdown label="Time remaining">
      <div className="grid">
        {Object.entries(value).map(([key, value]) => (
          <div className="gridItem" key={key}>
            <span className="time__value">{value}</span>
            <span className="time-label">{capitalizeFirstLetter(key)}</span>
          </div>
        ))}
      </div>
    </Countdown>
  );
};

export default TimeRemaining;
