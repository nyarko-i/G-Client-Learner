import { GraduationCap, Users, Clock } from "lucide-react";

export function StatsSection() {
  const stats = [
    {
      icon: GraduationCap,
      value: "4+",
      label: "Courses",
      color: "text-blue-600",
    },
    {
      icon: Users,
      value: "200+",
      label: "Course students",
      color: "text-blue-600",
    },
    {
      icon: Clock,
      value: "250+",
      label: "Hours of content",
      color: "text-blue-600",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            We are proud
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We take pride in our achievements and commitment to excellence. Join
            us in celebrating innovation, growth, and success.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center transition transform hover:scale-105"
            >
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                  <stat.icon
                    className={`w-8 h-8 ${stat.color}`}
                    aria-hidden="true"
                  />
                </div>
              </div>
              <div
                className={`text-4xl sm:text-5xl font-bold mb-2 ${stat.color}`}
              >
                {stat.value}
              </div>
              <div className="text-lg text-gray-700 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
