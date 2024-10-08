import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { cn } from "@/lib/utils";


const inter = Inter({ subsets: ["latin"] });
const fontSans = Plus_Jakarta_Sans({ subsets: ["latin"], weight:['300','400','500','600','700'], variable:'--font-sans'});


export const metadata: Metadata = {
  title: "Hi Tech Copier Solutions",
  description: "Hi Tech Copier Solutions offers top-quality Canon, Xerox, and Kyocera copier sales, services, and rentals in Hyderabad. Best prices guaranteed.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn('min-h-screen bg-dark-300 font-sans antialiased',fontSans.variable)}>
      <ThemeProvider
            attribute="class"
            defaultTheme="dark"
          > 
            {children}
          </ThemeProvider>
        </body>
    </html>
  );
}
