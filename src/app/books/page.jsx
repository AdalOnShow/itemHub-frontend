import Link from "next/link";
import { fetchBooks } from "@/lib/api";
import BookCard from "@/components/BookCard";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Plus } from "lucide-react";

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
    <div className="min-h-screen py-8 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight mb-1">Book Catalog</h1>
            <p className="text-sm text-muted-foreground">
              Explore and manage our collection of programming books
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="default" asChild>
              <Link href="/">Home</Link>
            </Button>
            <Button size="default" asChild>
              <Link href="/add-book">
                <Plus className="mr-2 h-4 w-4" /> Add Book
              </Link>
            </Button>
          </div>
        </div>

        {/* Error Message */}
        {error && (
          <Alert variant="destructive" className="mb-8">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        {/* Books Grid */}
        {books.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {books.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        ) : (
          !error && (
            <div className="text-center py-20 border rounded-lg bg-muted/30">
              <p className="text-muted-foreground mb-2">
                No books available yet
              </p>
              <Button variant="link" asChild>
                <Link href="/add-book">Be the first to add one!</Link>
              </Button>
            </div>
          )
        )}
      </div>
    </div>
  );
}
