import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google"
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { Navigation } from "../components/navigation";
import ReactQueryProvider from "@/service/ReactQueryProvider";
import { Analytics } from "@vercel/analytics/react";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Hadana: Your AI travel planner",
  description: "An AI-powered travel companion that crafts personalized travel plans based on your preferences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ReactQueryProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <Navigation />
            {children}
            {/* <FooterSection/> */}
            <Analytics />
          </ThemeProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
