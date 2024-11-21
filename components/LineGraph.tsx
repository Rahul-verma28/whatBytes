"use client";

import * as React from "react";
import { CartesianGrid, Line, LineChart, ReferenceLine, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { ChartSpline } from "lucide-react";

interface LineChartProps {
  percentile: number;
}

export default function Component({ percentile }: LineChartProps) {
  const chartData = [
    { percentile: 0, students: 0 },
    { percentile: 10, students: 5 },
    { percentile: 20, students: 15 },
    { percentile: 30, students: 30 },
    { percentile: 40, students: 50 },
    { percentile: 50, students: 70 },
    { percentile: 60, students: 50 },
    { percentile: 70, students: 30 },
    { percentile: 80, students: 15 },
    { percentile: 90, students: 5 },
    { percentile: 100, students: 1 },
  ];

  const userPercentile = percentile ? Math.round(percentile / 10) * 10 : 30;

  const averagePercentile = 72;
const comparisonText =
  percentile < averagePercentile
    ? `lower than the average percentile ${averagePercentile}% of all the engineers who took this assignment.`
    : percentile > averagePercentile
    ? `higher than the average percentile ${averagePercentile}% of all the engineers who took this assignment.`
    : `equal to the average percentile ${averagePercentile}% of all the engineers who took this assignment.`;

  const chartConfig = {
    views: {
      label: "numberOfStudents: ",
    },
    students: {
      label: "90",
      color: "hsl(var(--chart-blue))",
    },
  } satisfies ChartConfig;

  const [activeChart] = React.useState<keyof typeof chartConfig>("students");

  return (
    <Card>
      <CardHeader>
        <div className=" flex justify-between items-center text-lg font-bold mb-3">Comparison Graph <ChartSpline className="h-12 w-12 p-3 rounded-full bg-gray-50"/></div>
        <CardDescription>
          <span className=" font-semibold text-gray-700">
            You scored {percentile}% percentile which is
          </span>{" "}
          {comparisonText}
        </CardDescription>
      </CardHeader>
      <CardContent className="px-2 sm:p-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="percentile"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent className="w-[160px]" nameKey="views" />
              }
            />
            <ReferenceLine
              x={userPercentile}
              stroke="gray"
              strokeDasharray="4 4"
              label={{
                value: `Your Percentile (${userPercentile}%)`,
                position: "top",
                style: { fill: "red", fontSize: 12 },
              }}
            />
            <Line
              dataKey={activeChart}
              type="monotone"
              stroke={`var(--color-${activeChart})`}
              strokeWidth={1}
              dot={true}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
