import React from "react";
import {
  WiDaySunny,
  WiCloudy,
  WiCloud,
  WiFog,
  WiDaySunnyOvercast,
} from "weather-icons-react";
import { useTheme } from "next-themes";

export const Icon = (props) => {
  let weatherData = props.weatherData;
  const { resolvedTheme } = useTheme(); 

  const iconColor = resolvedTheme === "dark" ? "#fff" : "#000"; 

  const renderWeatherIcon = () => {
    const iconSize = "20rem";
    if (weatherData.current.condition.text.toLowerCase() == "partly cloudy") {
      return <WiCloudy size={iconSize} color={iconColor} />;
    } else if (weatherData.current.condition.text.toLowerCase() == "sunny") {
      return <WiDaySunny size={iconSize} color={iconColor} />;
    } else if (weatherData.current.condition.text.toLowerCase() == "clear") {
      return <WiDaySunnyOvercast size={iconSize} color={iconColor} />;
    } else if (weatherData.current.condition.text.toLowerCase() == "overcast") {
      return <WiCloud size={iconSize} color={iconColor} />;
    } else if (weatherData.current.condition.text.toLowerCase() == "mist") {
      return <WiFog size={iconSize} color={iconColor} />;
    } else {
      return <WiCloud size={iconSize} color={iconColor} />;
    }
  };
  return (
    <>
      {weatherData ? (
        <div>{renderWeatherIcon()}</div>
      ) : (
        <p>Loading weather data...</p>
      )}
    </>
  );
};
