import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "./components/Global/Header";
import Footer from "./components/Global/Footer";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400","500","600","700","800"],
  variable: "--font-roboto", 
});

export const metadata = {
  title: "OIA Properties",
  description: "Your trusted partner for a spotless home",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
