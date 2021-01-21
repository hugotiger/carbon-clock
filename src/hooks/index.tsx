import { useEffect, useRef, useState } from "react";
import { calcRemaining } from "../calc";

export function usePrevious(value: any) {
  // Use ref to store value
  const ref = useRef();

  // Update ref when value changes
  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}

export function useCountdown(updateInterval: number) {
  const [remaining, setRemaining] = useState(calcRemaining());

  useEffect(() => {
    const interval = setInterval(() => {
      setRemaining(calcRemaining());
    }, updateInterval);

    // Clear timeout before the component is unmounted
    return () => clearInterval(interval);
  }, [remaining, updateInterval]);

  return remaining;
}
