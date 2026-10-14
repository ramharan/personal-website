import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "Hariharan Ramachandran | Finance & Investment Advisory",
  description:
    "Three decades of international experience in fund management, portfolio construction, capital markets and institutional investment advisory.",
  icons: {
    icon: [{ url: "/hariharan-icon.png", type: "image/png", sizes: "any" }],
  },
  openGraph: {
    title: "Hariharan Ramachandran",
    description: "Experience across markets. Perspective beyond borders.",
    type: "website",
  },
  robots: { index: true, follow: true },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
