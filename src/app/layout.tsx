import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Eliana Solar & Boreholes | Solar Energy & Water Solutions in Zimbabwe",
  description: "Reliable solar installations, borehole drilling, and water infrastructure solutions for homes, farms, schools, and communities across Zimbabwe.",
  keywords: "solar energy, borehole drilling, water solutions, Zimbabwe, solar installation, renewable energy",
  openGraph: {
    title: "Eliana Solar & Boreholes",
    description: "Premium solar energy and water solutions across Zimbabwe",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}