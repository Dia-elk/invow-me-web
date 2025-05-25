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

export const metadata:Metadata = {
    title: "Solution de facturation pour freelances et agences au Maroc 🇲🇦 | InvowMe",
    description: "Créez et envoyez vos factures en ligne facilement avec InvowMe. Pensé pour les freelances et agences marocains : rapide, conforme, et sans prise de tête.",
    keywords: ["facturation freelance Maroc", "devis en ligne", "logiciel facture maroc", "InvowMe", "freelance maroc facture"],
    openGraph: {
        title: "InvowMe – Facturation simple et efficace",
        description: "Générez vos devis et factures en ligne, suivez vos paiements, et encaissez en toute simplicité.",
        url: "https://invow.me",
        siteName: "InvowMe",
        images: [
            {
                url: "https://invow.me/logo.png",
                width: 1200,
                height: 630,
                alt: "Logo InvowMe",
            },
        ],
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "InvowMe – Facturation simple pour freelances marocains",
        description: "Une solution pensée pour les freelances et agences qui veulent gagner du temps et de la crédibilité.",
        images: ["https://invow.me/logo.png"],
    },
};



export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body
            className={`${novelinFont.className} font-bold  antialiased bg-background`}
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
