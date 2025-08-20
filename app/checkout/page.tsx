import { CheckoutForm } from "@/components/checkout/checkout-form";
import { PaymentSummary } from "@/components/checkout/payment-summary";
import { Footer } from "@/components/Home/footer";
import { Header } from "@/components/Home/header";

/**
 * Checkout Page
 *
 * Main checkout page that combines the checkout form and payment summary.
 * Features:
 * - Responsive two-column layout (form + summary)
 * - Mobile-first design that stacks on smaller screens
 * - Consistent header styling with other pages
 * - Proper spacing and visual hierarchy
 */
export default function CheckoutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Checkout Header */}
      <div className="bg-blue-600 text-white py-8 mt-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-center">
            Checkout
          </h1>
        </div>
      </div>

      {/* Main Checkout Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Two-column layout: Form + Summary */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Checkout Form - Takes 2/3 width on desktop */}
            <div className="lg:col-span-2">
              <CheckoutForm />
            </div>

            {/* Payment Summary - Takes 1/3 width on desktop */}
            <div className="lg:col-span-1">
              <PaymentSummary
                courseName="Software Development Track"
                basePrice={350}
              />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
