import { Urbanist, Space_Mono } from "next/font/google"; // [!code highlight]
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

const urbanist = Urbanist({ // [!code highlight]
  subsets: ["latin"],
  variable: "--font-urbanist",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
});

const spaceMono = Space_Mono({ // [!code highlight]
  subsets: ["latin"],
  variable: "--font-space-mono",
  weight: ["400", "700"],
});

export const metadata = {
  title: "Genovation | Sovereign Enterprise Intelligence",
  description: "Designed for organisations where security, compliance, and explainability are non-negotiable.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${urbanist.variable} ${spaceMono.variable} antialiased font-sans`} // [!code highlight]
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
