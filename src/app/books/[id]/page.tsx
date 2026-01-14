import Link from 'next/link';
import { notFound } from 'next/navigation';
import { fetchBookById } from '@/lib/api';
import Image from 'next/image';

/**
 * Book Details Page (Public)
 * Displays full information for a single book
 */
export default async function BookDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  let book = null;

  try {
    book = await fetchBookById(id);
  } catch (error) {
    console.error(error);
    notFound();
  }

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <Link href="/books" className="inline-block mb-6 text-blue-600 hover:underline">
          ← Back to Books
        </Link>

        {/* Book Details */}
        <div className="border rounded p-6">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Book Cover */}
            <div>
              <div className="relative w-full aspect-[3/4] bg-gray-200 rounded overflow-hidden">
                <Image
                  src={book.coverImage}
                  alt={book.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Book Info */}
            <div>
              <h1 className="text-3xl font-bold mb-2">{book.title}</h1>
              <p className="text-xl text-gray-600 mb-4">by {book.author}</p>
              
              <div className="mb-6">
                <span className="text-2xl font-bold text-green-600">
                  ${book.price.toFixed(2)}
                </span>
              </div>

              <div className="mb-6">
                <h2 className="text-lg font-semibold mb-2">Description</h2>
                <p className="text-gray-700">{book.description}</p>
              </div>

              <div className="space-y-2 text-sm text-gray-600">
                <p><strong>Book ID:</strong> {book.id}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
