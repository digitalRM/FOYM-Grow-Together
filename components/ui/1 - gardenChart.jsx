"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
const chartData = [
  { Month: "Aug", amount: 52, school: 32 },
  { Month: "Sep", amount: 47, school: 35 },
  { Month: "Oct", amount: 65, school: 31},
  { Month: "Nov", amount: 87, school: 43},
  { Month: "Dec", amount: 93, school: 48},
]

const chartConfig = {
  amount: {
    label: "Community Gardens",
    color: "#15803d",
  },
  school: {
    label: "School Gardens",
    color: "#052e16",
  },
}

export function GardenChart({...props}) {
  return (
    <Card className="bg-white" {...props}>
      <CardHeader>
        <CardTitle className="tracking-tighter">Community Gardens Started</CardTitle>
        <CardDescription>We have started over 500 gardens in just the past 5 months.</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="Month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={true}
              className="w-48"
              content={<ChartTooltipContent hideLabel />} 
            />
            <Bar dataKey="amount" fill="#15803d" radius={8} />
            <Bar dataKey="school" fill="#052e16" radius={8} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="leading-none text-muted-foreground">
          Showing statistics we have collected from the past 5 months.
        </div>
      </CardFooter>
    </Card>
  )
}