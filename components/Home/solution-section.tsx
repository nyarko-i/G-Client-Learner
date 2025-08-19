import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "lucide-react";

/**
 * Solutions section displaying available course tracks
 * Features responsive grid layout with course cards matching exact design
 */
export function SolutionsSection() {
  const courses = [
    {
      id: 1,
      title: "Software Engineering",
      price: "$400",
      duration: "12 weeks",
      image: "/images/our-solutions/software.jpg",
      tags: ["Node.js", "React.js"],
      tagColors: [
        "bg-green-100 text-green-800",
        "bg-purple-100 text-purple-800",
      ],
    },
    {
      id: 2,
      title: "Cloud Computing",
      price: "$350",
      duration: "12 weeks",
      image: "/images/our-solutions/cloud.jpg",
      tags: ["Azure", "AWS"],
      tagColors: ["bg-blue-100 text-blue-800", "bg-orange-100 text-orange-800"],
    },
    {
      id: 3,
      title: "Data Science",
      price: "$400",
      duration: "12 weeks",
      image: "/images/our-solutions/data.jpg",
      tags: ["PowerBI", "Python"],
      tagColors: ["bg-pink-100 text-pink-800", "bg-yellow-100 text-yellow-800"],
    },
    {
      id: 4,
      title: "UI/UX",
      price: "$250",
      duration: "8 weeks",
      image: "/images/our-solutions/uiux.jpg",
      tags: ["Figma", "Sketch"],
      tagColors: ["bg-red-100 text-red-800", "bg-indigo-100 text-indigo-800"],
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Our solutions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Create your account quickly with just your email or social media
            login, then explore a wide range
          </p>
        </div>

        {/* Course grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course) => (
            <Card
              key={course.id}
              className="overflow-hidden hover:shadow-lg transition-shadow rounded-lg p-0"
            >
              {/* Course image (flush at top, no white space) */}
              <div className="relative w-full h-48">
                <Image
                  src={course.image || "/placeholder.svg"}
                  alt={course.title}
                  fill
                  className="object-cover rounded-t-lg"
                />
                <div className="absolute top-3 right-3 bg-white px-2 py-1 rounded font-semibold text-sm">
                  {course.price}
                </div>
              </div>

              <CardContent className="p-4">
                {/* Course title */}
                <h3 className="font-semibold text-lg mb-2">{course.title}</h3>

                {/* Duration */}
                <div className="flex items-center text-gray-600 text-sm mb-3">
                  <Calendar className="w-4 h-4 mr-1" />
                  {course.duration}
                </div>

                {/* Technology tags */}
                <div className="flex flex-wrap gap-2">
                  {course.tags.map((tag, tagIndex) => (
                    <Badge
                      key={tagIndex}
                      variant="secondary"
                      className={course.tagColors[tagIndex]}
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
