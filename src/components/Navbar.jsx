"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { deleteAuthCookie, isAuthenticated } from "@/lib/auth";
import { useState } from "react";
import { Button } from "@/components/ui/button";

/**
 * Navbar Component
 * Clean navigation with shadcn Button components
 */
export default function Navbar() {
  const router = useRouter();
  const [authenticated, setAuthenticated] = useState(() => isAuthenticated());

  const handleLogout = () => {
    deleteAuthCookie();
    router.push("/login");
    router.refresh();
  };

  return (
    <nav className="border-b bg-background">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link
          href="/"
          className="text-xl font-bold hover:text-primary transition-colors"
        >
          ItemHub
        </Link>

        <div className="flex gap-3 items-center">
          <Button variant="ghost" asChild>
            <Link href="/books">Books</Link>
          </Button>

          {authenticated ? (
            <>
              <Button variant="ghost" asChild>
                <Link href="/add-book">Add Book</Link>
              </Button>
              <Button variant="destructive" size="sm" onClick={handleLogout}>
                Logout
              </Button>
            </>
          ) : (
            <Button asChild>
              <Link href="/login">Login</Link>
            </Button>
          )}
        </div>
      </div>
    </nav>
  );
}
