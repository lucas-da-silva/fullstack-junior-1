import type { Metadata } from "next";
import { Oswald, Quattrocento } from "next/font/google";
import "./globals.css";

const oswald = Oswald({ subsets: ["latin"], variable: "--title-font" });
const quattrocento = Quattrocento({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Personal Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="">
      <body className={`${quattrocento.className} ${oswald.variable}`}>
        {children}
      </body>
    </html>
  );
}
