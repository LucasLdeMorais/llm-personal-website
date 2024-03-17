import type { Metadata } from "next";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import ThemedLayout from "./components/ThemedLayout";
import "./styles/globals.css";
import Body from "./body";

export const metadata: Metadata = {
  title: "Lucas Lopes: Fullstack developer",
  description: "Welcome to my personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <ThemedLayout>
      <Body>
        {children}
      </Body>
    </ThemedLayout>
  );
}
