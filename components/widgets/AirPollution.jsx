import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export const AirPollution = (props) => {
  let weatherData = props.weatherData;


  const getAirPollutionStatus = (index) => {
    switch (index) {
      case 1:
        return "Good";
      case 2:
        return "Moderate";
      case 3:
        return "Unhealthy for Sensitive Groups";
      case 4:
        return "Unhealthy";
      case 5:
        return "Very Unhealthy";
      case 6:
        return "Hazardous";
      default:
        return "No data";
    }
  };

  return (
    <Card className="rounded-lg shadow-md bg-white dark:bg-gray-800 flex flex-col items-center justify-center">
      <CardHeader className="px-5 py-3 border-b border-gray-200 dark:border-gray-600">
        <CardTitle className="text-3xl font-semibold text-gray-900 dark:text-gray-100 ">
          Air Pollution
        </CardTitle>
      </CardHeader>
      <CardContent className="p-5 w-full flex flex-col items-center justify-center">
        {weatherData ? (
          <div className="w-full flex flex-col items-center justify-center">
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-2 pb-2">
              {getAirPollutionStatus(
                weatherData.current.air_quality["us-epa-index"],
              )}
            </p>

            <p className="text-md text-gray-500 dark:text-gray-400 mb-3">
              <strong>{weatherData.current.air_quality["us-epa-index"]}</strong>{" "}
              in <strong>1-6</strong>
            </p>
            <Progress
              className="rounded-lg bg-gray-200 dark:bg-gray-700"
              value={
                (weatherData.current.air_quality["us-epa-index"] / 6) * 100
              }
            />

            <p className="text-md text-gray-500 dark:text-gray-400 mb-4 mt-5"></p>
            {/* Add more information as needed */}
          </div>
        ) : (
          <p className="text-md text-gray-500 dark:text-gray-400">
            Loading weather data...
          </p>
        )}
      </CardContent>
    </Card>
  );
};
