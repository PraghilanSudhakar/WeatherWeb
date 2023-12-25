import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const Humidity = (props) => {
  let weatherData = props.weatherData;
  return (
    <Card className="rounded-lg shadow-md bg-white dark:bg-gray-800 flex flex-col items-center justify-center">
      <CardHeader className="px-5 py-3 border-b border-gray-200 dark:border-gray-600">
        <CardTitle className="text-3xl font-semibold text-gray-900 dark:text-gray-100 ">
          Pressure
        </CardTitle>
      </CardHeader>
      <CardContent className="p-5 w-full flex flex-col items-center justify-center">
        {weatherData ? (
          <div className="w-full flex flex-col items-center justify-center">
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-2 pb-2">
              {weatherData.current.humidity}°
            </p>
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
