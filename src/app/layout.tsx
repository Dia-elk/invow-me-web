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
    title: "Fonctionnalités de facturation freelance | InvowMe",
    description: "Découvrez les fonctionnalités d’InvowMe : création de devis, factures, envoi par email, suivi des paiements et livraison digitale.",
    keywords: ["fonctionnalités facturation", "suivi paiement freelance", "devis en ligne maroc", "livraison digitale", "invowme"],
    openGraph: {
        title: "Découvrez ce qu’InvowMe peut faire pour vous",
        description: "Toutes les fonctionnalités qu’il vous faut pour facturer sans stress.",
        url: "https://invow.me/features",
        siteName: "InvowMe",
        images: [
            {
                url: "https://invow.me/logo.png",
                width: 1200,
                height: 630,
                alt: "Fonctionnalités InvowMe",
            },
        ],
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Fonctionnalités InvowMe",
        description: "Factures, devis, paiements, livrables… tout est inclus.",
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
