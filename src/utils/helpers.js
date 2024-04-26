import { differenceInDays, formatDistance, parseISO } from "date-fns";

// We want to make this function work for both Date objects and strings (which come from Supabase)
export const subtractDates = (dateStr1, dateStr2) =>
  differenceInDays(parseISO(String(dateStr1)), parseISO(String(dateStr2)));

export const formatDistanceFromNow = (dateStr) =>
  formatDistance(parseISO(dateStr), new Date(), {
    addSuffix: true,
  })
    .replace("about ", "")
    .replace("in", "In");

// Supabase needs an ISO date string. However,
// that string will be different on every render because the MS or SEC have changed, which isn't good.
// So we use this trick to remove any time
export const getToday = function (options = {}) {
  const today = new Date();

  // This is necessary to compare with created_at from Supabase, because it it not at 0.0.0.0
  // so we need to set the date to be END of the day when we compare it with earlier dates
  if (options?.end)
    // Set to the last second of the day
    today.setUTCHours(23, 59, 59, 999);
  else today.setUTCHours(0, 0, 0, 0);
  return today.toISOString();
};

// get first time of the given date
export function getFirstMoment(date) {
  const dateCopy = new Date(date);
  const years = dateCopy.getFullYear();
  const months = dateCopy.getMonth();
  const days = dateCopy.getDate();

  return new Date(years, months, days);
}

// to check which date earlier
export function isCorrectDate(date1, date2) {
  const date1Copy = getFirstMoment(date1);
  const date2Copy = getFirstMoment(date2);

  // the crrent date is calculated
  return differenceInDays(date1Copy, date2Copy) + 1 > 0 ? true : false;
}

export function isPast(date) {
  const now = getFirstMoment(new Date());
  const date1Copy = getFirstMoment(date);

  return differenceInDays(date1Copy, now) < 0 ? true : false;
}

export function differenceBetween(date1, date2) {
  const date1Copy = getFirstMoment(date1);
  const date2Copy = getFirstMoment(date2);

  return differenceInDays(date1Copy, date2Copy) + 1;
}

export const formatCurrency = (value) =>
  new Intl.NumberFormat("en", { style: "currency", currency: "USD" }).format(
    value
  );

export function getRandCapitalChar() {
  const min = 65;
  const max = 90;
  return String.fromCharCode(Math.floor(Math.random() * (max - min + 1) + min));
}

export function getRandSmallChar() {
  const min = 65;
  const max = 90;
  return String.fromCharCode(Math.floor(Math.random() * (max - min + 1) + min));
}

export function getRandInt(min = 0, max = 9) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function getRandId(len = 15) {
  let id = "";
  const dividedLen = Math.ceil(len);
  for (let i = 0; i < dividedLen; i++) {
    const choice = getRandInt(0, 2);
    if (choice == 1) id += getRandSmallChar();
    else if (choice == 2) id += getRandCapitalChar();
    else if (choice == 3) id += getRandInt();
  }
  id += "-";
  for (let i = 0; i < dividedLen; i++) {
    const choice = getRandInt(0, 2);
    if (choice == 1) id += getRandSmallChar();
    else if (choice == 2) id += getRandCapitalChar();
    else if (choice == 3) id += getRandInt();
  }
  id += "-";
  for (let i = 0; i < dividedLen; i++) {
    const choice = getRandInt(0, 2);
    if (choice == 1) id += getRandSmallChar();
    else if (choice == 2) id += getRandCapitalChar();
    else if (choice == 3) id += getRandInt();
  }
  return id;
}

export function genListOfRandId(items = 1) {
  return Array.from({ length: items }, () => getRandId());
}

export function getDayMonthFromStr(date) {
  const formatedDate = new Date(Date.parse(date))
    .toDateString()
    .split(" ")
    .slice(1, 3)
    .join(" ");
  return formatedDate;
}
