import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <div className="text-gray-800 dark:text-gray-100">
      {/* Hero Section */}
      <section className="py-20 text-center px-4">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
          We’re passionate about delivering exceptional solutions that empower
          people and businesses to achieve more. Our journey is driven by
          innovation, collaboration, and trust.
        </p>
      </section>

      {/* Mission & Values */}
      <section className="min-h-1/2 py-16 bg-gray-50 dark:bg-gray-800 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-xl font-semibold mb-2">🚀 Our Mission</h3>
            <p className="text-gray-600 dark:text-gray-300">
              To create impactful solutions that simplify life and drive growth.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">💡 Our Values</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Innovation, integrity, and inclusivity guide everything we do.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">🌍 Our Impact</h3>
            <p className="text-gray-600 dark:text-gray-300">
              We aim to make a difference in the communities we serve.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <Image
            src="/images/story.jpg"
            alt="Our Story"
            width={500}
            height={300}
            className="rounded-lg shadow-lg"
          />
          <div>
            <h2 className="text-3xl font-bold mb-4">Our Story</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Founded in 2020, we started as a small team with big dreams.
              Today, we’re proud to work with clients worldwide, delivering
              cutting-edge solutions and unmatched service.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              Every step of our journey has been shaped by our clients&apos;
              trust and our team&apos;s relentless drive to innovate.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="min-h-[50vh] flex flex-col justify-center items-center py-16 bg-blue-500 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Let’s Work Together</h2>
        <p className="mb-6">
          Have a project in mind? We’d love to hear from you.
        </p>
        <Link
          href="/contact"
          className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
        >
          Contact Us
        </Link>
      </section>
    </div>
  );
}
