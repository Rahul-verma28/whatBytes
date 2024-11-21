"use client";

import {
  Label,
  PolarGrid,
  PolarRadiusAxis,
  RadialBar,
  RadialBarChart,
} from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChartConfig, ChartContainer } from "@/components/ui/chart";

interface RedialChartProps {
  score: number;
}

export default function RedialChart({ score }: RedialChartProps) {
  const totalQuestions = 15;
  const percentage = (score / totalQuestions) * 100;
  const result = (percentage / 100) * 360;

  const chartData = [
    {
      browser: "questions",
      correct: score,
      fill: "var(--color-questions)",
    },
  ];

  const chartConfig: ChartConfig = {
    correct: {
      label: "Correct",
    },
    questions: {
      label: "Questions",
      color: "hsl(var(--chart-blue))",
    },
  };

  return (
    <Card className="flex flex-col">
      <CardHeader className="pb-0">
        <CardTitle className="flex justify-between items-center text-lg font-bold">
          Question Analysis{" "}
          <span>
            {score}/{totalQuestions}
          </span>
        </CardTitle>
        <CardDescription>
          You scored {score} questions correct out of {totalQuestions}. However,
          it still needs some improvements.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <RadialBarChart
            data={chartData}
            startAngle={0}
            endAngle={result}
            innerRadius={90}
            outerRadius={150}
          >
            <PolarGrid
              gridType="circle"
              radialLines={false}
              stroke="none"
              className="first:fill-muted last:fill-background"
              polarRadius={[100, 78]}
            />
            <RadialBar dataKey="correct" background cornerRadius={10} />
            <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-4xl font-bold"
                        >
                          {score.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Correct answer
                        </tspan>
                      </text>
                    );
                  }
                  return null;
                }}
              />
            </PolarRadiusAxis>
          </RadialBarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
