'use client';

import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { addBook } from '@/lib/api';
import Link from 'next/link';

/**
 * Add Book Page (PROTECTED)
 * Allows authenticated users to add new books
 * Protected by middleware - redirects to /login if not authenticated
 */
export default function AddBookPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    description: '',
    price: '',
    coverImage: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      // Add book via API
      await addBook({
        title: formData.title,
        author: formData.author,
        description: formData.description,
        price: parseFloat(formData.price),
        coverImage: formData.coverImage || undefined,
      });

      // Redirect to books page on success
      router.push('/books');
    } catch (err) {
      setError('Failed to add book. Please try again.');
      setLoading(false);
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-2xl mx-auto">
        {/* Back Button */}
        <Link href="/books" className="inline-block mb-6 text-blue-600 hover:underline">
          ← Back to Books
        </Link>

        <h1 className="text-3xl font-bold mb-6">Add New Book</h1>

        <form onSubmit={handleSubmit} className="border rounded p-6 space-y-4">
          {/* Title */}
          <div>
            <label htmlFor="title" className="block mb-1 font-medium">
              Title *
            </label>
            <input
              id="title"
              name="title"
              type="text"
              value={formData.title}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded"
              placeholder="Enter book title"
            />
          </div>

          {/* Author */}
          <div>
            <label htmlFor="author" className="block mb-1 font-medium">
              Author *
            </label>
            <input
              id="author"
              name="author"
              type="text"
              value={formData.author}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded"
              placeholder="Enter author name"
            />
          </div>

          {/* Description */}
          <div>
            <label htmlFor="description" className="block mb-1 font-medium">
              Description *
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              rows={4}
              className="w-full px-3 py-2 border rounded"
              placeholder="Enter book description"
            />
          </div>

          {/* Price */}
          <div>
            <label htmlFor="price" className="block mb-1 font-medium">
              Price ($) *
            </label>
            <input
              id="price"
              name="price"
              type="number"
              step="0.01"
              min="0"
              value={formData.price}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded"
              placeholder="0.00"
            />
          </div>

          {/* Cover Image URL */}
          <div>
            <label htmlFor="coverImage" className="block mb-1 font-medium">
              Cover Image URL (optional)
            </label>
            <input
              id="coverImage"
              name="coverImage"
              type="url"
              value={formData.coverImage}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
              placeholder="https://example.com/image.jpg"
            />
            <p className="text-sm text-gray-500 mt-1">
              Leave empty for default placeholder image
            </p>
          </div>

          {/* Error Message */}
          {error && (
            <div className="p-3 bg-red-100 text-red-700 rounded">
              {error}
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
          >
            {loading ? 'Adding Book...' : 'Add Book'}
          </button>
        </form>
      </div>
    </div>
  );
}
