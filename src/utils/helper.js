export const getViews = (count) => {
  if (count < 1000) {
    return count;
  } else if (count < 1000000) {
    return `${Math.floor(count / 1000)}K`;
  } else {
    return `${(count / 1000000).toFixed(1)}M`;
  }
};

export const getVideoDuration = (val) => {
  const regex = /PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/;

  const matches = val.match(regex);

  const [, hours, minutes, seconds] = matches.map(Number);
  let totalSeconds = (hours || 0) * 3600 + (minutes || 0) * 60 + (seconds || 0);

  const hoursRes = Math.floor(totalSeconds / 3600);
  const remainingMinutes = Math.floor((totalSeconds % 3600) / 60);
  const remainingSeconds = totalSeconds % 60;

  const formattedHours =
    hoursRes > 0 ? `${String(hoursRes).padStart(2, "0")}:` : "";
  const formattedMinutes =
    remainingMinutes > 0
      ? `${String(remainingMinutes).padStart(2, "0")}:`
      : "00:";
  const formattedSeconds =
    !isNaN(remainingSeconds) > 0
      ? String(remainingSeconds).padStart(2, "0")
      : "00";

  // console.log(`${formattedHours}${formattedMinutes}${formattedSeconds}`);
  return `${formattedHours}${formattedMinutes}${formattedSeconds}`;
};
