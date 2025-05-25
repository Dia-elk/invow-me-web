import type {Metadata} from "next";
import "./globals.css";
import {Analytics} from "@vercel/analytics/react"
import Lenis from "@/app/components/Lenis";
import NavBar from "@/app/components/NavBar";
import Footer from "@/app/components/Footer";
import localFont from 'next/font/local'



const novelinFont = localFont({
    src:[
        {
            path: '../fonts/Novelin-Light.woff2',
            weight: '300',
            style: 'normal',
        },
        {
            path: '../fonts/Novelin-Regular.woff2',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../fonts/Novelin-Bold.woff2',
            weight: '700',
            style: 'normal',
        },
        {
            path: '../fonts/Novelin-Black.woff2',
            weight: '900',
            style: 'normal',
        },
    ]
})

export const metadata: Metadata = {
    title: "Solution de facturation pour freelances et agences au Maroc 🇲🇦 | InvowMe",
    description: "Créez et envoyez vos factures en ligne facilement avec InvowMe. Pensé pour les freelances et agences marocains : rapide, conforme, et sans prise de tête.",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body
            className={`${novelinFont.className} font-bold  antialiased overflow-hidden bg-[#052d32]`}
        >
        <Analytics/>

            <NavBar/>
            <Lenis>
                {children}
            </Lenis>

        <Footer/>
        </body>
        </html>
    );
}
