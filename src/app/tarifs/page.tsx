import React from 'react';
import UnderLogoTitle from "@/app/components/UnderLogoTitle";
import PlansSection from "@/app/components/sections/PlansSection";
import FeaturesSection from "@/app/components/sections/FeaturesSection";
import FaqSection from "@/app/components/sections/FaqSection";
import FeedbackSection from "@/app/components/sections/FeedbackSection";
import {Metadata} from "next";

export const metadata:Metadata = {
    title: "Tarifs InvowMe – Gratuit, Petit Taf ou Giga Patron",
    description: "Choisissez un forfait adapté à votre activité freelance ou d'agence. Gratuit ou complet, vous êtes libre.",
    keywords: ["tarifs freelance maroc", "abonnement facturation", "invowme prix", "forfait invowme"],
    openGraph: {
        title: "Des prix clairs, sans surprise",
        description: "Découvrez les forfaits InvowMe : testez gratuitement ou passez à la vitesse supérieure.",
        url: "https://invow.me/tarifs",
        siteName: "InvowMe",
        images: [
            {
                url: "https://invow.me/logo.png",
                width: 1200,
                height: 630,
                alt: "Tarifs InvowMe",
            },
        ],
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Choisissez votre plan InvowMe",
        description: "Un plan pour chaque niveau d'activité : Gratos, Petit Taf ou Giga Patron.",
        images: ["https://invow.me/logo.png"],
    },
};

const Page = () => {
    return (
        <div>
            <UnderLogoTitle title={'Tarifs'}/>
            <PlansSection/>
            <FeaturesSection/>
            <FaqSection/>
            <FeedbackSection/>
        </div>
    );
};

export default Page;