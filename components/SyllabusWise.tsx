// import React from "react";
// import { Card, CardContent } from "@/components/ui/card";
// import { Progress } from "./ui/progress";

// const SyllabusWise = () => {
//   return (
//     <Card>
//       <CardContent className="p-6">
//         <h2 className="mb-6 text-lg font-bold">Syllabus Wise Analysis</h2>
//         <div className="space-y-4">
//           <div >
//             <span className="text-sm">HTML Tools, Forms, History</span>
//             <div className="flex justify-between items-center gap-6">
//               <Progress value={80} className="h-2" />
//               <span className="text-blue-500">80%</span>
//             </div>
//           </div>
//           <div>
//             <span className="text-sm">Tags & References in HTML</span>
//             <div className="flex justify-between items-center gap-6">
//               <Progress value={60} className="h-2" />
//               <span className="text-orange-500">60%</span>
//             </div>
//           </div>
//           <div>
//             <span className="text-sm">Tables & References in HTML</span>
//             <div className="flex justify-between items-center gap-6">
//               <Progress value={24} className="h-2" />
//               <span className="text-red-500">24%</span>
//             </div>
//           </div>
//           <div>
//             <span className="text-sm">Tables & CSS Basics</span>
//             <div className="flex justify-between items-center gap-6">
//               <Progress value={96} className="h-2" />
//               <span className="text-green-500">96%</span>
//             </div>
//           </div>
//         </div>
//       </CardContent>
//     </Card>
//   );
// };

// export default SyllabusWise;

import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const SyllabusWise = () => {
  const syllabusData = [
    { title: "HTML Tools, Forms, History", progress: 80 },
    { title: "Tags & References in HTML", progress: 60 },
    { title: "Tables & References in HTML", progress: 24 },
    { title: "Tables & CSS Basics", progress: 96 },
  ];

  const getProgressColor = (value: number) => {
    if (value > 80) return "bg-green-500"; // High progress
    if (value > 60) return "bg-blue-500"; // Moderate progress
    if (value > 40) return "bg-orange-500"; // Low progress
    return "bg-red-500"; // Very low progress
  };

  return (
    <Card>
      <CardContent className="p-6">
        <h2 className="mb-6 text-lg font-bold">Syllabus Wise Analysis</h2>
        <div className="space-y-4">
          {syllabusData.map((item, index) => (
            <div key={index}>
              <span className="text-sm">{item.title}</span>
              <div className="flex justify-between items-center gap-6">
                <div className="relative w-full h-2 rounded bg-gray-200">
                  <div
                    className={`absolute h-full rounded ${getProgressColor(
                      item.progress
                    )}`}
                    style={{ width: `${item.progress}%` }}
                  />
                </div>
                <span className="text-sm font-bold">
                  {item.progress}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default SyllabusWise;
