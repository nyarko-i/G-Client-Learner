import Image from "next/image";
import { Star } from "lucide-react";

interface CourseHeaderProps {
  title: string;
  description: string;
  instructor: string;
  enrolledStudents: number;
  duration: string;
  rating: number;
  image: string;
}

/**
 * Course header component displaying course title, description, and key info
 * Features responsive layout with course image and instructor details
 */
export function CourseHeader({
  title,
  description,
  instructor,
  enrolledStudents,
  duration,
  rating,
  image,
}: CourseHeaderProps) {
  return (
    <section className="bg-blue-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Course Info */}
          <div className="lg:col-span-2">
            <h1 className="text-3xl font-bold mb-4">{title}</h1>
            <p className="text-blue-100 mb-6 text-lg leading-relaxed">
              {description}
            </p>

            {/* Course Meta Info */}
            <div className="flex flex-wrap items-center gap-4 md:gap-6 text-sm">
              <div className="flex items-center space-x-1">
                <span>Instructor</span>
                <span className="font-semibold">{instructor}</span>
              </div>
              <div className="flex items-center space-x-1">
                <span>Enrolled students</span>
                <span className="font-semibold">{enrolledStudents}</span>
              </div>
              <div className="flex items-center space-x-1">
                <span>{duration}</span>
              </div>
            </div>

            {/* Rating */}
            <div className="flex items-center space-x-2 mt-4">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(rating)
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm">{rating}</span>
            </div>
          </div>

          {/* Course Image */}
          <div className="lg:col-span-1">
            <div className="relative w-full h-48 rounded-lg overflow-hidden">
              <Image
                src={image || "/placeholder.svg?height=300&width=400"}
                alt={title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
