import type { Metadata } from "next";
import { Heebo } from "next/font/google";
import "./globals.css";

const heebo = Heebo({
  subsets: ["hebrew", "latin"],
  weight: ["400", "700", "900"],
  variable: "--font-heebo",
});

export const metadata: Metadata = {
  title: "T-Electric ꟾ טל נחמני",
  description: "טל חשמלאי מוסמך - עבודות חשמל מקצועיות במחירים הוגנים. זמין 24 שעות ביממה.",
  icons: {
    icon: "/icon.png",
  },
};

import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl">
      <body className={`${heebo.variable} font-heebo bg-background text-white antialiased`}>
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
