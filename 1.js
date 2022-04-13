/**
 * Get number of hours, minutes and seconds from number of seconds.
 * For example :  If number of seconds provided are 129 , then number of hours will be 0 , minutes 2, seconds 9.
 * Input :  Number of seconds.
 * Output : “Hours = ‘number of hours’, minutes = ‘number of minutes’ , seconds = ‘number of seconds’ ”
 */
"use strict";

/**
 * @param {number} seconds
 * @returns seconds converted to hours, minutes and seconds
 */
function getHoursMinutesSeconds(seconds) {
  if (seconds < 0) throw new Error("seconds must be >= 0");

  const result = { hours: 0, minutes: 0, seconds: 0 };

  result.seconds = seconds % 60;
  result.minutes = Math.floor(seconds / 60) % 60;
  result.hours = Math.floor(seconds / 3600);

  return result;
}

module.exports = { getHoursMinutesSeconds };

// init
if (process.argv.length !== 3)
  throw new Error("Pass a single number argument as input");
const result = getHoursMinutesSeconds(process.argv[2]);
console.log(
  `Hours = ${result.hours};minutes = ${result.minutes};seconds = ${result.seconds}`
);
