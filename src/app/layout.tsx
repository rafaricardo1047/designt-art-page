import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Arkansas' Leading Web Design Agency | Elevate Digital Designs | Website Design Agency Arkansas",
  description: "Elevate Digital Designs is Arkansas' leading Website Design, Branding, and Marketing Agency. We believe in hard work and building lasting relationships. Website Design Arkansas and Marketing Harrison Arkansas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable}`}>
      <ClientBody>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </ClientBody>
    </html>
  );
}
