import { Montserrat, Work_Sans } from 'next/font/google';
import '@/styles/globals.css';

const montserrat = Montserrat({ subsets: ['latin'], weight: ['400', '700'] })
const workSans = Work_Sans({ subsets: ['latin'], weight: ['400', '500', '700'] })

export const metadata = {
  title: "Belle Studio by Cristina Lăcău",
  description: "Micropigmentare Pro este un concept creat de Belle Studio by Cristina Lăcău, care îmbină experiența, creativitatea și tehnologia modernă pentru a oferi servicii de înfrumusețare premium. Fie că ești în căutarea sprâncenelor perfecte, unui look de machiaj profesionist sau dorești să înveți secretele acestei meserii, suntem aici pentru tine.",
}

export default function RootLayout({ children }) {
    return (
        <html lang="ro" className={`${workSans.className}`}>
        <head>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <meta charSet="UTF-8"/>
            <meta property="og:title" content={metadata.title}/>
            <meta property="og:description" content={metadata.description}/>
            <meta property="og:image" content="https://micropigmentarepro.vercel.app/images/home.jpg/images/home.jpg"/>
            <meta property="og:url" content="https://micropigmentarepro.vercel.app"/>
            <meta property="og:type" content="website"/>
            <meta name="twitter:card" content="summary_large_image"/>
            <meta name="twitter:title" content={metadata.title}/>
            <meta name="twitter:description" content={metadata.description}/>
            <meta name="twitter:image" content="https://micropigmentarepro.vercel.app/images/home.jpg"/>
            <meta name="robots" content="index, follow"/>
        </head>
        <body className={workSans.className}>
            {children}
        </body>
        </html>
    );
}