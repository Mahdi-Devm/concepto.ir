import type { Metadata } from "next";
import "../styles/globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import ProgressBar from "@/features/ProgressBar/ProgressBar";
import QueryProvider from "@/lib/query-provider";

export const metadata: Metadata = {
  title: "کانسپتو",
  description: "معرفی استارتاپ‌ها و شرکت‌ها",
  manifest: "/manifest.json",
  themeColor: "#0f172a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" className="h-full">
      <body className="antialiased min-h-screen grid grid-rows-[auto_1fr_auto]">
        <ProgressBar />
        <Header />
        <main className="max-w-[1224px] mx-auto w-full">
          <QueryProvider>{children}</QueryProvider>
        </main>
        <Footer />
      </body>
    </html>
  );
}
