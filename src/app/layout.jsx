import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "ItemHub - Book Management",
  description: "Simple book listing and management application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
