import { Award, ChartNoAxesColumnDecreasing, StickyNote } from "lucide-react";
import Link from "next/link";
import React from "react";

const SideBar = () => {
  return (
    <aside className="hidden w-64 border-r bg-muted/40 md:block">
      <nav className="space-y-2 p-4">
        <Link
          className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground hover:bg-muted hover:text-primary"
          href="/"
        >
          <ChartNoAxesColumnDecreasing />
          Dashboard
        </Link>
        <Link
          className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground hover:bg-muted hover:text-primary"
          href="/skill-test"
        >
          <Award />
          Skill Test
        </Link>
        <Link
          className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground hover:bg-muted hover:text-primary"
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
