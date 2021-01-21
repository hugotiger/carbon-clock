// @ts-ignore
import countdown from "countdown";
import moment from "moment";
import { CountdownInterface } from "./helpers";

// Constants
const millisecondsPerYear = 3600 * 24 * 365.25 * 1000;
const startDate = moment("2018-01-01");
const initialAnnualEmissions = 42.0 * 1e9;
const totalBudget = 420 * 1e9;

// Top level function.
// Calculates remaining co2-budget and time until it's depleted
export function calcRemaining () {
  const remainingBudget = getRemainingBudget();
  const remainingTime = getRemainingTime();

  return { remainingBudget, remainingTime };
};

// Returns seconds passed since a given date
function secondsPassed  (date: moment.MomentInput) {
  const secondsPassed = moment().diff(date);
  return secondsPassed;
};

// Calculates remaining budget using interpolation
function getRemainingBudget () {
  const budgetUsed =
    (secondsPassed(startDate) / millisecondsPerYear) * initialAnnualEmissions;
  return totalBudget - budgetUsed;
};

// Calculates time until budget is depleted, using interpolation
function getRemainingTime () {
  const yearsBudget = totalBudget / initialAnnualEmissions;
  const endDate = moment(startDate).add(yearsBudget * millisecondsPerYear);
  const cdown: CountdownInterface = countdown(endDate);

  // Destructure cdown into object containing times
  const times = (({ years, months, days, hours, minutes, seconds }) => ({
    years,
    months,
    days,
    hours,
    minutes,
    seconds,
  }))(cdown);

  return times;
};

