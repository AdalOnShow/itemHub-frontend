/**
 * Footer Component
 * Minimal footer with project name and year
 */
export default function Footer() {
  return (
    <footer className="border-t mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-6">
        <p className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} ItemHub. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
