import { Irish_Grover } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";

const mainFont = Irish_Grover({
  weight: ["400"], 
  subsets:[],
})

export const metadata: Metadata = {
  title: "KOMBAT",
  description: "KOMBAT Game in Yasuo theme.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/Yasuo1.svg" />
      </head>
      <body
      className={`${mainFont.className} text-white overflow-y-hidden overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
