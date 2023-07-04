import "./globals.css";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: {
    default: "Agendamento Online",
    template: "%s | Agendamento Online",
  },
};

const inter = Inter({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={inter.className}>
      <body>
        <Header />
        <main className="mt-[72px]">{children}</main>
      </body>
    </html>
  );
}
