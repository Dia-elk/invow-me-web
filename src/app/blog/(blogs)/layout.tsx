"use client"
import React from 'react';
import UnderLogoTitle from "@/app/components/UnderLogoTitle";
import BlogShare from "@/app/components/BlogShare";
import {usePathname} from "next/navigation";
import {getBlogShareData} from "@/utils/getBlogShareData";

const Layout = ({children}: { children: React.ReactNode }) => {
    const pathName = usePathname()
    const blogShareData = getBlogShareData(pathName);
    return (
        <>
            <UnderLogoTitle title={'Blog'}/>
            <main className={'py-20 max-w-3xl  mx-auto px-4'}>
                <article>
                    {children}
                </article>
                <div className={"bg-primary w-full rounded-xl mt-20 p-8"}>
                    <h3 className={'text-xl font-black'}>💼 Prêt à facturer comme un pro ?</h3>
                    <p className={'text-sm pt-4'}>InvowMe est la solution 100% marocaine pensée pour les freelances,
                        auto-entrepreneurs et petites entreprises qui souhaitent créer des factures conformes, envoyer
                        des devis, suivre leurs paiements et se faire payer plus rapidement — le tout sans se compliquer
                        la vie.
                    </p>
                    <div className={'mt-10'}>
                        <a href={"https://app.invow.me"} target={"_blank"}  className={'w-fit bg-secondary font-black px-8 py-4 text-xs select-none cursor-pointer rounded-lg text-background hover:bg-primary hover:text-[#052d32] transition-all duration-300'}>
                            🚀 Créer mon compte gratuitement
                        </a>
                    </div>
                </div>
                {
                    blogShareData &&
                    <div className={'flex flex-col items-center justify-center mt-20'}>
                        <p className={'font-black'}>Vous avez aimé cet article ? Partagez-le :</p>
                        <BlogShare url={blogShareData.url} title={blogShareData.title}/>
                    </div>
                }
            </main>
        </>
    );
};

export default Layout;