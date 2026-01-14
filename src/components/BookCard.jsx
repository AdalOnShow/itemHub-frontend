import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

/**
 * BookCard Component
 * Displays a single book in card format using shadcn Card
 */
export default function BookCard({ book }) {
  return (
    <Link href={`/books/${book.id}`} className="block group">
      <Card className="overflow-hidden transition-all hover:shadow-lg">
        {/* Book Cover */}
        <div className="relative w-full aspect-3/4 bg-muted">
          <Image
            src={book.coverImage}
            alt={book.title}
            fill
            className="object-cover transition-transform group-hover:scale-105"
          />
        </div>

        {/* Book Info */}
        <CardContent className="p-4">
          <h3 className="font-semibold text-lg mb-1 line-clamp-1 group-hover:text-primary transition-colors">
            {book.title}
          </h3>
          <p className="text-sm text-muted-foreground mb-3">by {book.author}</p>
          <Badge variant="secondary" className="font-semibold">
            ${book.price.toFixed(2)}
          </Badge>
        </CardContent>
      </Card>
    </Link>
  );
}
