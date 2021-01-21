import { useState, useEffect } from "react";
import moment from "moment";
// @ts-ignore
import countdown from "countdown";

const updateInterval = 500; // How often to update the stats (ms)
const millisecondsPerYear = 3600 * 24 * 365.25 * 1000;
const startDate = moment("2018-01-01");
const initialAnnualEmissions = 42.0 * 1e9;
const totalBudget = 420 * 1e9;
const annualGrowthRate = 1.0; //TODO: Prova ändra till 1.0

const calcRemaining = () => {
  const remainingBudget = getRemainingBudget();
  const remainingTime = getRemainingTime();

  return { remainingBudget, remainingTime };
};

const secondsPassed = (date: moment.MomentInput) => {
  const secondsPassed = moment().diff(date);
  return secondsPassed;
};

const getRemainingBudget = () => {
  const budgetUsed =
    (secondsPassed(startDate) / millisecondsPerYear) * initialAnnualEmissions;
  return totalBudget - budgetUsed;
};

const getRemainingTime = () => {
  const yearsBudget = totalBudget / initialAnnualEmissions;
  const endDate = moment(startDate).add(yearsBudget * millisecondsPerYear);
  const cdown: {
    years: number;
    months: number;
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  } = countdown(endDate);

  // Destructure cdown into object containing times
  const times = (({ years, months, days, hours, minutes, seconds }) => ({
    years,
    months,
    days,
    hours,
    minutes,
    seconds,
  }))(cdown);

  // Create remainingTime object with toString-method implemented
  const remainingTime = {
    ...times,
    toString: () => {
      // Iterate over object and map their keys + values to human-readable string
      return Object.entries(times)
        .map(([key, value]) => [value + " " + key])
        .join(" ");
    },
  };

  return remainingTime;
};

export const useCountdown = () => {
  const [remaining, setRemaining] = useState(calcRemaining());

  useEffect(() => {
    const interval = setInterval(() => {
      setRemaining(calcRemaining());
    }, updateInterval);
    // Clear timeout if the component is unmounted
    return () => clearInterval(interval);
  }, [remaining]);

  return remaining;
};
