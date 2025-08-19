import Link from "next/link";
import Image from "next/image";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blue-800 text-white w-full">
      {/* Top Section */}
      <div className="px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-8">
          {/* Brand (Logo Image) */}
          <div>
            <div className="mb-6">
              <Image
                src="/images/hero/footer-logo.png"
                alt="CClient Logo"
                width={150}
                height={40}
                priority
              />
            </div>
          </div>

          {/* Menu */}
          <div>
            <h3 className="font-semibold mb-4">Menu</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-blue-200 hover:text-white text-sm"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/tracks"
                  className="text-blue-200 hover:text-white text-sm"
                >
                  Courses
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-blue-200 text-sm">+23341002000</li>
              <li className="text-blue-200 text-sm">New Reiss, Ghana, Accra</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold mb-4">Social</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-blue-200 hover:text-white text-sm"
                >
                  LinkedIn
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-blue-200 hover:text-white text-sm"
                >
                  Facebook
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-blue-600 px-6 lg:px-12 py-4 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between text-sm text-blue-200">
        <p>© copyright {currentYear} - G-client, All rights reserved</p>
        <Link
          href="#"
          className="hover:text-white flex items-center mt-2 md:mt-0"
        >
          Back to top <span className="ml-1">↗</span>
        </Link>
      </div>
    </footer>
  );
}
