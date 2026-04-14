import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Gastro Portal — Empleo en Hostelería",
    template: "%s | Gastro Portal",
  },
  description:
    "El portal de empleo especializado en hostelería. Conectamos restaurantes con los mejores profesionales del sector.",
  keywords: ["empleo hostelería", "trabajo restaurante", "camarero", "cocina", "chef"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased">{children}</body>
    </html>
  );
}
