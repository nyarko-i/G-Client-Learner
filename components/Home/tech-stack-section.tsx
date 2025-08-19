import Image from "next/image";
import { Button } from "@/components/ui/button";

/**
 * Technology stack section showcasing available technologies
 * Features technology buttons and promotional content with device mockup
 */
export function TechStackSection() {
  const technologies = [
    "ReactJS",
    "NextJS",
    "NodeJS",
    "Django",
    "MongoDB",
    "VueJS",
    "AWS",
    "Azure",
    "PowerBI",
    "Python",
    "Excel",
    "Tableau",
  ];

  return (
    <section className="relative min-h-screen w-full bg-gradient-to-r from-blue-600 to-blue-800 flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              What will be next step
            </h2>
            <p className="text-lg text-blue-100 mb-8 leading-relaxed">
              Discover our diverse stack of solutions, including software
              development, data science, and cloud tools. Sign up today and
              kickstart your journey!
            </p>

            {/* Technology grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
              {technologies.map((tech, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className="bg-transparent border-white text-white hover:bg-white hover:text-blue-600 transition-colors"
                >
                  {tech}
                </Button>
              ))}
            </div>
          </div>

          {/* Device mockup */}
          <div className="lg:pl-8 flex justify-center">
            <div className="relative w-full h-[70vh] lg:h-[80vh]">
              <Image
                src="/images/our-tech/tech.png"
                alt="Technology showcase"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
