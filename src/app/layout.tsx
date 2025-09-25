import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Glasscape",
  description: "A microsite for Glasscape",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
