import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Providers } from "./providers";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap", // Ensures text is visible while the font loads
  variable: "--font-poppins", // Defines a CSS variable for the font
});

export const metadata: Metadata = {
  title: "Book Your Ticket",
  description: "QuickTix Ticket Booking WebApp",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${poppins.className}  antialiased bg-white dark:bg-gray-900 flex flex-col min-h-screen`}
      >
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
