// "use client";

// import {
//   AlertDialog,
//   AlertDialogAction,
//   AlertDialogCancel,
//   AlertDialogContent,
//   AlertDialogDescription,
//   AlertDialogFooter,
//   AlertDialogHeader,
//   AlertDialogTitle,
//   AlertDialogTrigger,
// } from "@/components/ui/alert-dialog";
// import { Input } from "./ui/input";
// import { Button } from "./ui/button";
// import { ArrowRight } from "lucide-react";
// import { useState } from "react";
// import Image from "next/image";
// import html from "@/app/html.png";

// const UpdateScores = ({
//   rank,
//   setRank,
//   percentile,
//   setPercentile,
//   score,
//   setScore,
// }: any) => {
//   const [formValues, setFormValues] = useState({
//     rank: rank || "",
//     percentile: percentile || "",
//     score: score || "",
//   });

//   const [errors, setErrors] = useState({
//     rank: "",
//     percentile: "",
//     score: "",
//   });

//   const [open, setOpen] = useState(false);

//   const validateForm = () => {
//     let isValid = true;
//     const newErrors = { rank: "", percentile: "", score: "" };

//     if (
//       !formValues.percentile ||
//       isNaN(Number(formValues.percentile)) ||
//       Number(formValues.percentile) > 100
//     ) {
//       newErrors.rank = "Rank must be a number.";
//       isValid = false;
//     }
//     if (
//       !formValues.percentile ||
//       isNaN(Number(formValues.percentile)) ||
//       Number(formValues.percentile) > 100
//     ) {
//       newErrors.percentile = "Percentile must be a number between 0 and 100.";
//       isValid = false;
//     }
//     if (
//       !formValues.score ||
//       isNaN(Number(formValues.score)) ||
//       Number(formValues.score) > 15
//     ) {
//       newErrors.score = "Score must be a number between 0 and 15.";
//       isValid = false;
//     }

//     setErrors(newErrors);
//     return isValid;
//   };

//   const handleSave = () => {
//     if (validateForm()) {
//       setRank(formValues.rank);
//       setPercentile(formValues.percentile);
//       setScore(formValues.score);
//       setOpen(false); // Close the dialog on successful save
//     }
//   };

//   const handleChange = (field: string, value: string) => {
//     setFormValues((prev) => ({ ...prev, [field]: value }));
//     setErrors((prev) => ({ ...prev, [field]: "" })); // Clear error for the field being edited
//   };

//   return (
//     <AlertDialog open={open} onOpenChange={setOpen}>
//       <AlertDialogTrigger>
//         <Button>Update</Button>
//       </AlertDialogTrigger>
//       <AlertDialogContent>
//         <AlertDialogHeader>
//           <div className="flex justify-between items-center">
//             <AlertDialogTitle>Update Scores</AlertDialogTitle>
//             <Image
//               src={html}
//               alt="HTML5"
//               className="h-12 w-12"
//               width={50}
//               height={50}
//             />
//           </div>

//           <div className="space-y-6 py-4">
//             <div className="md:flex items-center gap-2 justify-between space-y-2">
//               <div className="flex items-center gap-2">
//                 <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-sm font-medium text-primary-foreground">
//                   1
//                 </div>
//                 <label htmlFor="rank" className="text-sm font-medium">
//                   Update your Rank
//                 </label>
//               </div>
//               <div className="md:w-[40%]">
//                 <Input
//                   id="rank"
//                   value={formValues.rank}
//                   onChange={(e) => handleChange("rank", e.target.value)}
//                 />
//                 {errors.rank && (
//                   <p className="text-red-500 text-xs">{errors.rank}</p>
//                 )}
//               </div>
//             </div>

//             <div className="md:flex items-center gap-2 justify-between space-y-2">
//               <div className="flex items-center gap-2">
//                 <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-sm font-medium text-primary-foreground">
//                   2
//                 </div>
//                 <label htmlFor="percentile" className="text-sm font-medium">
//                   Update your Percentile
//                 </label>
//               </div>
//               <div className="md:w-[40%]">
//                 <Input
//                   id="percentile"
//                   value={formValues.percentile}
//                   onChange={(e) => handleChange("percentile", e.target.value)}
//                 />
//                 {errors.percentile && (
//                   <p className="text-red-500 text-xs">{errors.percentile}</p>
//                 )}
//               </div>
//             </div>

//             <div className="space-y-2 md:flex items-center justify-between">
//               <div className="flex items-center gap-2">
//                 <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-sm font-medium text-primary-foreground">
//                   3
//                 </div>
//                 <label htmlFor="score" className="text-sm font-medium">
//                   Update your Current Score (out of 15)
//                 </label>
//               </div>
//               <div className="md:w-[40%]">
//                 <Input
//                   id="score"
//                   value={formValues.score}
//                   onChange={(e) => handleChange("score", e.target.value)}
//                 />
//                 {errors.score && (
//                   <p className="text-red-500 text-xs">{errors.score}</p>
//                 )}
//               </div>
//             </div>
//           </div>
//         </AlertDialogHeader>
//         <AlertDialogFooter>
//           <AlertDialogCancel>Cancel</AlertDialogCancel>
//           <Button onClick={handleSave} className="gap-2">
//             Save
//             <ArrowRight className="h-4 w-4" />
//           </Button>
//         </AlertDialogFooter>
//       </AlertDialogContent>
//     </AlertDialog>
//   );
// };

// export default UpdateScores;


"use client";

import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import html from "@/app/html.png";

interface UpdateScoresProps {
  rank: number;
  setRank: (value: number) => void;
  percentile: number;
  setPercentile: (value: number) => void;
  score: number;
  setScore: (value: number) => void;
}

const UpdateScores: React.FC<UpdateScoresProps> = ({
  rank,
  setRank,
  percentile,
  setPercentile,
  score,
  setScore,
}) => {
  const [formValues, setFormValues] = useState({
    rank: rank.toString(),
    percentile: percentile.toString(),
    score: score.toString(),
  });

  const [errors, setErrors] = useState({
    rank: "",
    percentile: "",
    score: "",
  });

  const [open, setOpen] = useState(false);

  const validateForm = () => {
    let isValid = true;
    const newErrors = { rank: "", percentile: "", score: "" };

    if (!formValues.rank || isNaN(Number(formValues.rank))) {
      newErrors.rank = "Required | Rank should be a number.";
      isValid = false;
    }
    if (
      !formValues.percentile ||
      isNaN(Number(formValues.percentile)) ||
      Number(formValues.percentile) < 0 ||
      Number(formValues.percentile) > 100
    ) {
      newErrors.percentile = "Required | Percentile 0 - 100.";
      isValid = false;
    }
    if (
      !formValues.score ||
      isNaN(Number(formValues.score)) ||
      Number(formValues.score) < 0 ||
      Number(formValues.score) > 15
    ) {
      newErrors.score = "Required | Score 0 - 15.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSave = () => {
    if (validateForm()) {
      setRank(Number(formValues.rank));
      setPercentile(Number(formValues.percentile));
      setScore(Number(formValues.score));
      setOpen(false); // Close the dialog on successful save
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormValues((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: "" })); // Clear error for the field being edited
  };

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger asChild>
        <Button>Update</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <div className="flex justify-between items-center">
            <AlertDialogTitle>Update Scores</AlertDialogTitle>
            <Image
              src={html}
              alt="HTML5"
              className="h-12 w-12"
              width={50}
              height={50}
            />
          </div>
          <div className="space-y-6 py-4">
            {/* Rank Input */}
            <div className="md:flex items-center gap-2 justify-between space-y-2">
              <div className="flex items-center gap-2">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-sm font-medium text-primary-foreground">
                  1
                </div>
                <label htmlFor="rank" className="text-sm font-medium">
                  Update your Rank
                </label>
              </div>
              <div className="md:w-[40%]">
                <Input
                  id="rank"
                  value={formValues.rank}
                  onChange={(e) => handleChange("rank", e.target.value)}
                />
                {errors.rank && (
                  <p className="text-red-500 text-xs">{errors.rank}</p>
                )}
              </div>
            </div>

            {/* Percentile Input */}
            <div className="md:flex items-center gap-2 justify-between space-y-2">
              <div className="flex items-center gap-2">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-sm font-medium text-primary-foreground">
                  2
                </div>
                <label htmlFor="percentile" className="text-sm font-medium">
                  Update your Percentile
                </label>
              </div>
              <div className="md:w-[40%]">
                <Input
                  id="percentile"
                  value={formValues.percentile}
                  onChange={(e) => handleChange("percentile", e.target.value)}
                />
                {errors.percentile && (
                  <p className="text-red-500 text-xs">{errors.percentile}</p>
                )}
              </div>
            </div>

            {/* Score Input */}
            <div className="space-y-2 md:flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-sm font-medium text-primary-foreground">
                  3
                </div>
                <label htmlFor="score" className="text-sm font-medium">
                  Update your Current Score (out of 15)
                </label>
              </div>
              <div className="md:w-[40%]">
                <Input
                  id="score"
                  value={formValues.score}
                  onChange={(e) => handleChange("score", e.target.value)}
                />
                {errors.score && (
                  <p className="text-red-500 text-xs">{errors.score}</p>
                )}
              </div>
            </div>
          </div>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <Button onClick={handleSave} className="gap-2">
            Save
            <ArrowRight className="h-4 w-4" />
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default UpdateScores;
