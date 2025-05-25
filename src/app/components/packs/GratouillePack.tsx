import React from 'react';

const GratouillePack = () => {
    return (
        <div className={'border border-secondary p-6 rounded-2xl relative flex flex-col items-center justify-center select-none cursor-default text-background'}>
            <p className={'bg-black text-light text-center absolute -top-4 rounded-full text-xs px-4 py-2'}>🌱 Parfait pour débuter</p>
            <div className={'h-[500px] bg-secondary rounded-2xl  p-4 flex flex-col justify-between'}>
                <div className={'p-4'}>
                    <h2 className={' text-4xl font-light'}>Gratouille</h2>
                    <p className={'font-bold mt-8 text-lg'}>Gratuit</p>
                    <p className={'text-sm text-black/50 mt-4'}>Pour ceux qui veulent tester sans se gratter le porte-monnaie</p>
                </div>
                <div className={'flex flex-wrap gap-2'}>
                    <div className={'rounded-full text-[9px] w-fit py-2 px-3 bg-green-200 dark:bg-indigo-300 text-[#052d32] dark:text-background'}>
                        👤 1 client
                    </div>
                    <div className={'rounded-full text-[9px] w-fit py-2 px-3 bg-green-200 dark:bg-indigo-300 text-[#052d32] dark:text-background'}>
                        📄 5/mois factures & devis
                    </div>
                    <div className={'rounded-full text-[9px] w-fit py-2 px-3 bg-green-200 dark:bg-indigo-300 text-[#052d32] dark:text-background'}>
                        📥 Téléchargement PDF
                    </div>
                    <div className={'rounded-full text-[9px] w-fit py-2 px-3 bg-green-200 dark:bg-indigo-300 text-[#052d32] dark:text-background'}>
                        🇲🇦 Conforme fiscalité
                    </div>
                    <div className={'rounded-full text-[9px] w-fit py-2 px-3 bg-green-200 dark:bg-indigo-300 text-[#052d32] dark:text-background'}>
                        🔐 Données sécurisées & protégées
                    </div>
                </div>
            </div>
            <div className={' bg-secondary w-full py-4 px-8 rounded-2xl mt-4 text-sm select-none font-light flex justify-center items-center transition-all duration-300 hover:scale-95 cursor-pointer'}>
                <p className={'font-black'}>Je gratte un peu 👀</p>
            </div>
        </div>
    );
};

export default GratouillePack;