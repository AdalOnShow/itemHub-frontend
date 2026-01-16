import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import BookCard from "@/components/BookCard";
import AnimatedHeroBackground from "@/components/AnimatedHeroBackground";

/**
 * Landing Page - 7 sections with modern design
 */
export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Section 1: Hero */}
      <section className="relative py-16 px-4 overflow-hidden">
        {/* Animated Background with Mouse Interaction */}
        <AnimatedHeroBackground />

        <div className="max-w-4xl mx-auto text-center relative z-10">
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
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-3">
              How It Works
            </h2>
            <p className="text-sm text-muted-foreground">
              Get started in three simple steps
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="relative flex flex-col items-center text-center">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground font-semibold text-lg">
                1
              </div>
              <h3 className="text-base font-semibold mb-2">Browse Books</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Explore our collection of books. No account needed to view the catalog.
              </p>
            </div>
            
            {/* Step 2 */}
            <div className="relative flex flex-col items-center text-center">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground font-semibold text-lg">
                2
              </div>
              <h3 className="text-base font-semibold mb-2">View Details</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Click any book to see complete information and descriptions.
              </p>
            </div>
            
            {/* Step 3 */}
            <div className="relative flex flex-col items-center text-center">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground font-semibold text-lg">
                3
              </div>
              <h3 className="text-base font-semibold mb-2">Add Books</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Login to contribute and add new books to the collection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Benefits */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4">
                Why Choose ItemHub?
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed mb-6">
                Built for book lovers and collectors, ItemHub provides a 
                streamlined experience for managing your digital library. 
                Whether you&apos;re browsing or building your collection, we&apos;ve 
                made it simple and enjoyable.
              </p>
              <Button variant="outline" size="default" asChild>
                <Link href="/books">Explore Now</Link>
              </Button>
            </div>

            {/* Right: Benefits List */}
            <div className="space-y-3">
              <Card className="border-border/50">
                <CardContent className="p-4 flex items-start gap-3">
                  <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    ✓
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm mb-1">Intuitive Interface</h3>
                    <p className="text-sm text-muted-foreground">
                      Clean design that&apos;s easy to navigate for everyone
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border/50">
                <CardContent className="p-4 flex items-start gap-3">
                  <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    ✓
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm mb-1">Secure & Protected</h3>
                    <p className="text-sm text-muted-foreground">
                      Authentication system keeps your data safe
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border/50">
                <CardContent className="p-4 flex items-start gap-3">
                  <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    ✓
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm mb-1">Fast & Responsive</h3>
                    <p className="text-sm text-muted-foreground">
                      Built with modern tech for optimal performance
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Book Preview */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-3">
              Featured Books
            </h2>
            <p className="text-sm text-muted-foreground">
              Explore our curated collection
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <BookCard
              book={{
                id: 1,
                title: "The Great Gatsby",
                author: "F. Scott Fitzgerald",
                description: "A classic American novel set in the Jazz Age, exploring themes of decadence, idealism, and social upheaval.",
                price: 12.99,
                coverImage: "https://covers.openlibrary.org/b/id/7883743-L.jpg",
              }}
            />
            <BookCard
              book={{
                id: 2,
                title: "To Kill a Mockingbird",
                author: "Harper Lee",
                description: "A gripping tale of racial injustice and childhood innocence in the Deep South during the 1930s.",
                price: 14.99,
                coverImage: "https://covers.openlibrary.org/b/id/8228691-L.jpg",
              }}
            />
            <BookCard
              book={{
                id: 3,
                title: "1984",
                author: "George Orwell",
                description: "A dystopian social science fiction novel exploring themes of totalitarianism and surveillance.",
                price: 13.99,
                coverImage: "https://covers.openlibrary.org/b/id/7222246-L.jpg",
              }}
            />
            <BookCard
              book={{
                id: 4,
                title: "Pride and Prejudice",
                author: "Jane Austen",
                description: "A romantic novel of manners that critiques the British landed gentry at the end of the 18th century.",
                price: 11.99,
                coverImage: "https://covers.openlibrary.org/b/id/8529558-L.jpg",
              }}
            />
          </div>

          <div className="mt-8 text-center">
            <Button variant="outline" size="default" asChild>
              <Link href="/books">View All Books</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Section 6: Testimonials */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-3">
              What Our Users Say
            </h2>
            <p className="text-sm text-muted-foreground">
              Trusted by book lovers everywhere
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-border/50">
              <CardContent className="p-6">
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  &quot;ItemHub makes organizing my book collection so easy. 
                  The interface is clean and intuitive.&quot;
                </p>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold">
                    S
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Sarah Chen</p>
                    <p className="text-xs text-muted-foreground">Book Collector</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50">
              <CardContent className="p-6">
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  &quot;I love how simple it is to browse and add new books. 
                  Perfect for managing my reading list.&quot;
                </p>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold">
                    M
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Michael Torres</p>
                    <p className="text-xs text-muted-foreground">Avid Reader</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50">
              <CardContent className="p-6">
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  &quot;A well-designed platform that does exactly what it promises. 
                  Highly recommend!&quot;
                </p>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold">
                    E
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Emily Parker</p>
                    <p className="text-xs text-muted-foreground">Librarian</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Section 7: Call to Action */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Start Building Your Library Today
          </h2>
          <p className="text-base text-muted-foreground mb-8 max-w-xl mx-auto">
            Join our community of book lovers and create your personalized collection
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <Button size="lg" asChild>
              <Link href="/books">Browse Books</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/login">Get Started</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
