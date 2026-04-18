import type { Metadata } from "next";
import { Inter, Onest } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const onest = Onest({
  subsets: ["latin"],
  variable: "--font-onest",
});

export const metadata: Metadata = {
  title: "Litehouse | B2B Outbound That Actually Works",
  description:
    "Litehouse builds and runs signal-based cold email systems that fill your pipeline with qualified leads. No SDRs, no guesswork.",
  openGraph: {
    title: "Litehouse | B2B Outbound That Actually Works",
    description:
      "Signal-based cold email systems that fill your pipeline with qualified leads.",
    url: "https://litehouse.so",
    siteName: "Litehouse",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${onest.variable} scroll-smooth`}>
      <body className="min-h-screen bg-[#f9f7f4] text-[#0a2540] font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
