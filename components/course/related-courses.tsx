import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

interface RelatedCourse {
  title: string;
  description: string;
  image: string;
}

interface RelatedCoursesProps {
  courses: RelatedCourse[];
}

/**
 * Related courses component showing suggested courses
 * Features responsive grid layout with course cards
 */
export function RelatedCourses({ courses }: RelatedCoursesProps) {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Explore related courses
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {courses.map((course, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardContent className="p-4">
              <div className="flex space-x-4">
                {/* Optimized course image */}
                <div className="relative w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden">
                  <Image
                    src={
                      course.image || "/placeholder.svg?height=150&width=200"
                    }
                    alt={course.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">{course.title}</h3>
                  <p className="text-gray-600 text-sm">{course.description}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
