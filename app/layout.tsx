import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sam Schmaedeka — Software Engineer & Data Engineer",
  description:
    "Self-taught software engineer specializing in data pipelines, backend systems, and full-stack development. Open to Software Engineer, Solutions Engineer, and Technical Account Manager roles.",
  metadataBase: new URL("https://samschmaedeka.com"),
  openGraph: {
    title: "Sam Schmaedeka — Software Engineer & Data Engineer",
    description:
      "Self-taught software engineer specializing in data pipelines, backend systems, and full-stack development. Open to SE, Solutions Engineer, and TAM roles. Based in Rochester, MN.",
    url: "https://samschmaedeka.com",
    siteName: "Sam Schmaedeka",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Sam Schmaedeka — Software Engineer & Data Engineer",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sam Schmaedeka — Software Engineer & Data Engineer",
    description:
      "Self-taught software engineer specializing in data pipelines, backend systems, and full-stack development.",
    images: ["/og-image.svg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
