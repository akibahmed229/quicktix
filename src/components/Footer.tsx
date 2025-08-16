import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-700 text-gray-400 py-6 mt-auto shadow-[0_-4px_10px_rgba(0,0,0,0.1)] dark:shadow-[0_-4px_10px_rgba(0,0,0,0.4)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top section */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          {/* Branding */}
          <div className="text-lg font-bold ">QuickTix</div>

          {/* Navigation Links */}
          <nav className="flex gap-6 text-sm">
            <Link href="/" className="hover:text-white transition">
              Home
            </Link>
            <Link href="/about" className="hover:text-white transition">
              About
            </Link>
            <Link href="/events" className="hover:text-white transition">
              Events
            </Link>
            <Link href="/contact" className="hover:text-white transition">
              Contact
            </Link>
          </nav>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-6 pt-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs">
            &copy; {new Date().getFullYear()} QuickTix. All rights reserved.
          </p>

          {/* Social Icons (Optional) */}
          <div className="flex gap-4">
            <a
              href="#"
              aria-label="Twitter"
              className="hover:text-white transition"
            >
              🐦
            </a>
            <a
              href="#"
              aria-label="GitHub"
              className="hover:text-white transition"
            >
              💻
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="hover:text-white transition"
            >
              📸
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
