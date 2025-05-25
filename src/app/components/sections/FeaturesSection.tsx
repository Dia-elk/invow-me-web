import React from 'react';
import InvoiceIcon from "@/app/components/icons/InvoiceIcon";
import ClockIcon from "@/app/components/icons/ClockIcon";
import ShieldCheckIcon from "@/app/components/icons/ShieldCheckIcon";
import SendIcon from "@/app/components/icons/SendIcon";
import CloudDownloadIcon from "@/app/components/icons/CloudDownloadIcon";
import ChartBarIcon from "@/app/components/icons/ChartBarIcon";


const FeaturesSection = () => {
    return (
        <div className={'max-w-7xl mx-auto mt-40 px-8'}>
            <h3 className={'text-xs font-normal text-secondary'}>Tout ce qu’il vous faut pour facturer sans prise de
                tête</h3>
            <p className={'font-black'}>Des fonctionnalités simples et puissantes, pensées pour les freelances et
                agences au Maroc.</p>
            <div className="grid md:grid-cols-6 gap-4 md:auto-rows-[150px] mt-20">
                {/* Carré */}
                <div className="bg-secondary rounded-xl shadow-sm md:col-span-2 md:row-span-3 p-4 text-background">
                    <div className={'bg-background p-3 rounded-lg w-fit text-secondary'}>
                        <InvoiceIcon/>
                    </div>

                    <h3 className={'font-black mt-4 md:mt-20 text-xl'}>Devis & factures en 2 clics</h3>
                    <p className={'md:mt-8 text-sm leading-6'}>Générez vos devis et factures en quelques clics, avec un design soigné, vos propres mentions, et en toute conformité. Plus besoin de modèles Word ou Excel.</p>
                </div>

                {/* Large horizontal */}
                <div className="bg-primary rounded-xl shadow-sm md:col-span-4 p-4 text-background md:row-span-1">
                    <div className={'bg-background p-3 rounded-lg w-fit text-secondary'}>
                        <ClockIcon/>
                    </div>
                    <h3 className={'font-black mt-4 text-xl'}>Suivi des paiements</h3>
                    <p className={'text-sm'}>Voyez qui vous a payé, relancez ceux qui tardent.</p>
                </div>

                {/* Petit carré */}
                <div className="border border-secondary rounded-xl shadow-sm md:col-span-2 p-4 md:row-span-2">
                    <div className={'bg-secondary p-3 rounded-lg w-fit text-background'}>
                        <ShieldCheckIcon/>
                    </div>
                    <h3 className={'font-black mt-4 md:mt-20 text-xl text-secondary'}>Conforme au fisc marocain</h3>
                    <p className={'md:mt-4 text-sm'}>Structure légale respectée : mentions obligatoires, TTC, etc.</p>
                </div>

                {/* Grand vertical */}
                <div className="bg-secondary rounded-xl shadow-sm md:col-span-2 p-4 text-background md:row-span-2">
                    <div className={'bg-background p-3 rounded-lg w-fit text-secondary'}>
                        <SendIcon/>
                    </div>
                    <h3 className={'font-black mt-4 md:mt-20 text-xl'}>Envoi de factures par email</h3>
                    <p className={'md:mt-4 text-sm'}>Envoie direct, notification de lecture, aucune perte.</p>
                </div>

                {/* Rectangle horizontal */}
                <div className=" bg-primary rounded-xl shadow-sm md:col-span-4 p-4 text-background md:row-span-2">
                    <div className={'bg-background p-3 rounded-lg w-fit text-secondary'}>
                        <CloudDownloadIcon/>
                    </div>
                    <h3 className={'font-black mt-4 md:mt-20 text-xl'}>Livraison digitale intégrée</h3>
                    <p className={'md:mt-4 text-sm'}>Après validation du paiement, un espace sécurisé s’ouvre automatiquement dans la facture où votre client peut télécharger les fichiers livrés (documents, maquettes, vidéos, rapports, etc.). Plus besoin d’envoyer des liens par email ou WeTransfer</p>
                </div>

                {/* Autre carré */}
                <div className="border border-secondary rounded-xl shadow-sm md:col-span-2 p-4 md:row-span-2">
                    <div className={'bg-secondary p-3 rounded-lg w-fit text-background'}>
                        <ChartBarIcon/>
                    </div>
                    <h3 className={'font-black mt-4 md:mt-20 text-xl text-secondary'}>Tableau de bord clair</h3>
                    <p className={'md:mt-4 text-sm'}>Visualisez vos revenus, vos clients et votre activité d’un seul coup d’œil.</p>
                </div>
            </div>

        </div>
    );
};

export default FeaturesSection;