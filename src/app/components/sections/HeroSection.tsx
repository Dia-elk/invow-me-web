import React from 'react';
import Link from "next/link";

const HeroSection = () => {
    return (
        <>
            <div className={'mt-40 max-w-5xl mx-auto px-8'}>
                <h3 className={'text-xs font-normal text-secondary'}>Une plateforme simple, rapide et 100% en ligne pour gérer vos devis et factures au Maroc.</h3>
                <h1 className={'text-4xl font-black mt-4'}>Fini les galères de facturation. Gagnez du temps, encaissez plus vite.</h1>
                <p className={'mt-4 opacity-70 text-xs leading-6'}>InvowMe est la solution marocaine de facturation en ligne, pensée pour simplifier la vie des freelances et des agences. Que vous soyez développeur, designer, consultant ou dirigeant d’agence, notre outil vous permet de créer des devis, envoyer des factures professionnelles, suivre vos paiements et gérer vos clients — rapidement, efficacement et en toute conformité avec les normes locales. Tout se fait en ligne, sans stress, sans Excel, et sans perte de temps.</p>
                <div className={'mt-8 flex flex-col md:flex-row md:items-center gap-4'}>
                    <a href={"https://app.invow.me"} target={"_blank"}  className={' w-fit bg-secondary font-black px-8 py-4 text-xs select-none cursor-pointer rounded-lg text-background hover:bg-primary hover:text-[#052d32] transition-all duration-300'}>
                        Inscription gratuite
                    </a>
                    <Link href={'/fonctionnalites'} className={'w-fit border border-secondary font-black px-8 py-4 text-xs select-none cursor-pointer rounded-lg text-secondary hover:border-primary hover:text-primary transition-all duration-300'}>
                        Découvrir les fonctionnalités
                    </Link>
                </div>
            </div>
        </>
    );
};

export default HeroSection;