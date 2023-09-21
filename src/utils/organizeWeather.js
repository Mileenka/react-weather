const organizeWeather = (weatherData) => {
  const { hourly } = weatherData;
  const { time, temperature_2m } = hourly;

  const days = {};
  let oldTemp;

  time.forEach((hour, index) => {
    const now = new Date(hour);
    const day = now.getDate();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    const formattedHour = `${hours}:${minutes}:${seconds}`;

    const formattedTemp = temperature_2m[index].toFixed(1);

    let up;

    if (oldTemp) {
      if (oldTemp > temperature_2m[index]) {
        up = "down";
      } else if (oldTemp < temperature_2m[index]) {
        up = "up";
      } else {
        up = "same";
      }
    } else {
      up = "no";
    }
    const hourAndTemp = {
      hour: formattedHour,
      temp: formattedTemp,
      up: up,
    };

    if (!days[day]) {
      days[day] = [];
    }
    days[day].push(hourAndTemp);
    oldTemp = temperature_2m[index];
  });

  return { days, temperature_2m, time };
};

export default organizeWeather;
