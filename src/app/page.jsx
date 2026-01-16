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
      <section className="relative py-16 px-4 overflow-hidden">
        <div className="max-w-4xl mx-auto text-center">
          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            Your Digital{" "}
            <span className="text-primary">Book Collection</span>
          </h1>
          
          {/* Supporting Text */}
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Discover, manage, and organize your favorite books in one place. 
            Start building your personal library today.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <Button size="default" asChild>
              <Link href="/books">Browse Books</Link>
            </Button>
            <Button variant="outline" size="default" asChild>
              <Link href="/add-book">Add Book</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Section 2: Features */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-3">
              Everything You Need
            </h2>
            <p className="text-sm text-muted-foreground max-w-xl mx-auto">
              A complete platform for managing your book collection with ease
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card className="border-border/50 hover:border-border transition-colors">
              <CardHeader className="p-5">
                <CardTitle className="text-base font-semibold mb-2">
                  📚 Browse Catalog
                </CardTitle>
                <CardDescription className="text-sm leading-relaxed">
                  Explore a comprehensive collection of books with intuitive navigation
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="border-border/50 hover:border-border transition-colors">
              <CardHeader className="p-5">
                <CardTitle className="text-base font-semibold mb-2">
                  📖 Detailed Views
                </CardTitle>
                <CardDescription className="text-sm leading-relaxed">
                  Access complete book information including descriptions and metadata
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="border-border/50 hover:border-border transition-colors">
              <CardHeader className="p-5">
                <CardTitle className="text-base font-semibold mb-2">
                  ✏️ Easy Management
                </CardTitle>
                <CardDescription className="text-sm leading-relaxed">
                  Add and organize books seamlessly with a simple interface
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="border-border/50 hover:border-border transition-colors">
              <CardHeader className="p-5">
                <CardTitle className="text-base font-semibold mb-2">
                  🔒 Secure Access
                </CardTitle>
                <CardDescription className="text-sm leading-relaxed">
                  Protected authentication system for managing your collection
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
