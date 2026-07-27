import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "DWU | Soluções para Vendas e Serviços",
    template: "%s | DWU",
  },
  description:
    "CRM, força de vendas, atendimento omnichannel e gestão de serviços em campo conectados à rotina da sua empresa.",
  other: {
    "codex-preview": "development",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body className={poppins.variable}>{children}</body>
    </html>
  );
}
