"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/navbar";
import { AirPollution } from "@/components/widgets/AirPollution";
import { CurrentWeather } from "@/components/widgets/CurrentWeather";
import { Humidity } from "@/components/widgets/Humidity";
import { Pressure } from "@/components/widgets/Pressure";
import { UVIndex } from "@/components/widgets/UVIndex";
import { Visibility } from "@/components/widgets/Visibility";
import { WindSpeed } from "@/components/widgets/WindSpeed";
import { Icon } from "@/components/widgets/Icon";
import Footer from "@/components/footer";

export default function Home() {
  const [weatherData, setWeatherData] = useState(null);
  const [metric, setMetric] = useState(false);
  const [value, setValue] = useState("");

  const fetchData = async (city) => {
    try {
      const response = await fetch(`/api?city=${city}`);
      const data = await response.json();
      setWeatherData(data);
      console.log(data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  useEffect(() => {
    fetchData(value);
  }, [value]);

  return (
    <>
      <div className="flex flex-col min-h-screen pb-32">
        <div className="mb-3.5">
          <Navbar
            setMetric={setMetric}
            metric={metric}
            setValue={setValue}
            value={value}
          />
        </div>

        <div className="flex-grow grid grid-cols-1  md:grid-cols-3  gap-4">
          <div className="col-span-1 grid grid-cols-1 gap-4">
            <Humidity weatherData={weatherData} metric={metric} />
            <Pressure weatherData={weatherData} metric={metric} />
            <AirPollution weatherData={weatherData} />
          </div>
          <div className="sm:col-span-2 md:col-span-1 flex flex-col items-center justify-center space-y-9">
            <CurrentWeather
              className="w-full h-full"
              weatherData={weatherData}
              metric={metric}
            />
            <Icon weatherData={weatherData} />
          </div>
          <div className="col-span-1 grid grid-cols-1 gap-4">
            <WindSpeed weatherData={weatherData} metric={metric} />
            <Visibility weatherData={weatherData} metric={metric} />
            <UVIndex weatherData={weatherData} />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
