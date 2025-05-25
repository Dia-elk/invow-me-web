import React from 'react';
import UnderLogoTitle from "@/app/components/UnderLogoTitle";
import FeedbackSection from "@/app/components/sections/FeedbackSection";
import FaqSection from "@/app/components/sections/FaqSection";
import FeaturesSection from "@/app/components/sections/FeaturesSection";
import {Metadata} from "next";
export const metadata:Metadata = {
    title: "Fonctionnalités de facturation freelance | InvowMe",
    description: "Découvrez les fonctionnalités d’InvowMe : création de devis, factures, envoi par email, suivi des paiements et livraison digitale.",
    keywords: ["fonctionnalités facturation", "suivi paiement freelance", "devis en ligne maroc", "livraison digitale", "invowme"],
    openGraph: {
        title: "Découvrez ce qu’InvowMe peut faire pour vous",
        description: "Toutes les fonctionnalités qu’il vous faut pour facturer sans stress.",
        url: "https://invow.me/fonctionnalites",
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

const Page = () => {
    return (
        <div>
            <UnderLogoTitle title={'Fonctionnalités'}/>
            <FeaturesSection/>
            <FaqSection/>
            <FeedbackSection/>
        </div>
    );
};

export default Page;