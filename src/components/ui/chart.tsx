"use client"

import * as React from "react"
import * as RechartsPrimitive from "recharts"

import { cn } from "@/lib/utils"

export type ChartConfig = {
  [k in string]: {
    label?: React.ReactNode
    icon?: React.ComponentType
    color?: string
  }
}

function ChartContainer({
  className,
  children,
  ...props
}: React.ComponentProps<"div"> & {
  config?: ChartConfig
  children: React.ReactNode
}) {
  return (
    <div
      className={cn("flex aspect-video justify-center text-xs", className)}
      {...props}
    >
      <RechartsPrimitive.ResponsiveContainer>
        {children}
      </RechartsPrimitive.ResponsiveContainer>
    </div>
  )
}

const ChartTooltip = RechartsPrimitive.Tooltip
}

export {
  ChartContainer,
  ChartTooltip,
  // Export other Recharts components that might be used
  RechartsPrimitive as Recharts
}
