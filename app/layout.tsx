import "./globals.css";
import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import Navbar from "@/components/navbar/Navbar";

const raleway = Raleway({ subsets: ["latin"], weight: "600" });

export const metadata: Metadata = {
  title: "Lorem Travel Agent",
  description: "An example page created by Malin Grafton",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={raleway.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
