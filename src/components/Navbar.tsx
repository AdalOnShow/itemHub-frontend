'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { deleteAuthCookie, isAuthenticated } from '@/lib/auth';
import { useEffect, useState } from 'react';

/**
 * Navbar Component
 * Simple navigation with logout functionality
 */
export default function Navbar() {
  const router = useRouter();
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    setAuthenticated(isAuthenticated());
  }, []);

  const handleLogout = () => {
    deleteAuthCookie();
    router.push('/login');
    router.refresh();
  };

  return (
    <nav className="border-b p-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          ItemHub
        </Link>

        <div className="flex gap-4 items-center">
          <Link href="/books" className="hover:underline">
            Books
          </Link>
          
          {authenticated ? (
            <>
              <Link href="/add-book" className="hover:underline">
                Add Book
              </Link>
              <button
                onClick={handleLogout}
                className="px-3 py-1 bg-red-600 text-white rounded text-sm"
              >
                Logout
              </button>
            </>
          ) : (
            <Link href="/login" className="px-3 py-1 bg-blue-600 text-white rounded text-sm">
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
