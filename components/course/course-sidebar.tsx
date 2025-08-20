import Link from "next/link";
import { Clock, Users, Award, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface CourseSidebarProps {
  duration: string;
  enrolledStudents: number;
  instructor: string;
  price: number;
}

/**
 * Course sidebar component with course details and enrollment
 * Features sticky positioning and course enrollment button
 */
export function CourseSidebar({
  duration,
  enrolledStudents,
  instructor,
  price,
}: CourseSidebarProps) {
  return (
    <div className="lg:col-span-1">
      <Card className="sticky top-6">
        <CardContent className="p-6">
          <h3 className="font-semibold text-lg mb-4">Course Details</h3>

          <div className="space-y-4 mb-6">
            <div className="flex items-center space-x-3">
              <Clock className="w-5 h-5 text-gray-400" />
              <div>
                <div className="font-medium">Duration</div>
                <div className="text-sm text-gray-600">{duration}</div>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <Users className="w-5 h-5 text-gray-400" />
              <div>
                <div className="font-medium">Students</div>
                <div className="text-sm text-gray-600">{enrolledStudents}</div>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <Award className="w-5 h-5 text-gray-400" />
              <div>
                <div className="font-medium">Instructor</div>
                <div className="text-sm text-gray-600">{instructor}</div>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <Calendar className="w-5 h-5 text-gray-400" />
              <div>
                <div className="font-medium">Start</div>
                <div className="text-sm text-gray-600">03/2025</div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900 mb-4">
              ${price.toFixed(2)}
            </div>
            <Link href="/checkout">
              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                Enroll
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
