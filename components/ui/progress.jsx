"use client";

import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";

import { cn } from "@/lib/utils";

const Progress = React.forwardRef(({ className, value, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn(
      "relative h-2.5 w-full overflow-hidden rounded-full bg-secondary",
      className,
    )}
    style={{
      background:
        "linear-gradient(90deg, rgba(173,216,190,1) 0%, rgba(42,190,143,1) 25%, rgba(233,196,6,1) 50%, rgba(244,162,9,1) 75%, rgba(231,111,81,1) 100%)",
    }}
    {...props}
  >
    <ProgressPrimitive.Indicator
      className="h-2.5 w-2.5 flex-1 rounded-full bg-primary shadow-lg shadow-white ring-2 ring-white transition-all dark:ring-black"
      style={{ marginLeft: `${value || 0}%` }}
    />
  </ProgressPrimitive.Root>
));
Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };
