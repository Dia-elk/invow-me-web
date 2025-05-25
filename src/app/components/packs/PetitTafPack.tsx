import React from 'react';

const PetitTafPack = () => {
    return (
        <div className={'border border-indigo-300 p-6 rounded-2xl relative flex flex-col items-center justify-center select-none cursor-default text-background'}>
            <p className={'bg-background border border-indigo-300 text-light text-center absolute -top-4 rounded-full text-xs px-4 py-2'}>🛠️ Bientôt disponible</p>
            <div className={'h-[500px] bg-indigo-300 rounded-2xl  p-4 flex flex-col justify-between'}>
                <div className={'p-4'}>
                    <h2 className={' text-4xl font-light'}>Petit Taf</h2>
                    <p className={'font-black mt-8 text-lg'}>49.00 <span className={'text-xs'}>DH/Mois</span></p>
                    <p className={'text-sm text-black/50 mt-4'}>Pour les freelances qui commencent à envoyer du lourd (mais pas trop)</p>
                </div>
                <div className={'flex flex-wrap gap-2 font-bold'}>
                    <div className={'rounded-full text-[9px] w-fit py-2 px-3 bg-secondary text-background'}>
                        📄 50/mois factures & devis
                    </div>
                    <div className={'rounded-full text-[9px] w-fit py-2 px-3 bg-secondary text-background'}>
                        👥 10 clients
                    </div>
                    <div className={'rounded-full text-[9px] w-fit py-2 px-3 bg-secondary text-background'}>
                        📤 Envoi par email
                    </div>
                    <div className={'rounded-full text-[9px] w-fit py-2 px-3 bg-secondary text-background'}>
                        ⏱ Suivi paiements
                    </div>
                    <div className={'rounded-full text-[9px] w-fit py-2 px-3 bg-secondary text-background'}>
                        🧘 Sans engagement
                    </div>
                    <div className={'rounded-full text-[9px] w-fit py-2 px-3 bg-secondary text-background'}>
                        🇲🇦 Conforme fiscalité
                    </div>
                </div>
            </div>
            <div className={'cursor-not-allowed bg-indigo-300 w-full py-4 px-8 rounded-2xl mt-4 text-sm select-none font-light flex justify-center items-center transition-all duration-300 hover:scale-95'}>
                <p className={'font-black'}>J’me lance tranquille 🚀</p>
            </div>
        </div>
    );
};

export default PetitTafPack;