/* eslint-disable react/no-unescaped-entities */
"use client";

import { useSearchParams } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  CheckCircle,
  Download,
  Calendar,
  User,
  Clock,
  Mail,
} from "lucide-react";
import Link from "next/link";
import { Header } from "@/components/Home/header";
import { Footer } from "@/components/Home/footer";

/**
 * Purchase Summary Page
 *
 * Displays order confirmation and course access details after successful payment.
 * Features:
 * - Order confirmation with success indicator
 * - Course details and access information
 * - Download receipt functionality
 * - Next steps guidance
 * - Responsive design for all screen sizes
 */
export default function PurchaseSummaryPage() {
  const searchParams = useSearchParams();

  // Get purchase details from URL parameters
  const courseTitle = searchParams.get("title") || "Software Development Track";
  const coursePrice = searchParams.get("price") || "350";
  const instructor = searchParams.get("instructor") || "John Doe";
  const duration = searchParams.get("duration") || "3 months";
  const orderId = searchParams.get("orderId") || `ORD-${Date.now()}`;

  const formatPrice = (price: string) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(Number.parseFloat(price));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      {/* Success Header */}
      <div className="bg-green-600 text-white py-8 mt-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center space-x-3">
            <CheckCircle className="h-8 w-8" />
            <h1 className="text-3xl md:text-4xl font-bold">
              Purchase Successful!
            </h1>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Order Confirmation Card */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900 flex items-center space-x-2">
                <CheckCircle className="h-6 w-6 text-green-600" />
                <span>Order Confirmation</span>
              </CardTitle>
              <p className="text-gray-600">
                Thank you for your purchase! Your enrollment is now active.
              </p>
            </CardHeader>

            <CardContent className="space-y-6">
              {/* Order Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Order Details
                    </h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Order ID:</span>
                        <span className="font-medium">{orderId}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Date:</span>
                        <span className="font-medium">
                          {new Date().toLocaleDateString()}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Total Amount:</span>
                        <span className="font-bold text-lg">
                          {formatPrice(coursePrice)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Course Information
                    </h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-start space-x-2">
                        <span className="text-gray-600 min-w-0">Course:</span>
                        <span className="font-medium">{courseTitle}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <User className="h-4 w-4 text-gray-400" />
                        <span className="text-gray-600">Instructor:</span>
                        <span className="font-medium">{instructor}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4 text-gray-400" />
                        <span className="text-gray-600">Duration:</span>
                        <span className="font-medium">{duration}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t">
                <Button className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700">
                  <Download className="h-4 w-4" />
                  <span>Download Receipt</span>
                </Button>
                <Button
                  variant="outline"
                  className="flex items-center space-x-2 bg-transparent"
                >
                  <Mail className="h-4 w-4" />
                  <span>Email Receipt</span>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Next Steps Card */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl font-bold text-gray-900">
                What's Next?
              </CardTitle>
            </CardHeader>

            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center space-y-2">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                    <Mail className="h-6 w-6 text-blue-600" />
                  </div>
                  <h4 className="font-semibold">Check Your Email</h4>
                  <p className="text-sm text-gray-600">
                    You'll receive course access details and login instructions
                    within 5 minutes.
                  </p>
                </div>

                <div className="text-center space-y-2">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                    <Calendar className="h-6 w-6 text-green-600" />
                  </div>
                  <h4 className="font-semibold">Start Learning</h4>
                  <p className="text-sm text-gray-600">
                    Access your course materials immediately and begin your
                    learning journey.
                  </p>
                </div>

                <div className="text-center space-y-2">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
                    <User className="h-6 w-6 text-purple-600" />
                  </div>
                  <h4 className="font-semibold">Get Support</h4>
                  <p className="text-sm text-gray-600">
                    Join our community and get help from instructors and fellow
                    students.
                  </p>
                </div>
              </div>

              {/* Navigation Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t">
                <Link href="/tracks" className="flex-1">
                  <Button variant="outline" className="w-full bg-transparent">
                    Browse More Courses
                  </Button>
                </Link>
                <Link href="/" className="flex-1">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    Go to Dashboard
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
}
