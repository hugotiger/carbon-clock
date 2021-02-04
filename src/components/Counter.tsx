import React, { useEffect, useState } from "react";
import { animate } from "framer-motion";
import { usePrevious } from "../hooks";

type formatFn = (val: number) => string;

interface CounterProps {
  value: number;
  formatValue?: formatFn;
  duration?: number;
  renderInterval?: number;
  as?: keyof JSX.IntrinsicElements;
  [x: string]: any;
}

interface HTMLAttributes
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  > {}

type Props = CounterProps & HTMLAttributes;

const Counter: React.FC<Props> = (props) => {
  const {
    value = 0,
    formatValue = (val: number) => val.toString(),
    duration = 0.5,
    renderInterval = 100,
    as = "span",
    ...restProps
  } = props;

  const [currentVal, setCurrentVal] = useState(value);
  const prevVal = usePrevious(currentVal);

  const [displayValue, setDisplayValue] = useState(currentVal);
  const [updateCount, setUpdateCount] = useState(0);

  useEffect(() => {
    const startValue = prevVal ?? value;
    const controls = animate(startValue, value, {
      duration: duration,
      type: "tween",
      ease: "linear",
      onUpdate(value) {
        setCurrentVal(value);
      },
    });

    return () => controls.stop();
    // Safe as usePrevious is dependant on value
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  useEffect(() => {
    const interval = setInterval(
      () => setUpdateCount((prev) => prev + 1),
      renderInterval
    );

    return () => clearInterval(interval);
  }, [renderInterval]);

  useEffect(() => {
    setDisplayValue(currentVal);
    // `currentVal` is intentionally left out to reduce number of renders
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [updateCount]);

  return React.createElement(as, { ...restProps }, formatValue(displayValue));
};

export default Counter;
