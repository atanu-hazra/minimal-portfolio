import "./globals.css";
import Header from "@/components/Sections/Header";
import Footer from "@/components/Sections/Footer";
import { inter } from "@/lib/fonts";


export const metadata = {
  title: "Atanu Hazra | Full-Stack Developer",
  description: "Portfolio of Atanu Hazra, a full-stack developer passionate about creating scalable, user-friendly web applications using Next.js, React, Node.js, Express, and Django.",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <div className="my-2 lg:mx-[10%] text-center">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
