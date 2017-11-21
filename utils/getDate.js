/**
 * Created by wangdi on 25/11/16.
 */
'use strict';

function convertTime(time) {
  if (time <= 9)
    return '0' + time;
  return time;
}

export function getCurrentDate(date) {
  return { year: date.getFullYear(), month: convertTime(date.getMonth() + 1), day: convertTime(date.getDate()) };
}

export function getCurrentDateFormat(date) {
  return `${date.getFullYear()}/${convertTime(date.getMonth() + 1)}/${convertTime(date.getDate())}`;
}

export function getYesterday(date) {
  var date = new Date(date);
  date.setDate(date.getDate() - 1);
  return date;
}