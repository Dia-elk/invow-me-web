import HeroSection from "@/app/components/sections/HeroSection";
import FeaturesSection from "@/app/components/sections/FeaturesSection";
import TrustedUsLogos from "@/app/components/sections/TrustedUsLogos";
import React from "react";
import PlansSection from "@/app/components/sections/PlansSection";
import FaqSection from "@/app/components/sections/FaqSection";
import HowItWorksSection from "@/app/components/sections/HowItWorksSection";
import FeedbackSection from "@/app/components/sections/FeedbackSection";
import {Metadata} from "next";

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
export default function Home() {
    return (
        <>
            <HeroSection/>
            <TrustedUsLogos/>
            <FeaturesSection/>
            <PlansSection/>
            <HowItWorksSection/>
            <FaqSection/>
            <FeedbackSection/>
        </>
    );
}
