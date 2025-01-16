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
  title: "Micropigmentare Pro - Belle Studio",
  description: "Servicii profesionale de micropigmentare și cursuri acreditate.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="ro">
        <head>
            <title>{metadata.title}</title>
            <meta name="description" content={metadata.description} />
        </head>
        <body>
        {children}
        </body>
        </html>
    );
}

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body
//         className={`${geistSans.variable} ${geistMono.variable} antialiased`}
//       >
//         {children}
//       </body>
//     </html>
//   );
// }
