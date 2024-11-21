"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const Dashboard = () => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Welcome to Your Dashboard
      </h1>

      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">
          Take the Skill Test
        </h2>
        <p className="text-gray-600 mb-6 text-sm">
          Test your knowledge in HTML, CSS, and JavaScript. Click the button
          below to start.
        </p>
        <Link href="/skill-test">
          <Button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
            Go to Skill Test
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
