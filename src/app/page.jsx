import Link from "next/link";

/**
 * Landing Page - 7 placeholder sections
 * Minimal structure only, no styling focus
 */
export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Section 1: Hero */}
      <section className="p-8 border-b">
        <h1 className="text-4xl font-bold mb-4">ItemHub</h1>
        <p className="text-lg mb-4">Book Listing & Management Platform</p>
        <Link
          href="/books"
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          Browse Books
        </Link>
      </section>

      {/* Section 2: Features */}
      <section className="p-8 border-b">
        <h2 className="text-2xl font-bold mb-4">Features</h2>
        <ul className="list-disc pl-6">
          <li>Browse book catalog</li>
          <li>View detailed book information</li>
          <li>Add new books (authenticated users)</li>
        </ul>
      </section>

      {/* Section 3: How It Works */}
      <section className="p-8 border-b">
        <h2 className="text-2xl font-bold mb-4">How It Works</h2>
        <p>Simple book management system with authentication.</p>
      </section>

      {/* Section 4: Benefits */}
      <section className="p-8 border-b">
        <h2 className="text-2xl font-bold mb-4">Benefits</h2>
        <p>Easy to use, clean interface, secure authentication.</p>
      </section>

      {/* Section 5: Testimonials */}
      <section className="p-8 border-b">
        <h2 className="text-2xl font-bold mb-4">Testimonials</h2>
        <p>&quot;Great platform for managing books!&quot; - User</p>
      </section>

      {/* Section 6: Call to Action */}
      <section className="p-8 border-b">
        <h2 className="text-2xl font-bold mb-4">Get Started</h2>
        <Link
          href="/login"
          className="px-4 py-2 bg-green-600 text-white rounded"
        >
          Login
        </Link>
      </section>

      {/* Section 7: Footer */}
      <section className="p-8">
        <p className="text-sm text-gray-600">
          © 2026 ItemHub. All rights reserved.
        </p>
      </section>
    </div>
  );
}
