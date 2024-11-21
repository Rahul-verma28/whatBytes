"use client";

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import RedialChart from "@/components/RedialChart";
import LineGraph from "@/components/LineGraph";
import SyllabusWise from "@/components/SyllabusWise";
import UpdateScores from "@/components/UpdateScores";
import QuickStatistics from "@/components/QuickStatistics";
import { useState } from "react";
import html from "@/app/html.png";

export default function SkillTest() {
  const [rank, setRank] = useState<number>(3);
  const [percentile, setPercentile] = useState<number>(30);
  const [score, setScore] = useState<number>(10);

  return (
    <main className="w-full">
      <div className="lg:flex gap-6 container mx-auto p-6">
        <div className="lg:w-[60%] mb-5">
          <Card className="mb-6">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Image
                    src={html}
                    alt="HTML5"
                    className="h-12 w-12"
                    width={50}
                    height={50}
                  />
                  <div>
                    <h1 className="text-xl font-bold mb-2">
                      Hyper Text Markup Language
                    </h1>
                    <p className="text-xs text-muted-foreground">
                      Questions: 08 | Duration: 15 mins | Submitted on 5 June
                      2021
                    </p>
                  </div>
                </div>
                <UpdateScores
                  rank={rank}
                  setRank={setRank}
                  percentile={percentile}
                  setPercentile={setPercentile}
                  score={score}
                  setScore={setScore}
                />
              </div>
            </CardContent>
          </Card>

          {/* Quick Statistics */}
          <QuickStatistics score={score} percentile={percentile} rank={rank} />

          {/* Comparision graph */}
          <LineGraph percentile={percentile} />
        </div>

        {/* Syllabus Analysis */}
        <div className="lg:w-[40%] flex flex-col gap-6">
          <SyllabusWise />
          <RedialChart score={score} />
        </div>
      </div>
    </main>
  );
}
