import React from 'react';
import UnderLogoTitle from "@/app/components/UnderLogoTitle";
import BlogCard from "@/app/components/BlogCard";
import blogs from "@/data/blogs.json";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "Blog Facturation Maroc – Guides et Conseils pour Freelances | InvowMe",
    description: "Trouvez des conseils pratiques, modèles, et guides pour mieux facturer en tant que freelance ou auto-entrepreneur au Maroc avec InvowMe.",
    keywords: [
        "blog facturation maroc",
        "freelance maroc",
        "auto entrepreneur facture",
        "modèle facture maroc",
        "invowme blog"
    ],
    openGraph: {
        title: "Le Blog de la Facturation au Maroc – InvowMe",
        description: "Des articles utiles pour mieux gérer vos devis, factures, paiements et obligations fiscales en tant que freelance au Maroc.",
        url: "https://invow.me/blog",
        siteName: "InvowMe",
        images: [
            {
                url: "https://invow.me/logo.png",
                width: 1200,
                height: 630,
                alt: "Blog InvowMe",
            },
        ],
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Le blog de la facturation freelance au Maroc – InvowMe",
        description: "Boostez votre activité freelance avec nos guides sur la facturation, les devis, les paiements et plus.",
        images: ["https://invow.me/logo.png"],
    },
};

function shuffleArray(array: { slug: string; title: string; description: string; image: string; keywords: string[]; }[]) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

const Page = async () => {
    const shuffledBlogs = shuffleArray(blogs);
    return (
        <div>
            <UnderLogoTitle title={'Blog'}/>
            <div className={'py-40 max-w-5xl mx-auto px-4'}>
                <div className={'grid gap-40'}>
                    {shuffledBlogs.map((blog, index) => <BlogCard key={blog.slug} slug={blog.slug} title={blog.title}
                                                                  description={blog.description} image={blog.image}
                                                                  isReversed={index % 2 !== 0}/>)}
                </div>
            </div>
        </div>
    );
};

export default Page;