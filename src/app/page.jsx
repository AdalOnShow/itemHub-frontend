import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

/**
 * Landing Page - 7 sections with modern design
 */
export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Section 1: Hero */}
      <section className="py-20 px-4 text-center bg-linear-to-b from-muted/50 to-background">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-4 tracking-tight">ItemHub</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Book Listing & Management Platform
          </p>
          <Button size="lg" asChild>
            <Link href="/books">Browse Books</Link>
          </Button>
        </div>
      </section>

      {/* Section 2: Features */}
      <section className="py-16 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Features</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Browse Catalog</CardTitle>
                <CardDescription>
                  Explore our comprehensive book collection
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Detailed Information</CardTitle>
                <CardDescription>
                  View complete book details and descriptions
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Add New Books</CardTitle>
                <CardDescription>
                  Authenticated users can contribute to the catalog
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Section 3: How It Works */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">How It Works</h2>
          <p className="text-lg text-muted-foreground">
            Simple book management system with secure authentication. Browse
            books as a guest or login to add your own.
          </p>
        </div>
      </section>

      {/* Section 4: Benefits */}
      <section className="py-16 px-4 bg-background">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Benefits</h2>
          <Card>
            <CardContent className="pt-6">
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Easy to use with clean, intuitive interface</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Secure authentication for protected actions</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Fast and responsive design</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Section 5: Testimonials */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Testimonials</h2>
          <Card>
            <CardContent className="pt-6">
              <p className="text-lg italic text-muted-foreground text-center">
                &quot;Great platform for managing books!&quot;
              </p>
              <p className="text-sm text-muted-foreground text-center mt-2">
                - User
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Section 6: Call to Action */}
      <section className="py-16 px-4 bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Get Started</h2>
          <p className="text-muted-foreground mb-6">
            Login to start adding books to the catalog
          </p>
          <Button size="lg" asChild>
            <Link href="/login">Login</Link>
          </Button>
        </div>
      </section>

      {/* Section 7: Footer Info */}
      <section className="py-8 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm text-muted-foreground">
            Built with Next.js and shadcn/ui
          </p>
        </div>
      </section>
    </div>
  );
}
