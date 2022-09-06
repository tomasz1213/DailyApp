export const returnHourOffset = () => {
  let offset = new Date().getTimezoneOffset() / 60;
  let extraZero;
  if (offset < 10 || offset > -10) {
    extraZero = 0;
    if (offset < 0) {
      extraZero = -0;
      offset = Math.abs(offset);
    }
  }
  return `${extraZero}${offset}:00`;
};
