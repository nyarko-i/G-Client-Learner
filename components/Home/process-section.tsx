import Image from "next/image";

export default function ProcessSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Left side: Steps with arrows */}
        <div className="space-y-10">
          {/* Step 1 - KEEP blue left line */}
          <div className="relative bg-white shadow-md p-6 rounded-xl border-l-4 border-blue-600">
            <h3 className="text-lg font-semibold text-gray-900">
              Sign Up and Choose Your Course
            </h3>
            <p className="text-gray-600 mt-2 text-sm">
              Create your account quickly with just your email or social media
              login, then explore a wide range of options.
            </p>
          </div>

          {/* Arrow */}
          <div className="flex justify-center">
            <span className="text-blue-600 text-2xl">↓</span>
          </div>

          {/* Step 2 - NO blue left line */}
          <div className="relative bg-white shadow-md p-6 rounded-xl">
            <h3 className="text-lg font-semibold text-gray-900">Onboarding</h3>
            <p className="text-gray-600 mt-2 text-sm">
              Get started seamlessly with a smooth onboarding experience. Learn
              the essentials and set yourself up for success from day one.
            </p>
          </div>

          {/* Arrow */}
          <div className="flex justify-center">
            <span className="text-blue-600 text-2xl">↓</span>
          </div>

          {/* Step 3 - NO blue left line */}
          <div className="relative bg-white shadow-md p-6 rounded-xl">
            <h3 className="text-lg font-semibold text-gray-900">
              Start Learning
            </h3>
            <p className="text-gray-600 mt-2 text-sm">
              Start your learning journey with practical, hands-on experience.
              Develop the skills needed to build, implement, and manage
              effective solutions.
            </p>
          </div>
        </div>

        {/* Right side: Numbered process with images */}
        <div className="bg-white shadow-lg rounded-2xl p-8 space-y-10">
          {/* Step 1 & 2 side by side */}
          <div className="grid grid-cols-2 gap-6">
            {/* Step 1 */}
            <div className="flex flex-col items-center">
              <span className="text-base font-bold text-blue-600 mb-2">1</span>
              <p className="text-gray-800 font-medium text-sm mb-2">
                Secure Login
              </p>
              <Image
                src="/images/process/secure.png"
                alt="Secure Login"
                width={120}
                height={120}
                className="rounded-md"
              />
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center">
              <span className="text-base font-bold text-blue-600 mb-2">2</span>
              <p className="text-gray-800 font-medium text-sm mb-2">
                Authentication
              </p>
              <Image
                src="/images/process/auth.png"
                alt="Authentication"
                width={120}
                height={120}
                className="rounded-md"
              />
            </div>
          </div>

          {/* Step 3 with compact, left-aligned course cards */}
          <div className="text-left">
            {/* Header aligned left */}
            <div className="flex items-center gap-2">
              <span className="text-sm font-bold text-blue-600">3</span>
              <h3 className="text-gray-900 font-semibold text-sm">
                Choose a course
              </h3>
            </div>

            {/* Compact grid — cards are smaller and left-aligned */}
            <div className="grid md:grid-cols-3 gap-4 mt-4">
              {/* Course 1 */}
              <div className="flex flex-col items-start p-4 bg-white border rounded-lg shadow-sm hover:shadow-md transition">
                <div className="flex justify-start mb-2">
                  <Image
                    src="/images/process/software.png"
                    alt="Software Development"
                    width={24}
                    height={24}
                    className="rounded-sm"
                  />
                </div>

                <h4 className="font-semibold text-gray-900 text-left text-xs">
                  Software Development
                </h4>
                <p className="text-gray-600 text-xs text-left mt-1">
                  Compact training in modern software development
                </p>

                <p className="text-left font-semibold text-xs mt-3">
                  Price: $350
                </p>
              </div>

              {/* Course 2 */}
              <div className="flex flex-col items-start p-4 bg-white border rounded-lg shadow-sm hover:shadow-md transition">
                <div className="flex justify-start mb-2">
                  <Image
                    src="/images/process/data.png"
                    alt="Data Science Mastery"
                    width={24}
                    height={24}
                    className="rounded-sm"
                  />
                </div>

                <h4 className="font-semibold text-gray-900 text-left text-xs">
                  Data Science Mastery
                </h4>
                <p className="text-gray-600 text-xs text-left mt-1">
                  Learn to analyze and leverage data — concise and practical.
                </p>

                <p className="text-left font-semibold text-xs mt-3">
                  Price: $350
                </p>
              </div>

              {/* Course 3 */}
              <div className="flex flex-col items-start p-4 bg-white border rounded-lg shadow-sm hover:shadow-md transition">
                <div className="flex justify-start mb-2">
                  <Image
                    src="/images/process/cloud.png"
                    alt="Cloud Computing Expertise"
                    width={24}
                    height={24}
                    className="rounded-sm"
                  />
                </div>

                <h4 className="font-semibold text-gray-900 text-left text-xs">
                  Cloud Computing Expertise
                </h4>
                <p className="text-gray-600 text-xs text-left mt-1">
                  Hands-on cloud architecture in a compact format.
                </p>

                <p className="text-left font-semibold text-xs mt-3">
                  Price: $350
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
