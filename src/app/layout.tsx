import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Emirates | Fly Better",
  description: "Book flights, manage your booking, check in online and more with Emirates. Fly Better with award-winning service.",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
