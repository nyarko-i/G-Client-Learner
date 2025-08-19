/* eslint-disable react/no-unescaped-entities */
import { Button } from "@/components/ui/button";

/**
 * Call-to-action section encouraging user engagement
 * Features blue background with compelling messaging and CTA button
 */
export function CtaSection() {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-white">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            It's time to start investing in yourself
          </h2>
          <p className="text-lg sm:text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Online courses open the opportunity for learning to almost anyone,
            regardless of their scheduling commitments.
          </p>
          <Button
            size="lg"
            className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8 py-3"
          >
            Get started
          </Button>
        </div>
      </div>
    </section>
  );
}
