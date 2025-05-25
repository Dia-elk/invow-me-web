import React from 'react';
import WhatCard from "@/app/components/WhatCard";

const HowItWorksSection = () => {
    return (
       <div className={'mt-40 max-w-7xl mx-auto px-4'}>
           <h3 className={'text-xs font-normal text-secondary'}>Facturer n’a jamais été aussi simple</h3>
           <p className={'font-black'}>De la création de votre compte à la livraison du projet, voici comment InvowMe vous accompagne à chaque étape.</p>
           <WhatCard number={'01'} title={'Commencez sans effort'} mainDescription={'Créez votre compte gratuitement, sans carte bancaire, en moins d’une minute.'} subDescription={'Accédez immédiatement à l’interface pour découvrir les fonctionnalités, configurer votre profil, et tester InvowMe sans engagement.'}/>
           <WhatCard number={"02"} title={"Créez des documents pros"} mainDescription={"Remplissez vos informations, ajoutez vos prestations, vos clients et votre logo."} subDescription={"InvowMe génère automatiquement des devis et factures clairs, professionnels et conformes à la législation marocaine."}/>
           <WhatCard number={"03"} title={"Envoyez et suivez vos factures"} mainDescription={"Partagez vos documents par email ou en PDF en un clic, depuis votre tableau de bord."} subDescription={"Recevez une alerte dès qu’un client ouvre un document, et relancez facilement en cas de retard de paiement."}/>
           <WhatCard number={"04"} title={"Encaissez en toute simplicité"} mainDescription={"Permettez à vos clients de régler leurs factures directement en ligne via notre passerelle de paiement sécurisée."} subDescription={"Une fois le paiement validé, InvowMe débloque automatiquement les fichiers livrables pour le client — plus besoin de relances ou d’envois manuels."}/>

       </div>
    );
};

export default HowItWorksSection;