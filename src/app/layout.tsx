import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.scss";
import Header from "@/components/header";
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "DevMotors - Sua oficina Especializada",
  description: "Oficina em Brasília",
  // Otimizando metatags
  keywords: ['oficina', 'oficina de carros', 'carros', 'manutenção', 'manutenção de carros'],
  openGraph: {
    title: "DevMotors - Sua oficina Especializada",
    images: [`${process.env.NEXT_PUBLIC_URL}/logo.jpg`]
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true
    }
  }
    
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Header/>
        {children}

        <p style={{textAlign: 'center', margin: '54px 0 22px 0'}}>Gabriel Lemes {new Date().getFullYear()} | © Todos os direitos reservados </p>
      </body>
    </html>
  );
}
