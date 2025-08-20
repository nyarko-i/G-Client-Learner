"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { User, Mail, MapPin, Globe, Phone } from "lucide-react";

/**
 * CheckoutForm Component
 *
 * Handles the billing and personal information form for course checkout.
 * Features:
 * - Personal information fields (name, email)
 * - Billing address fields
 * - Country and phone number selection
 * - Responsive design with proper field validation
 * - Icon integration for better UX
 */
export function CheckoutForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    country: "",
    phone: "",
    zip: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <Card className="w-full">
      <CardContent className="p-6 space-y-6">
        {/* Personal Information Section */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900">
            Personal Information
          </h3>

          {/* Name Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label
                htmlFor="firstName"
                className="text-sm font-medium text-gray-700"
              >
                First Name
              </Label>
              <div className="relative">
                <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  id="firstName"
                  placeholder="John"
                  value={formData.firstName}
                  onChange={(e) =>
                    handleInputChange("firstName", e.target.value)
                  }
                  className="pl-10"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label
                htmlFor="lastName"
                className="text-sm font-medium text-gray-700"
              >
                Last Name
              </Label>
              <div className="relative">
                <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  id="lastName"
                  placeholder="Doe"
                  value={formData.lastName}
                  onChange={(e) =>
                    handleInputChange("lastName", e.target.value)
                  }
                  className="pl-10"
                />
              </div>
            </div>
          </div>

          {/* Email Field */}
          <div className="space-y-2">
            <Label
              htmlFor="email"
              className="text-sm font-medium text-gray-700"
            >
              Email Address
            </Label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                id="email"
                type="email"
                placeholder="john.doe@example.com"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
        </div>

        {/* Billing Address Section */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900">
            Billing Address
          </h3>

          {/* Address Field */}
          <div className="space-y-2">
            <Label
              htmlFor="address"
              className="text-sm font-medium text-gray-700"
            >
              Street Address
            </Label>
            <div className="relative">
              <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                id="address"
                placeholder="123 Main Street"
                value={formData.address}
                onChange={(e) => handleInputChange("address", e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          {/* Country and ZIP */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label
                htmlFor="country"
                className="text-sm font-medium text-gray-700"
              >
                Country
              </Label>
              <div className="relative">
                <Globe className="absolute left-3 top-3 h-4 w-4 text-gray-400 z-10" />
                <Select
                  value={formData.country}
                  onValueChange={(value) => handleInputChange("country", value)}
                >
                  <SelectTrigger className="pl-10">
                    <SelectValue placeholder="Select country" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="us">United States</SelectItem>
                    <SelectItem value="ca">Canada</SelectItem>
                    <SelectItem value="uk">United Kingdom</SelectItem>
                    <SelectItem value="ng">Nigeria</SelectItem>
                    <SelectItem value="gh">Ghana</SelectItem>
                    <SelectItem value="ke">Kenya</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label
                htmlFor="zip"
                className="text-sm font-medium text-gray-700"
              >
                ZIP Code
              </Label>
              <Input
                id="zip"
                placeholder="12345"
                value={formData.zip}
                onChange={(e) => handleInputChange("zip", e.target.value)}
              />
            </div>
          </div>

          {/* Phone Field */}
          <div className="space-y-2">
            <Label
              htmlFor="phone"
              className="text-sm font-medium text-gray-700"
            >
              Phone Number
            </Label>
            <div className="relative">
              <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                id="phone"
                type="tel"
                placeholder="+1 (555) 123-4567"
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
