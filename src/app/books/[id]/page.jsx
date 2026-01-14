import Link from "next/link";
import { notFound } from "next/navigation";
import { fetchBookById } from "@/lib/api";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft } from "lucide-react";

/**
 * Book Details Page (Public)
 * Displays full information for a single book
 */
export default async function BookDetailsPage({ params }) {
  const { id } = await params;
  let book = null;

  try {
    book = await fetchBookById(id);
  } catch (error) {
    console.error(error);
    notFound();
  }

  return (
    <div className="min-h-screen p-8 bg-background">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <Button variant="ghost" asChild className="mb-6 -ml-4">
          <Link href="/books">
            <ChevronLeft className="mr-2 h-4 w-4" /> Back to Books
          </Link>
        </Button>

        {/* Book Details */}
        <Card>
          <CardContent className="p-0 md:p-6">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Book Cover */}
              <div className="p-4 md:p-0">
                <div className="relative w-full aspect-3/4 bg-muted rounded-lg overflow-hidden shadow-md">
                  <Image
                    src={book.coverImage}
                    alt={book.title}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>

              {/* Book Info */}
              <div className="p-6 md:p-0 flex flex-col justify-center">
                <div className="space-y-4">
                  <div>
                    <h1 className="text-4xl font-bold tracking-tight mb-2">
                      {book.title}
                    </h1>
                    <p className="text-xl text-muted-foreground">
                      by {book.author}
                    </p>
                  </div>

                  <div>
                    <Badge
                      variant="secondary"
                      className="text-xl px-3 py-1 font-bold text-primary"
                    >
                      ${book.price.toFixed(2)}
                    </Badge>
                  </div>

                  <div className="pt-4 border-t">
                    <h2 className="text-lg font-semibold mb-2">Description</h2>
                    <p className="text-muted-foreground leading-relaxed whitespace-pre-wrap">
                      {book.description}
                    </p>
                  </div>

                  <div className="pt-4 mt-auto text-xs text-muted-foreground flex items-center gap-2">
                    <span className="font-semibold px-2 py-0.5 bg-muted rounded uppercase tracking-wider">
                      Book ID
                    </span>
                    <code className="bg-muted px-2 py-0.5 rounded text-primary">
                      {book.id}
                    </code>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
