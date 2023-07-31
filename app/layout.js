import { Footer, Navbar } from "@/components";
import "./globals.css";
import { Poppins } from "next/font/google";

const pop = Poppins({ subsets: ["latin"], weight: ["400", "500", "600"] });

export const metadata = {
  title: "Genshin Character",
  description: "First project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
