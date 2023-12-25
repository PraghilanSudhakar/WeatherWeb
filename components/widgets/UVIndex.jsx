import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export const UVIndex = (props) => {
  let weatherData = props.weatherData;

  const getUVStatus = (uvIndex) => {
    if (uvIndex >= 0 && uvIndex <= 2) {
      return { status: "Low", description: "No protection needed." };
    } else if (uvIndex >= 3 && uvIndex <= 5) {
      return {
        status: "Moderate",
        description: "Grab some shade and sunscreen.",
      };
    } else if (uvIndex >= 6 && uvIndex <= 7) {
      return {
        status: "High",
        description: "Sunscreen and shade are important.",
      };
    } else if (uvIndex >= 8 && uvIndex <= 10) {
      return { status: "Very High", description: "Stay in. If out, cover up!" };
    } else if (uvIndex >= 11) {
      return { status: "Extreme", description: "Better stay inside." };
    } else {
      return { status: "No data", description: "No UV info, sorry." };
    }
  };

  return (
    <Card className="rounded-lg shadow-md bg-white dark:bg-gray-800 flex flex-col items-center justify-center">
      <CardHeader className="px-5 py-3 border-b border-gray-200 dark:border-gray-600">
        <CardTitle className="text-3xl font-semibold text-gray-900 dark:text-gray-100 ">
          UV Index
        </CardTitle>
      </CardHeader>
      <CardContent className="p-5 w-full flex flex-col items-center justify-center">
        {weatherData ? (
          <div className="w-full flex flex-col items-center justify-center">
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-2 pb-2">
              {getUVStatus(weatherData.current.uv).status}
            </p>

            <p className="text-md text-gray-500 dark:text-gray-400 mb-3">
              <strong>{weatherData.current.uv}</strong> in <strong>0-11</strong>
            </p>
            <Progress
              className="rounded-lg bg-gray-200 dark:bg-gray-700"
              value={(weatherData.current.uv / 11) * 100}
            />

            <p className="text-md text-gray-500 dark:text-gray-400 mb-3 mt-5">
              {getUVStatus(weatherData.current.uv).description}
            </p>
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
