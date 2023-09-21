import PropTypes from "prop-types";

import { WiDaySunny, WiCloudy, WiRain } from "react-icons/wi";
import {
  PiCloudArrowDownDuotone,
  PiCloudArrowUpDuotone,
  PiCloudCheckLight,
} from "react-icons/pi";

import "./Hour.css";

const Hour = ({ hour }) => {
  if (!hour) {
    return null;
  }

  const { hour: hourText, temp, up } = hour;

  const weatherIcons = {
    up: <WiDaySunny />,
    down: <WiRain />,
    same: <WiCloudy />,
  };

  const temperatureChangeIcons = {
    up: { icon: <PiCloudArrowUpDuotone />, color: "green" },
    down: { icon: <PiCloudArrowDownDuotone />, color: "red" },
    same: { icon: <PiCloudCheckLight />, color: "black" },
  };

  const temperatureChangeIcon = temperatureChangeIcons[up] || {
    icon: null,
    color: "black",
  };

  return (
    <div className="hour-container">
      <div className="hour">{hourText}</div>
      <div className="temperature">{temp}°C</div>
      <div className="weather-icon">{weatherIcons[up]}</div>
      <div className="temperature-change">
        <span style={{ color: temperatureChangeIcon.color }}>
          {temperatureChangeIcon.icon}
        </span>
      </div>
    </div>
  );
};

Hour.propTypes = {
  hour: PropTypes.shape({
    hour: PropTypes.string.isRequired,
    temp: PropTypes.string.isRequired,
    up: PropTypes.string.isRequired,
  }),
};

export default Hour;
