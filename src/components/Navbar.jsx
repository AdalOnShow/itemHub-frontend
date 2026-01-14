"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { deleteAuthCookie, isAuthenticated } from "@/lib/auth";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

/**
 * Navbar Component
 * Clean navigation with shadcn Button components
 */
export default function Navbar() {
  const router = useRouter();
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    setAuthenticated(isAuthenticated());
  }, []);

  const handleLogout = () => {
    deleteAuthCookie();
    setAuthenticated(false);
    router.push("/login");
    router.refresh();
  };

  return (
    <nav className="border-b bg-background sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex gap-6 items-center">
          <Link
            href="/"
            className="text-lg font-bold hover:text-primary transition-colors"
          >
            ItemHub
          </Link>

          <div className="hidden md:flex gap-1 items-center">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/">Home</Link>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <Link href="/books">Books</Link>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <Link href="/add-book">Add Book</Link>
            </Button>
          </div>
        </div>

        <div className="flex gap-2 items-center">
          {authenticated ? (
            <Button variant="destructive" size="sm" onClick={handleLogout}>
              Logout
            </Button>
          ) : (
            <Button size="sm" asChild>
              <Link href="/login">Login</Link>
            </Button>
          )}
        </div>
      </div>
    </nav>
  );
}
