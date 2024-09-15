import "./globals.css";
import React from "react";
import type { Metadata } from "next";
import './globals.css';

import localFont from 'next/font/local';
import {ChakraProvider} from "@chakra-ui/react";
import { ConvexClientProvider } from "./ConvexClientProvider";
// Causing havoc >:D

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});

const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <React.StrictMode>
          <body className={`${geistSans.variable} ${geistMono.variable}`}>
          <ConvexClientProvider>{children}</ConvexClientProvider>
                </body>
            </React.StrictMode>
        </html>
    );
}
