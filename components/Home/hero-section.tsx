import { Button } from "@/components/ui/button";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden h-screen">
      {/* Background image */}
      <Image
        src="/images/home/heroImage.jpg"
        alt="Background showing professional learner"
        fill
        priority
        className="object-cover object-top"
      />

      {/* Responsive overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#01589A]/70 to-[#01589A00]/60 lg:bg-gradient-to-r" />

      {/* Content container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="max-w-2xl lg:max-w-3xl pt-32 lg:pt-48">
          {/* Text content */}
          <div className="text-white space-y-6">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              Unlock Your Potential with Industry-Leading Courses!
            </h1>
            <p className="text-lg sm:text-xl text-blue-100 leading-relaxed">
              Join thousands of learners gaining real-world skills and advancing
              their careers. Our expert-led courses are designed to empower you
              to succeed.
            </p>
            <Button
              size="lg"
              className="bg-blue-600 text-white hover:bg-blue-700 font-semibold px-8 py-3"
            >
              Get started
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
