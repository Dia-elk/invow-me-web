import React from 'react';

const GigaPatron = () => {
    return (
        <div className={'border border-primary p-6 rounded-2xl relative flex flex-col items-center justify-center select-none cursor-default text-background'}>
            <p className={'bg-background border border-primary text-light text-center absolute -top-4 rounded-full text-xs px-4 py-2'}>🛠️ Bientôt disponible</p>
            <div className={'h-[500px] bg-primary rounded-2xl  p-4 flex flex-col justify-between'}>
                <div className={'p-4'}>
                    <h2 className={' text-4xl font-light'}>Giga Patron</h2>
                    <p className={'font-black mt-8 text-lg'}>199.00 <span className={'text-xs'}>DH/Mois</span></p>
                    <p className={'text-sm text-black/50 mt-4'}>Pour les freelances qui commencent à envoyer du lourd (mais pas trop)</p>
                </div>
                <div className={'flex flex-wrap gap-2 font-bold'}>
                    <div className={'rounded-full text-[9px] w-fit py-2 px-3 bg-green-200 text-background'}>
                        📄 Illimité factures & devis
                    </div>
                    <div className={'rounded-full text-[9px] w-fit py-2 px-3 bg-green-200 text-background'}>
                        👥 Clients illimités
                    </div>
                    <div className={'rounded-full text-[9px] w-fit py-2 px-3 bg-green-200 text-background'}>
                        📤 Envoi par email
                    </div>
                    <div className={'rounded-full text-[9px] w-fit py-2 px-3 bg-green-200 text-background'}>
                        💾 Livraison digitale
                    </div>
                    <div className={'rounded-full text-[9px] w-fit py-2 px-3 bg-green-200 text-background'}>
                        🧾 Export comptable
                    </div>
                    <div className={'rounded-full text-[9px] w-fit py-2 px-3 bg-green-200 text-background'}>
                        📊 Dashboard avancé
                    </div>
                    <div className={'rounded-full text-[9px] w-fit py-2 px-3 bg-green-200 text-background'}>
                        ⚙️ Accès API
                    </div>
                    <div className={'rounded-full text-[9px] w-fit py-2 px-3 bg-green-200 text-background'}>
                        🛠️ Webhooks
                    </div>
                    <div className={'rounded-full text-[9px] w-fit py-2 px-3 bg-green-200 text-background'}>
                        💳 Paiement en ligne
                    </div>
                    <div className={'rounded-full text-[9px] w-fit py-2 px-3 bg-green-200 text-background'}>
                        🧘 Sans engagement
                    </div>
                    <div className={'rounded-full text-[9px] w-fit py-2 px-3 bg-green-200 text-background'}>
                        🇲🇦 Conforme fiscalité
                    </div>
                </div>
            </div>
            <div className={'cursor-not-allowed bg-primary w-full py-4 px-8 rounded-2xl mt-4 text-sm select-none font-light flex justify-center items-center transition-all duration-300 hover:scale-95'}>
                <p className={'font-black'}>Je prends le contrôle 🔧</p>
            </div>
        </div>
    );
};

export default GigaPatron;