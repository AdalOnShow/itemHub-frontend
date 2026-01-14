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
    <div className="min-h-screen p-6 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Book Catalog</h1>
            <p className="text-sm text-muted-foreground mt-0.5">
              Explore and manage our collection of programming books.
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" asChild>
              <Link href="/">Home</Link>
            </Button>
            <Button size="sm" asChild>
              <Link href="/add-book">
                <Plus className="mr-1.5 h-3.5 w-3.5" /> Add Book
              </Link>
            </Button>
          </div>
        </div>

        {/* Error Message */}
        {error && (
          <Alert variant="destructive" className="mb-6 py-3">
            <AlertDescription className="text-sm">{error}</AlertDescription>
          </Alert>
        )}

        {/* Books Grid */}
        {books.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {books.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        ) : (
          !error && (
            <div className="text-center py-16 border rounded-lg bg-muted/30">
              <p className="text-muted-foreground text-base">
                No books available yet.
              </p>
              <Button variant="link" size="sm" asChild className="mt-1">
                <Link href="/add-book">Be the first to add one!</Link>
              </Button>
            </div>
          )
        )}
      </div>
    </div>
  );
}
