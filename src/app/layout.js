import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "RGV911 - Rio Grande Valley 9-1-1",
  description: "Rio Grande Valley 9-1-1 Emergency Communications District",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <style dangerouslySetInnerHTML={{ __html: `
          @media (max-width: 482px) {
            html, body {
              margin: 0 !important;
              padding: 0 !important;
            }
            .topNavbar {
              display: none !important;
              height: 0 !important;
              padding: 0 !important;
              margin: 0 !important;
              overflow: hidden !important;
              position: absolute !important;
              visibility: hidden !important;
            }
            .navbar {
              position: fixed !important;
              top: 0 !important;
              left: 0 !important;
              right: 0 !important;
              margin-top: 0 !important;
              padding-top: 0 !important;
            }
          }
        `}} />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`} style={{ margin: 0, padding: 0 }}>
        {children}
      </body>
    </html>
  );
}
