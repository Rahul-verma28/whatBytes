// import { Award, ChartNoAxesColumnDecreasing, StickyNote } from "lucide-react";
// import Link from "next/link";
// import React from "react";

// const SideBar = () => {
//   return (
//     <aside className="hidden w-64 border-r bg-muted/40 md:block">
//       <nav className="space-y-2 p-4">
//         <Link
//           className="flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-muted hover:text-violet-500"
//           href="/"
//         >
//           <ChartNoAxesColumnDecreasing />
//           Dashboard
//         </Link>
//         <Link
//           className="flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-muted hover:text-violet-500"
//           href="/skill-test"
//         >
//           <Award />
//           Skill Test
//         </Link>
//         <Link
//           className="flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-muted hover:text-violet-500"
//           href="/internship"
//         >
//           <StickyNote />
//           Internship
//         </Link>
//       </nav>
//     </aside>
//   );
// };

// export default SideBar;

"use client"

import { Award, ChartNoAxesColumnDecreasing, StickyNote } from "lucide-react";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation"; // Import usePathname hook

const SideBar = () => {
  const pathname = usePathname(); // Get the current path

  return (
    <aside className="hidden w-64 border-r bg-muted/40 md:block">
      <nav className="space-y-2 p-4">
        <Link
          className={`flex items-center gap-3 rounded-lg px-3 py-2 ${
            pathname === "/" ? "bg-muted text-violet-500" : "hover:bg-muted hover:text-violet-500"
          }`}
          href="/"
        >
          <ChartNoAxesColumnDecreasing />
          Dashboard
        </Link>
        <Link
          className={`flex items-center gap-3 rounded-lg px-3 py-2 ${
            pathname === "/skill-test" ? "bg-muted text-violet-500" : "hover:bg-muted hover:text-violet-500"
          }`}
          href="/skill-test"
        >
          <Award />
          Skill Test
        </Link>
        <Link
          className={`flex items-center gap-3 rounded-lg px-3 py-2 ${
            pathname === "/internship" ? "bg-muted text-violet-500" : "hover:bg-muted hover:text-violet-500"
          }`}
          href="/internship"
        >
          <StickyNote />
          Internship
        </Link>
      </nav>
    </aside>
  );
};

export default SideBar;
