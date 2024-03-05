import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AGP-Tech",
  description: "Application de Gestion de Pressing - Technologie",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}