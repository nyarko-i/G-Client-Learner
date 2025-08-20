import Image from "next/image";
import type React from "react";
import { Header } from "@/components/Home/header";
import { Footer } from "@/components/Home/footer";

interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
}

/**
 * Shared layout component for all authentication pages
 * Provides consistent header, footer, and 3D illustration
 */
export function AuthLayout({ children, title, subtitle }: AuthLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      <main className="flex-1 flex items-center justify-center px-4 py-8 mt-15">
        <div className="w-full max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left side - 3D Illustration */}
            <div className="hidden lg:flex justify-center">
              <div className="relative w-full max-w-md h-[400px]">
                <Image
                  src="/images/auth/auth.png"
                  alt="3D workspace illustration"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>

            {/* Right side - Auth Form */}
            <div className="w-full max-w-md mx-auto lg:mx-0">
              <div className="text-center mb-8">
                <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                  {title}
                </h1>
                {subtitle && <p className="text-gray-600">{subtitle}</p>}
              </div>

              {children}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
