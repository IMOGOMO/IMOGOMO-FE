import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ReactQueryProvider from "@/src/provider/queryProvider";
import RecoilProvider from "@/src/provider/recoilProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Imogomo",
  description: "Form Service",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <RecoilProvider>
          <ReactQueryProvider>{children}</ReactQueryProvider>
        </RecoilProvider>
      </body>
    </html>
  );
}
