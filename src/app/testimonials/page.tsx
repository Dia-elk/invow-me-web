import React from 'react';
import UnderLogoTitle from "@/app/components/UnderLogoTitle";
import FeedbackSection from "@/app/components/sections/FeedbackSection";
import {Metadata} from "next";


export const metadata: Metadata = {
    title: "Ce que nos utilisateurs disent de nous | InvowMe",
    description: "Découvrez les avis et témoignages de freelances et d’agences marocaines qui utilisent InvowMe pour simplifier leur facturation.",
    keywords: [
        "avis invowme",
        "témoignages clients",
        "freelance maroc facturation",
        "expérience utilisateur invowme",
        "outil facturation maroc"
    ],
    openGraph: {
        title: "Témoignages utilisateurs – InvowMe",
        description: "Ils utilisent InvowMe au quotidien et partagent leur retour d'expérience. Voyez ce qu’ils en pensent.",
        url: "https://invow.me/testimonials",
        siteName: "InvowMe",
        images: [
            {
                url: "https://invow.me/logo.png",
                width: 1200,
                height: 630,
                alt: "Témoignages utilisateurs InvowMe",
            },
        ],
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Ils ont choisi InvowMe",
        description: "Découvrez ce que nos utilisateurs disent d’InvowMe. Freelances, agences, consultants : ils témoignent.",
        images: ["https://invow.me/logo.png"],
    },
};

const Page = () => {
    return (
        <div>
            <UnderLogoTitle title={'Testimonials'}/>
            <FeedbackSection/>
        </div>
    );
};

export default Page;