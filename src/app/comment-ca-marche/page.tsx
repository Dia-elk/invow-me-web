import React from 'react';
import UnderLogoTitle from "@/app/components/UnderLogoTitle";

import HowItWorksSection from "@/app/components/sections/HowItWorksSection";
import FaqSection from "@/app/components/sections/FaqSection";
import FeedbackSection from "@/app/components/sections/FeedbackSection";
import {Metadata} from "next";

export const metadata:Metadata = {
    title: "Comment fonctionne InvowMe ?",
    description: "Créez un compte, éditez vos factures, envoyez-les, et encaissez votre argent. C’est aussi simple que ça.",
    keywords: ["comment ça marche invowme", "processus facturation", "inscription factures freelance", "workflow invowme"],
    openGraph: {
        title: "Le fonctionnement d’InvowMe en 4 étapes",
        description: "Inscription, création, envoi, paiement. Découvrez le flux simplifié d’InvowMe.",
        url: "https://invow.me/comment-ca-marche",
        siteName: "InvowMe",
        images: [
            {
                url: "https://invow.me/logo.png",
                width: 1200,
                height: 630,
                alt: "Comment ça marche InvowMe",
            },
        ],
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Comment fonctionne InvowMe ?",
        description: "Découvrez comment facturer plus vite et mieux grâce à notre outil tout-en-un.",
        images: ["https://invow.me/logo.png"],
    },
};

const Page = () => {
    return (
        <div>
            <UnderLogoTitle title={'Comment ça marche'}/>
            <HowItWorksSection/>
            <FaqSection/>
            <FeedbackSection/>
        </div>
    );
};

export default Page;