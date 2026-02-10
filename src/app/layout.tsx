import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TuitionWala - Trusted Tuition & Home Tutors in Prayagraj",
  description: "Quality education with experienced teachers. School tuition and home tuition services across Prayagraj for CBSE, ICSE, and State Board students.",
  keywords: "tuition, home tutor, Prayagraj, Allahabad, CBSE, ICSE, coaching",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
