import Link from "next/link";
import Image from "next/image";

/**
 * BookCard Component
 * Displays a single book in card format
 * Used in the books listing page
 */
export default function BookCard({ book }) {
  return (
    <Link
      href={`/books/${book.id}`}
      className="block border rounded overflow-hidden hover:shadow-lg transition-shadow"
    >
      {/* Book Cover */}
      <div className="relative w-full aspect-3/4 bg-gray-200">
        <Image
          src={book.coverImage}
          alt={book.title}
          fill
          className="object-cover"
        />
      </div>

      {/* Book Info */}
      <div className="p-4">
        <h3 className="font-bold text-lg mb-1 line-clamp-1">{book.title}</h3>
        <p className="text-gray-600 text-sm mb-2">by {book.author}</p>
        <p className="text-green-600 font-semibold">${book.price.toFixed(2)}</p>
      </div>
    </Link>
  );
}
