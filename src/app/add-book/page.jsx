"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { addBook } from "@/lib/api";
import { useToast } from "@/hooks/use-toast";
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
  const { toast } = useToast();
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

      // Show success toast
      toast({
        title: "Book added successfully",
        description: `${formData.title} has been added to the catalog.`,
      });

      router.push("/books");
    } catch (err) {
      setError("Failed to add book. Please try again.");
      setLoading(false);
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen p-6 bg-background text-foreground">
      <div className="max-w-xl mx-auto">
        {/* Back Button */}
        <Button
          variant="ghost"
          size="sm"
          asChild
          className="mb-4 -ml-2 text-muted-foreground"
        >
          <Link href="/books">
            <ChevronLeft className="mr-1 h-3.5 w-3.5" /> Back to Books
          </Link>
        </Button>

        <Card className="shadow-sm">
          <CardHeader className="p-6">
            <CardTitle className="text-xl font-bold tracking-tight">
              Add New Book
            </CardTitle>
            <CardDescription className="text-sm">
              Fill in the details below to add a new book to the catalog.
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6 pt-0">
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Title */}
              <div className="space-y-1.5">
                <Label htmlFor="title" className="text-sm">
                  Title *
                </Label>
                <Input
                  id="title"
                  name="title"
                  type="text"
                  value={formData.title}
                  onChange={handleChange}
                  required
                  placeholder="e.g. Clean Code"
                  className="h-9"
                />
              </div>

              {/* Author */}
              <div className="space-y-1.5">
                <Label htmlFor="author" className="text-sm">
                  Author *
                </Label>
                <Input
                  id="author"
                  name="author"
                  type="text"
                  value={formData.author}
                  onChange={handleChange}
                  required
                  placeholder="e.g. Robert C. Martin"
                  className="h-9"
                />
              </div>

              {/* Description */}
              <div className="space-y-1.5">
                <Label htmlFor="description" className="text-sm">
                  Description *
                </Label>
                <Textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                  rows={3}
                  placeholder="Enter a brief summary of the book..."
                  className="resize-none"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {/* Price */}
                <div className="space-y-1.5">
                  <Label htmlFor="price" className="text-sm">
                    Price ($) *
                  </Label>
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
                    className="h-9"
                  />
                </div>

                {/* Cover Image URL */}
                <div className="space-y-1.5">
                  <Label htmlFor="coverImage" className="text-sm">
                    Cover Image URL
                  </Label>
                  <Input
                    id="coverImage"
                    name="coverImage"
                    type="url"
                    value={formData.coverImage}
                    onChange={handleChange}
                    placeholder="https://example.com/image.jpg"
                    className="h-9"
                  />
                </div>
              </div>

              <p className="text-[11px] text-muted-foreground mt-1">
                * Required fields. Default placeholder if cover URL is empty.
              </p>

              {/* Error Message */}
              {error && (
                <Alert variant="destructive" className="py-2 px-3">
                  <AlertDescription className="text-xs">
                    {error}
                  </AlertDescription>
                </Alert>
              )}

              {/* Submit Button */}
              <div className="pt-2">
                <Button
                  type="submit"
                  className="w-full"
                  disabled={loading}
                  size="default"
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
