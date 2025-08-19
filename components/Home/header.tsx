"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { LogIn, LogOut } from "lucide-react";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4 flex items-center justify-between">
        {/* Logo and brand */}
        <div className="flex items-center space-x-10">
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/images/home/azubi-logo.png"
              alt="Azubi Logo"
              width={80}
              height={80}
              className="rounded"
            />
          </Link>

          {/* Navigation links */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-600 hover:text-gray-900">
              Home
            </Link>
            <Link href="/tracks" className="text-gray-600 hover:text-gray-900">
              Tracks
            </Link>
          </nav>
        </div>

        {/* Authentication buttons */}
        <div className="flex items-center space-x-4">
          <Button
            variant="outline"
            size="sm"
            className="border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent flex items-center gap-2 cursor-pointer"
          >
            Login
            <LogIn className="w-4 h-4" />
          </Button>
          <Button
            size="sm"
            className="bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-2 cursor-pointer"
          >
            Sign up
            <LogOut className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </header>
  );
}
