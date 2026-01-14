import Link from "next/link";
import { fetchBooks } from "@/lib/api";
import BookCard from "@/components/BookCard";

/**
 * Books Listing Page (Public)
 * Fetches and displays all books from backend
 */
export default async function BooksPage() {
  let books = [];
  let error = null;

  try {
    books = await fetchBooks();
  } catch (e) {
    error = "Failed to load books. Make sure the backend server is running.";
    console.error(e);
  }

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Book Catalog</h1>
          <div className="space-x-4">
            <Link href="/" className="px-4 py-2 border rounded">
              Home
            </Link>
            <Link
              href="/add-book"
              className="px-4 py-2 bg-blue-600 text-white rounded"
            >
              Add Book
            </Link>
          </div>
        </div>

        {/* Error Message */}
        {error && (
          <div className="p-4 bg-red-100 text-red-700 rounded mb-4">
            {error}
          </div>
        )}

        {/* Books Grid */}
        {books.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {books.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        ) : (
          !error && <p className="text-gray-500">No books available.</p>
        )}
      </div>
    </div>
  );
}
