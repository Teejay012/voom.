import localFont from "next/font/local";
import "./globals.css";
import Nav from "./componentss/nav/Nav";

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

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <main className="max-w-[390px] border-2 border-red-500 h-full p-3 relative mb-[100px]">
          {children}
        </main>
        <Nav />
      </body>
    </html>
  );
}
