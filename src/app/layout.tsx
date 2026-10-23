import type { Metadata } from "next";
import "./globals.css";



export const metadata: Metadata = {
  title: "IP Address Tracker",
  description: "A fast and responsive IP Address Tracker application",
  keywords: ["IP Address Tracker", "IP Location", "Next.js", "TypeScript", "Tailwind CSS", "Web Development "],
  authors: [{ name: "Adem" }],
  openGraph: {
    title: "IP Address Tracker",
    description: "Search and locate any IP address or domain quickly with real-time map integration.",
    type: "website",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={` h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
