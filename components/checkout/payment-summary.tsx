"use client";

import { useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { CreditCard, Lock } from "lucide-react";

interface PaymentSummaryProps {
  courseName?: string;
  basePrice?: number;
}

/**
 * PaymentSummary Component
 *
 * Displays the payment summary and handles course purchase.
 * Features:
 * - Price display with currency formatting
 * - Amount selection dropdown
 * - Secure payment button with loading state
 * - Responsive design for mobile and desktop
 * - Security indicators for user trust
 * - Dynamic course information from URL parameters
 */
export function PaymentSummary({ courseName, basePrice }: PaymentSummaryProps) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [selectedAmount, setSelectedAmount] = useState<string>("");
  const [isProcessing, setIsProcessing] = useState(false);

  const courseTitle =
    courseName || searchParams.get("title") || "Software Development Track";
  const coursePrice =
    basePrice || Number.parseFloat(searchParams.get("price") || "350");
  const instructor = searchParams.get("instructor") || "John Doe";
  const duration = searchParams.get("duration") || "3 months";

  const handlePurchase = async () => {
    setIsProcessing(true);
    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsProcessing(false);

    // Navigate to purchase summary page with course details
    const summaryParams = new URLSearchParams({
      title: courseTitle,
      price: coursePrice.toString(),
      instructor: instructor,
      duration: duration,
      orderId: `ORD-${Date.now()}`,
    });

    router.push(`/purchase-summary?${summaryParams.toString()}`);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(price);
  };

  return (
    <Card className="w-full sticky top-6">
      <CardHeader className="pb-4">
        <CardTitle className="text-xl font-semibold text-gray-900">
          Complete payment
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Course Information */}
        <div className="space-y-3">
          <div className="space-y-1">
            <p className="text-sm text-gray-600">Course:</p>
            <p className="font-medium text-gray-900">{courseTitle}</p>
          </div>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-gray-600">Instructor:</p>
              <p className="font-medium text-gray-900">{instructor}</p>
            </div>
            <div>
              <p className="text-gray-600">Duration:</p>
              <p className="font-medium text-gray-900">{duration}</p>
            </div>
          </div>
        </div>

        {/* Price Display */}
        <div className="space-y-4">
          <div className="text-center">
            <p className="text-3xl font-bold text-gray-900">
              {formatPrice(coursePrice)}
            </p>
            <p className="text-sm text-gray-500 mt-1">USD</p>
          </div>

          {/* Amount Selection */}
          <div className="space-y-2">
            <Label
              htmlFor="amount"
              className="text-sm font-medium text-gray-700"
            >
              Select amount
            </Label>
            <Select value={selectedAmount} onValueChange={setSelectedAmount}>
              <SelectTrigger>
                <SelectValue placeholder={`$${coursePrice.toFixed(2)}`} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value={coursePrice.toString()}>
                  ${coursePrice.toFixed(2)} - Full Course
                </SelectItem>
                <SelectItem value={(coursePrice / 2).toString()}>
                  ${(coursePrice / 2).toFixed(2)} - Payment Plan (1/2)
                </SelectItem>
                <SelectItem value={(coursePrice / 3).toString()}>
                  ${(coursePrice / 3).toFixed(2)} - Payment Plan (1/3)
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Purchase Button */}
        <Button
          onClick={handlePurchase}
          disabled={isProcessing}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-base font-medium"
          size="lg"
        >
          <div className="flex items-center justify-center space-x-2">
            {isProcessing ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                <span>Processing...</span>
              </>
            ) : (
              <>
                <CreditCard className="h-4 w-4" />
                <span>Complete my purchase</span>
              </>
            )}
          </div>
        </Button>

        {/* Security Notice */}
        <div className="flex items-center justify-center space-x-2 text-xs text-gray-500">
          <Lock className="h-3 w-3" />
          <span>Secure 256-bit SSL encryption</span>
        </div>

        {/* Terms */}
        <div className="text-xs text-gray-500 text-center leading-relaxed">
          By completing your purchase, you agree to our{" "}
          <a href="#" className="text-blue-600 hover:underline">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="#" className="text-blue-600 hover:underline">
            Privacy Policy
          </a>
        </div>
      </CardContent>
    </Card>
  );
}
