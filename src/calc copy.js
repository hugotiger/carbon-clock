import { useState, useEffect } from "react";
import moment from "moment";

const updateInterval = 100; // How often to update the stats (ms)
const secondsPerYear = 3600 * 24 * 365.25 * 1000;
const startDate = moment("2018-01-01");
const initialAnnualEmissions = 42.0 * 1e9;
const totalBudget = 420 * 1e9;
const annualGrowthRate = 1.0; //TODO: Prova ändra till 1.0

const calcRemaining = () => {
  const remainingBudget = getRemainingBudget();
  const remainingTime = getEndDate();
  return { remainingBudget, remainingTime };
};

const secondsPassed = () => {
  const secondsPassed = moment().diff(startDate);
  return secondsPassed;
};

const getRemainingBudget = () => {
  const budgetUsed =
    (secondsPassed(startDate) / secondsPerYear) * initialAnnualEmissions;
  return totalBudget - budgetUsed;
};

const getEndDate = () => {
  const yearsBudget = totalBudget / initialAnnualEmissions;
  const endDate = moment(startDate + yearsBudget * secondsPerYear);
  const currentDate = moment();

  getSomething(endDate);
  return endDate.format("y M");
};

const getSomething = (endDate) => {
  const now = moment();
  let years,
    months,
    days,
    h,
    m,
    s = [];
  years = endDate.diff(now, "years");
  months = endDate.month() - now.month();
  days = endDate.day() - now.day();
  h = endDate.hour() - now.hours();
  s = endDate.hour() - now.hours();

  while (true) {
    if (months < 0) {
      years--;
      months += 12;
    }
    if (days < 0) {
      months--;
      days += getDaysInMonth(now.getMonth() - 1, now.getFullYear());
    }
    if (hd < 0) {
      dd--;
      hd += 24;
    }
    if (nd < 0) {
      hd--;
      nd += 60;
    }
    if (sd < 0) {
      nd--;
      sd += 60;
    }
    if (md >= 0 && yd >= 0 && dd >= 0 && hd >= 0 && nd >= 0 && sd >= 0) break;
  }
};
var now = new Date(),
  yd,
  md,
  dd,
  hd,
  nd,
  sd,
  ms,
  out = [];

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
