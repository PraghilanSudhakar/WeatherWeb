"use client";

import {
  Command,
  CommandInput,
  CommandList,
  CommandDialog,
} from "@/components/ui/command";

import cities from "./cities.json";

import { useState, useEffect } from "react";

export function PopDialog(props) {
  const [inputValue, setInputValue] = useState("");
  const [filteredCities, setFilteredCities] = useState([]);
  const [citySelected, setCitySelected] = useState(false);

  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (inputValue && !citySelected) {
      const lowerCaseInputValue = inputValue.toLowerCase();
      const filtered = cities.filter(
        (city) =>
          city.asciiname &&
          city.asciiname.toLowerCase().includes(lowerCaseInputValue),
      );
      setFilteredCities(filtered);
    } else {
      setFilteredCities([]);
    }
  }, [inputValue, citySelected]);

  const handleCityClick = (city) => {
    if (city.asciiname) {
      setInputValue("");
      setCitySelected(true);
      props.setValue(city.asciiname.toLowerCase());
      setFilteredCities([]);
      setOpen(false);
    }
  };

  const handleInputChange = (value) => {
    setInputValue(value);
    setCitySelected(false);
  };

  return (
    <>
      <Command
        className="rounded-lg border shadow-md w-[20rem]"
        onClick={() => setOpen(true)}
      >
        <CommandInput placeholder="Search city..." />
      </Command>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <Command className="rounded-lg border shadow-md">
          <CommandInput
            placeholder="Search city..."
            value={inputValue}
            onValueChange={handleInputChange}
          />
          <CommandList className="top-full w-full">
            {filteredCities.slice(0, 5).map((city) => (
              <div
                key={city.geonameid}
                onClick={() => handleCityClick(city)}
                className="flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-accent hover:text-accent-foreground hover:cursor-pointer"
              >
                {city.asciiname}, {city.countrynameen}{" "}
              </div>
            ))}
          </CommandList>
        </Command>
      </CommandDialog>
    </>
  );
}
