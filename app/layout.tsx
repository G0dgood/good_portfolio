import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import BottomNavigation from "@/components/BottomNavigation";
import Header from "@/components/Header";
import SideNav from "@/components/SideNav";



const ibm = IBM_Plex_Sans({ weight: ["100", "200", "300", "400", "500", "600", "700"], subsets: ["latin"] });


export const metadata: Metadata = {
  title: "Okoro Godwin Chinedu",
  description: "Portfolio showing my latest projects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body className={ibm.className}>
        <div id="page-wrapper">
          <Header />
          <SideNav />
          <BottomNavigation />
          <main>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
