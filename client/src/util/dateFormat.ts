import moment from "moment-timezone";

export const dateFormat = (date: Date) => {
  const t = moment(date).tz("Asia/Seoul").format("HH:mm");
  return t;
};
