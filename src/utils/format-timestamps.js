export function parseTime(timestamp) {
  const [minutes, seconds] = timestamp.split(":").map(Number);
  return minutes * 60 + seconds;
}

export function formatTime(totalSeconds) {
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);

  if (hours > 0) {
    return `${hours} ${hours === 1 ? "hour" : "hours"}, ${minutes
      .toString()
      .padStart(2, "0")} minutes`;
  }
  return `${minutes} minutes`;
}
