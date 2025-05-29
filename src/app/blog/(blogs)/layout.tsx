import React from 'react';
import UnderLogoTitle from "@/app/components/UnderLogoTitle";
import Link from "next/link";

const Layout = ({children}: { children: React.ReactNode }) => {
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
            </main>
        </>
    );
};

export default Layout;