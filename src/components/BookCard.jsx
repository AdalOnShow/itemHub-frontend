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
      <Card className="overflow-hidden shadow-sm transition-all hover:shadow-md border border-border/50">
        {/* Book Cover */}
        <div className="relative w-full aspect-3/4 bg-muted border-b border-border/20">
          <Image
            src={book.coverImage}
            alt={book.title}
            fill
            className="object-cover transition-transform group-hover:scale-105"
          />
        </div>

        {/* Book Info */}
        <CardContent className="p-3">
          <h3 className="font-semibold text-base mb-1 line-clamp-1 group-hover:text-primary transition-colors">
            {book.title}
          </h3>
          <p className="text-xs text-muted-foreground mb-2">by {book.author}</p>
          <p className="text-xs text-muted-foreground mb-3 line-clamp-2 h-8 leading-relaxed">
            {book.description}
          </p>
          <div className="flex justify-between items-center">
            <Badge
              variant="secondary"
              className="font-semibold text-[10px] px-1.5 py-0"
            >
              ${book.price.toFixed(2)}
            </Badge>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
