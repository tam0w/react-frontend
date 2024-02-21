"use client"

import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"

import { cn } from "@/lib/utils"

const avg = {below: 'bg-red-500', mid: 'bg-gray-800', above: 'bg-green-300/70'}
const shadow = {below: 'shadow-red-600', mid: 'shadow-blue-400', above: 'shadow-green-400'}
const Progress = React.forwardRef(({ className, value, color, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn(
      `shadow ${shadow[color]} relative h-4 w-full overflow-hidden rounded-none bg-primary/20`,
      className
    )}
    {...props}>
    <ProgressPrimitive.Indicator
      className={`h-full w-full flex-1 ${avg[color]} transition-all`}
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }} />

  </ProgressPrimitive.Root>
))
Progress.displayName = ProgressPrimitive.Root.displayName

export { Progress }
