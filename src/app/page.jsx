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
      <section className="py-12 px-4 text-center bg-muted/30">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-3 tracking-tight">ItemHub</h1>
          <p className="text-lg text-muted-foreground mb-6">
            Book Listing & Management Platform
          </p>
          <Button size="default" asChild>
            <Link href="/books">Browse Books</Link>
          </Button>
        </div>
      </section>

      {/* Section 2: Features */}
      <section className="py-10 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl font-bold mb-6 text-center">Features</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="shadow-sm">
              <CardHeader className="p-4">
                <CardTitle className="text-lg">Browse Catalog</CardTitle>
                <CardDescription className="text-sm">
                  Explore our comprehensive book collection
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="shadow-sm">
              <CardHeader className="p-4">
                <CardTitle className="text-lg">Detailed Info</CardTitle>
                <CardDescription className="text-sm">
                  View complete book details and descriptions
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="shadow-sm">
              <CardHeader className="p-4">
                <CardTitle className="text-lg">Add New Books</CardTitle>
                <CardDescription className="text-sm">
                  Authenticated users can contribute to the catalog
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Section 3: How It Works */}
      <section className="py-10 px-4 bg-muted/20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-xl font-bold mb-3">How It Works</h2>
          <p className="text-muted-foreground text-base">
            Simple book management system with secure authentication. Browse
            books as a guest or login to add your own.
          </p>
        </div>
      </section>

      {/* Section 4: Benefits */}
      <section className="py-10 px-4 bg-background">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl font-bold mb-6 text-center">Benefits</h2>
          <Card className="shadow-sm">
            <CardContent className="p-4">
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li className="flex items-start">
                  <span className="mr-2 text-primary">✓</span>
                  <span>Easy to use with clean, intuitive interface</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary">✓</span>
                  <span>Secure authentication for protected actions</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary">✓</span>
                  <span>Fast and responsive design</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Section 5: Testimonials */}
      <section className="py-10 px-4 bg-muted/20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-xl font-bold mb-6">Testimonials</h2>
          <Card className="shadow-sm max-w-lg mx-auto">
            <CardContent className="p-4">
              <p className="italic text-muted-foreground text-sm">
                &quot;Great platform for managing books!&quot;
              </p>
              <p className="text-xs text-muted-foreground mt-2 font-medium">
                - Happy User
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Section 6: Call to Action */}
      <section className="py-10 px-4 bg-background">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-3">Get Started</h2>
          <p className="text-muted-foreground mb-5 text-sm">
            Login to start adding books to the catalog
          </p>
          <Button size="default" asChild>
            <Link href="/login">Login Now</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
