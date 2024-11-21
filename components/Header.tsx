"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Award,
  ChartNoAxesColumnDecreasing,
  Map,
  Menu,
  StickyNote,
} from "lucide-react";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname(); // Get the current path

  return (
    <div className="flex justify-between items-center px-6 md:px-8 py-4 border-b">
      <div className="flex items-center gap-1">
        <Map className=" text-black" />
        <Link href="/" className="font-bold text-xl">
          WhatBytes
        </Link>
      </div>
      <div className="flex gap-4 items-center">
        <div className="flex gap-2 items-center border rounded-sm px-2 py-1 cursor-pointer">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>RV</AvatarFallback>
          </Avatar>
          <span className=" font-bold text-sm">Rahul Verma</span>
        </div>
        <div className="block md:hidden ">
          <Sheet>
            <SheetTrigger asChild>
              <Menu className=" cursor-pointer" />
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <div className="flex gap-2 items-center cursor-pointer mb-5">
                  {/* <Image
            src={profileImage}
            alt="profile"
            className=" h-7 w-7 rounded-full"
          /> */}
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>RV</AvatarFallback>
                  </Avatar>
                  <span className=" font-bold text-lg">Rahul Verma</span>
                </div>
              </SheetHeader>
              <nav className="space-y-2">
                <Link
                  className={`flex items-center gap-3 rounded-lg px-3 py-2 ${
                    pathname === "/"
                      ? "bg-muted text-violet-500"
                      : "hover:bg-muted hover:text-violet-500"
                  }`}
                  href="/"
                >
                  <ChartNoAxesColumnDecreasing />
                  Dashboard
                </Link>
                <Link
                  className={`flex items-center gap-3 rounded-lg px-3 py-2 ${
                    pathname === "/skill-test"
                      ? "bg-muted text-violet-500"
                      : "hover:bg-muted hover:text-violet-500"
                  }`}
                  href="/skill-test"
                >
                  <Award />
                  Skill Test
                </Link>
                <Link
                  className={`flex items-center gap-3 rounded-lg px-3 py-2 ${
                    pathname === "/internship"
                      ? "bg-muted text-violet-500"
                      : "hover:bg-muted hover:text-violet-500"
                  }`}
                  href="/internship"
                >
                  <StickyNote />
                  Internship
                </Link>
              </nav>
              <SheetFooter>
                <SheetClose asChild>saving</SheetClose>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
}
