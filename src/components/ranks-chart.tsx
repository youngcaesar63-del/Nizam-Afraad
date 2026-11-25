"use client";

import { Bar, BarChart, Doughnut, DoughnutChart, Legend, Pie, PieChart, ResponsiveContainer, Tooltip, YAxis } from "recharts";
import {
  ChartContainer,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { useState } from "react";
import { Button } from "./ui/button";
import { BarChart as BarChartIcon, PieChart as PieChartIcon } from "lucide-react";

const chartData = [
  { rank: "ملازم", personnel: 120, fill: "#6366F1" },
  { rank: "ملازم أول", personnel: 95, fill: "#8B5CF6" },
  { rank: "نقيب", personnel: 80, fill: "#EC4899" },
  { rank: "رائد", personnel: 65, fill: "#F43F5E" },
  { rank: "مقدم", personnel: 50, fill: "#F97316" },
  { rank: "عقيد", personnel: 35, fill: "#10B981" },
  { rank: "عميد", personnel: 25, fill: "#3B82F6" },
  { rank: "لواء", personnel: 15, fill: "#F59E0B" },
];

const chartConfig = {
  personnel: {
    label: "الأفراد",
  },
  ملازم: { label: "ملازم", color: "#6366F1" },
  "ملازم أول": { label: "ملازم أول", color: "#8B5CF6" },
  نقيب: { label: "نقيب", color: "#EC4899" },
  رائد: { label: "رائد", color: "#F43F5E" },
  مقدم: { label: "مقدم", color: "#F97316" },
  عقيد: { label: "عقيد", color: "#10B981" },
  عميد: { label: "عميد", color: "#3B82F6" },
  لواء: { label: "لواء", color: "#F59E0B" },
};

export default function RanksChart() {
    const [chartType, setChartType] = useState<"pie" | "bar">("pie");

    return (
        <div className="h-80 w-full">
            <div className="flex gap-2 justify-end mb-4">
                <Button variant={chartType === 'pie' ? 'secondary' : 'ghost'} size="sm" onClick={() => setChartType('pie')}>
                    <PieChartIcon className="h-4 w-4" />
                </Button>
                <Button variant={chartType === 'bar' ? 'secondary' : 'ghost'} size="sm" onClick={() => setChartType('bar')}>
                    <BarChartIcon className="h-4 w-4" />
                </Button>
            </div>
             <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
                {chartType === 'pie' ? (
                     <ResponsiveContainer width="100%" height={250}>
                        <PieChart>
                          <Tooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
                          <Pie
                            data={chartData}
                            dataKey="personnel"
                            nameKey="rank"
                            innerRadius={60}
                            strokeWidth={5}
                          >
                          </Pie>
                        </PieChart>
                      </ResponsiveContainer>
                ) : (
                    <ResponsiveContainer width="100%" height={250}>
                        <BarChart data={chartData} layout="vertical" margin={{ left: 20 }}>
                          <YAxis
                            dataKey="rank"
                            type="category"
                            tickLine={false}
                            axisLine={false}
                           />
                          <Tooltip cursor={false} content={<ChartTooltipContent />} />
                           <Bar dataKey="personnel" radius={5} />
                        </BarChart>
                    </ResponsiveContainer>
                )}
            </ChartContainer>
        </div>
    )
}
