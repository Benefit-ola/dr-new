import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dr. Adekunle Misbau — General Practitioner",

description: "Dr. Adekunle Misbau is a General Practitioner based in Lagos, Nigeria, specialising in infectious disease control, mental health counseling and preventive medicine.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
