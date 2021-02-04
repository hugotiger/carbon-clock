import React, { useEffect, useState } from "react";
import { animate } from "framer-motion";
import { usePrevious, useThrottle } from "../hooks";

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
    fps = 30,
    as = "span",
    ...restProps
  } = props;

  const [currentVal, setCurrentVal] = useState(value);
  const prevVal = usePrevious(currentVal);

  const throttledValue = useThrottle(currentVal, fps);

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

  return React.createElement(as, { ...restProps }, formatValue(throttledValue));
};

export default Counter;
