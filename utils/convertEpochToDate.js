const convertEpochToDate = (epoch) => {
  const date = new Date(0);
  date.setUTCSeconds(epoch);
  return date;
};

export default convertEpochToDate;
