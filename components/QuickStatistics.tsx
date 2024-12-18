import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, FileText, Trophy } from "lucide-react";

interface QuickStatisticsProps {
  rank: number;
  percentile: number;
  score: number;
}

const QuickStatistics: React.FC<QuickStatisticsProps> = ({
  rank,
  percentile,
  score,
}) => {
  return (
    <Card className="mb-6">
      <CardContent className="p-6">
        <h2 className="mb-4 text-lg font-bold">Quick Statistics</h2>
        <div className="grid gap-4 sm:grid-cols-3">
          {/* Rank */}
          <div className="flex items-center gap-3">
            <Trophy className="h-14 w-14 p-3 rounded-full bg-gray-50 text-yellow-500" />
            <div className="flex items-center gap-1 sm:block">
              <div className="text-lg lg:text-xl font-bold">{rank}</div>
              <div className="text-xs text-muted-foreground">YOUR RANK</div>
            </div>
          </div>
          {/* Percentile */}
          <div className="flex items-center gap-3">
            <FileText className="h-14 w-14 p-3 rounded-full bg-gray-50 text-blue-500" />
            <div className="flex items-center gap-1 sm:block">
              <div className="text-lg lg:text-xl font-bold">{percentile}%</div>
              <div className="text-xs text-muted-foreground">PERCENTILE</div>
            </div>
          </div>
          {/* Correct Answers */}
          <div className="flex items-center gap-3">
            <CheckCircle className="h-14 w-14 p-3 rounded-full bg-gray-50 text-green-500" />
            <div className="flex items-center gap-1 sm:block">
              <div className="text-lg lg:text-xl font-bold">{score}/15</div>
              <div className="text-xs text-muted-foreground">
                CORRECT ANSWERS
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default QuickStatistics;
