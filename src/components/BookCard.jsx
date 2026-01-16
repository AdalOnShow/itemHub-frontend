import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

/**
 * BookCard Component
 * Modern, clean card design with proper hierarchy and spacing
 */
export default function BookCard({ book }) {
  return (
    <Link href={`/books/${book.id}`} className="block group">
      <Card className="h-full flex flex-col overflow-hidden border-border/50 hover:border-border transition-all duration-200 hover:shadow-sm">
        {/* Book Cover */}
        <div className="relative w-full aspect-3/4 bg-muted overflow-hidden">
          <Image
            src={book.coverImage}
            alt={book.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
        </div>

        {/* Book Info */}
        <CardContent className="flex-1 flex flex-col p-4 gap-2">
          {/* Title */}
          <h3 className="font-semibold text-sm leading-tight line-clamp-2 group-hover:text-primary transition-colors">
            {book.title}
          </h3>

          {/* Author */}
          <p className="text-xs text-muted-foreground">{book.author}</p>

          {/* Description */}
          <p className="text-xs text-muted-foreground/80 line-clamp-2 leading-relaxed flex-1">
            {book.description}
          </p>

          {/* Price */}
          <div className="pt-1">
            <Badge variant="secondary" className="font-semibold text-xs">
              ${book.price.toFixed(2)}
            </Badge>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
