import "./globals.css";
import Header from "@/components/Sections/Header";
import Footer from "@/components/Sections/Footer";
import { JetBrains_Mono, Inter, Cookie } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-inter",
});

export const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-jetbrains",
});

export const cookie = Cookie({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-cookie",
});


const metadata = {
  title: "Atanu Hazra",
  description: "A passionate full-satck developer",
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
