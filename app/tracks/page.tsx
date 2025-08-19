"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Header } from "@/components/Home/header";
import { Footer } from "@/components/Home/footer";
import { CourseCard } from "@/components/Tracks/course-card";

export default function TracksPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const courses = [
    {
      id: "1",
      title: "Software Development",
      description:
        "Unlock your potential with comprehensive training in modern software development techniques and best practices.",
      image: "/images/our-solutions/software.jpg",
      rating: 4.0,
      price: 350,
      slug: "software-development",
    },
    {
      id: "2",
      title: "Data Science Mastery",
      description:
        "Learn yourself with the skills to analyze, interpret, and leverage data to drive business growth.",
      image: "/images/our-solutions/data.jpg",
      rating: 4.0,
      price: 350,
      slug: "data-science-mastery",
    },
    {
      id: "3",
      title: "Cloud Computing Expertise",
      description:
        "Gain hands-on experience in cloud computing, preparing you to manage scalable solutions.",
      image: "/images/our-solutions/cloud.jpg",
      rating: 4.0,
      price: 350,
      slug: "cloud-computing-expertise",
    },
  ];

  // Filter courses based on search query (case-insensitive)
  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center mt-28">
          <h1 className="text-4xl font-bold mb-4">Tracks</h1>
        </div>
      </section>

      {/* Search and Courses */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Search Bar */}
          <div className="relative max-w-md mx-auto mb-12">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              placeholder="Search Track"
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Top Tracks Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Top Tracks
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCourses.map((course) => (
                <CourseCard key={course.id} {...course} />
              ))}

              {filteredCourses.length === 0 && (
                <p className="col-span-full text-center text-gray-500">
                  No courses found.
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
