"use client";

export default function ContactPage() {
  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-5xl mx-auto mt-20">
        {/* Page Heading */}
        <h1 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-6">
          Contact Us
        </h1>
        <p className="text-center text-lg text-gray-600 dark:text-gray-300 mb-12">
          Have questions, feedback, or partnership inquiries? We’d love to hear
          from you.
        </p>

        <div className="flex flex-col justify-between items-center md:flex-row mt-10">
          {/* Contact Form */}
          <form className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 space-y-4 w-full  md:w-[60%]">
            <div>
              <label
                htmlFor="name"
                className="block text-gray-700 dark:text-gray-300 font-medium mb-1"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Your Name"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-gray-700 dark:text-gray-300 font-medium mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="you@example.com"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-gray-700 dark:text-gray-300 font-medium mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                placeholder="Your message..."
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition"
            >
              Send Message
            </button>
          </form>

          {/* Contact Info */}
          <div className="mt-10 md:mt-0 space-y-6 text-gray-700 dark:text-gray-300">
            <div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                Our Office
              </h2>
              <p>123 Event Street, Ticket City, NY 10001</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                Email
              </h2>
              <p>support@quicktix.com</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                Phone
              </h2>
              <p>+1 (555) 123-4567</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                Business Hours
              </h2>
              <p>Mon - Fri: 9 AM - 6 PM</p>
              <p>Sat - Sun: Closed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
