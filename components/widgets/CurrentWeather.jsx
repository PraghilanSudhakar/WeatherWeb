import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import ConvertClock from "../ui/convertClock";

export const CurrentWeather = (props) => {
  let weatherData = props.weatherData;
  let metric = props.metric;

  return (
    <Card className="rounded-lg shadow-md flex flex-col items-center justify-center">
      <CardHeader className="px-5 py-3 border-b border-gray-200  dark:border-gray-600">
        <CardTitle className="text-5xl font-semibold text-center text-gray-900 dark:text-gray-100 ">
          Weather Forecast
        </CardTitle>
      </CardHeader>
      <CardContent className="p-5 w-full text-center">
        {weatherData ? (
          <div className="text-gray-700 dark:text-gray-300">
            <ConvertClock localTimestamp={weatherData.location.localtime} />
            <p>
              <strong>{weatherData.location.name}</strong>,{" "}
              <strong>
                {weatherData.location.country == "United States of America"
                  ? "USA"
                  : weatherData.location.country}
              </strong>
            </p>
            <p>
              <strong>
                {metric
                  ? Math.round(weatherData.current.temp_c) + " °C"
                  : Math.round(weatherData.current.temp_f) + " °F"}
              </strong>{" "}
            </p>
            <p>
              <strong> {weatherData.current.condition.text}</strong>
            </p>
          </div>
        ) : (
          <p>Loading weather data...</p>
        )}
      </CardContent>
    </Card>
  );
};
