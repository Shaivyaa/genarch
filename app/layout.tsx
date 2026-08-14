import type { Metadata } from "next";
import { Montserrat, Poppins } from "next/font/google";

import "./globals.css";

// const poppins = Crimson_Text({
//   weight: ["400", "600", "700"],
//   style: ["normal", "italic"],
//   subsets: ["latin"],
//   variable: "--font-poppins",
// });

const poppins = Poppins({
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-poppins",
});



export const metadata: Metadata = {
  title: "Genarch",
  description: "Genarch",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>{children}</body>
    </html>
  );
}
