"use client";

import { ModeToggle } from "./toggle-mode";
import { PopDialog } from "./popDialog";
import { Switch } from "./ui/switch";
import { Label } from "@radix-ui/react-dropdown-menu";
import { Button } from "./ui/button";
import Link from "next/link";

export default function Navbar(props) {
  let metric = props.metric;
  let setMetric = props.setMetric;
  let value = props.value;
  let setValue = props.setValue;

  const toggleMetric = () => {
    metric ? setMetric(false) : setMetric(true);
  };
  return (
    <nav className="flex flex-col lg:flex-row lg:justify-between items-center py-4 px-2 md:px-4 lg:px-6">
      <div className="w-full lg:w-1/4 lg:text-left text-center mb-4 lg:mb-0">
        <span className="transition-colors duration-200 hover:text-primary">
          WeatherWeb
        </span>
      </div>
      <div className="w-full lg:w-1/2 flex justify-center items-center space-x-2 md:space-x-2 lg:space-x-2 mb-4 lg:mb-0">
        <PopDialog setValue={setValue} value={value} />
        <ModeToggle />
      </div>
      <div className="w-full lg:w-1/4 flex justify-center lg:justify-end items-center gap-2 md:gap-4 lg:gap-6">
        <div className="flex gap-2 md:gap-4 lg:gap-6">
          <Label>Metric</Label>
          <Switch onCheckedChange={toggleMetric}></Switch>
        </div>
        <Link href="https://github.com">
          <Button>GitHub</Button>
        </Link>
      </div>
    </nav>
  );
}
