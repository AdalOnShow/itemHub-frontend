"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { addBook } from "@/lib/api";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { ChevronLeft } from "lucide-react";

/**
 * Add Book Page (PROTECTED)
 * Allows authenticated users to add new books
 */
export default function AddBookPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    title: "",
    author: "",
    description: "",
    price: "",
    coverImage: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await addBook({
        title: formData.title,
        author: formData.author,
        description: formData.description,
        price: parseFloat(formData.price),
        coverImage: formData.coverImage || undefined,
      });
      router.push("/books");
    } catch (err) {
      setError("Failed to add book. Please try again.");
      setLoading(false);
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen p-8 bg-background text-foreground">
      <div className="max-w-2xl mx-auto">
        {/* Back Button */}
        <Button variant="ghost" asChild className="mb-6 -ml-4">
          <Link href="/books">
            <ChevronLeft className="mr-2 h-4 w-4" /> Back to Books
          </Link>
        </Button>

        <Card>
          <CardHeader>
            <CardTitle className="text-3xl font-bold tracking-tight">
              Add New Book
            </CardTitle>
            <CardDescription>
              Fill in the details below to add a new book to the catalog.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Title */}
              <div className="space-y-2">
                <Label htmlFor="title">Title *</Label>
                <Input
                  id="title"
                  name="title"
                  type="text"
                  value={formData.title}
                  onChange={handleChange}
                  required
                  placeholder="The Great Gatsby"
                />
              </div>

              {/* Author */}
              <div className="space-y-2">
                <Label htmlFor="author">Author *</Label>
                <Input
                  id="author"
                  name="author"
                  type="text"
                  value={formData.author}
                  onChange={handleChange}
                  required
                  placeholder="F. Scott Fitzgerald"
                />
              </div>

              {/* Description */}
              <div className="space-y-2">
                <Label htmlFor="description">Description *</Label>
                <Textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder="Enter a brief summary of the book..."
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Price */}
                <div className="space-y-2">
                  <Label htmlFor="price">Price ($) *</Label>
                  <Input
                    id="price"
                    name="price"
                    type="number"
                    step="0.01"
                    min="0"
                    value={formData.price}
                    onChange={handleChange}
                    required
                    placeholder="19.99"
                  />
                </div>

                {/* Cover Image URL */}
                <div className="space-y-2">
                  <Label htmlFor="coverImage">Cover Image URL</Label>
                  <Input
                    id="coverImage"
                    name="coverImage"
                    type="url"
                    value={formData.coverImage}
                    onChange={handleChange}
                    placeholder="https://example.com/image.jpg"
                  />
                </div>
              </div>

              <p className="text-xs text-muted-foreground mt-1">
                * Required fields. If cover image URL is empty, a default
                placeholder will be used.
              </p>

              {/* Error Message */}
              {error && (
                <Alert variant="destructive">
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}

              {/* Submit Button */}
              <div className="pt-4">
                <Button
                  type="submit"
                  className="w-full"
                  disabled={loading}
                  size="lg"
                >
                  {loading ? "Adding Book..." : "Add Book"}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
