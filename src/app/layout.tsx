
import "./globals.css";
import {Analytics} from "@vercel/analytics/react"
import Lenis from "@/app/components/Lenis";
import NavBar from "@/app/components/NavBar";
import Footer from "@/app/components/Footer";
import localFont from 'next/font/local'
import Script from "next/script";



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





export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <head>
            <Script
                id="tawk-to"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
              var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
              (function(){
                var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
                s1.async=true;
                s1.src='https://embed.tawk.to/683a045961be34190fe12ab5/1isha201g';
                s1.charset='UTF-8';
                s1.setAttribute('crossorigin','*');
                s0.parentNode.insertBefore(s1,s0);
              })();
            `
                }}
            />
        </head>
        <body
            className={`${novelinFont.className} font-bold  antialiased`}
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
