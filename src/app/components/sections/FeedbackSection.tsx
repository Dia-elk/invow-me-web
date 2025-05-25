import React from 'react';
import FeedbackCard from "@/app/components/FeedbackCard";

const FeedbackSection = () => {
    return (
        <div className={'mt-40 max-w-7xl mx-auto px-8'}>
            <h3 className={'text-xs font-normal text-secondary'}>Ils utilisent InvowMe. Ils en parlent mieux que nous.</h3>
            <p className={'font-black'}>Freelances, développeurs, designers ou agences : ils ont choisi InvowMe pour simplifier leur facturation au quotidien.</p>

            <div className={'mt-20'}>
               <FeedbackCard title={"Simple, clair, rapide."} message={"Avant j'utilisais des modèles Word. Depuis que je suis sur InvowMe, je gagne un temps fou et mes clients trouvent mes factures beaucoup plus pro."} author={"— Yasmine H., Graphiste freelance à Casablanca"}/>
               <FeedbackCard title={"Mes relances sont automatiques, je respire."} message={"Je passais mon temps à courir après les paiements. Maintenant, c’est InvowMe qui s’en charge pour moi."} author={"— Mehdi B., Développeur indépendant à Rabat"}/>
               <FeedbackCard title={"Une vraie solution locale."} message={"Enfin une plateforme de facturation qui comprend les besoins des freelances marocains. Mention spéciale pour la conformité fiscale 🇲🇦."} author={"— Sanae L., Consultante en communication à Marrakech"}/>
               <FeedbackCard title={"Livraison + paiement intégré = game changer."} message={"Je livre des maquettes web à mes clients après paiement. Tout est fluide, plus besoin d’envoyer des liens manuellement."} author={"— Oussama K., UI/UX Designer à Tanger"}/>
           </div>
        </div>
    );
};

export default FeedbackSection;