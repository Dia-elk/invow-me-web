import React from 'react';
import FaqCard from "@/app/components/FaqCard";

const FaqSection = () => {
    return (
        <div className={'mt-40 max-w-7xl mx-auto px-4'}>
            <h3 className={'text-xs font-normal text-secondary'}>Pas encore sûr ? On répond à toutes vos questions.</h3>
            <p className={'font-black'}>Voici tout ce que vous devez savoir sur nos forfaits, nos fonctionnalités et comment InvowMe peut vous simplifier la facturation.</p>
            <div className={'grid md:grid-cols-2 gap-4 mt-20'}>
               <div className={'space-y-4'}>
                   <FaqCard cardHeight={'h-30'} question={'Est-ce que je peux utiliser InvowMe gratuitement ?'} answer={"Oui ! Le forfait Gratouille est 100 % gratuit, sans engagement et sans carte bancaire. Parfait pour tester la plateforme."}/>
                   <FaqCard cardHeight={"h-30"} question={"Quelles sont les limites du forfait gratuit ?"} answer={"Avec Gratouille, vous pouvez créer jusqu’à 5 factures ou devis par mois pour 1 seul client, avec téléchargement PDF."}/>
                   <FaqCard cardHeight={"h-30"} question={"Que propose le forfait Petit Taf à 49 MAD/mois ?"} answer={"Il permet jusqu’à 50 factures ou devis par mois, 10 clients, l’envoi par email, et le suivi des paiements."}/>
                   <FaqCard cardHeight={"h-30"} question={"Que contient le forfait Giga Patron à 199 MAD/mois ?"} answer={"C’est l’offre complète : factures & clients illimités, livraison digitale, collecte de paiements, accès API, webhooks, et support prioritaire."}/>
                   <FaqCard cardHeight={"h-30"} question={"Puis-je changer de forfait à tout moment ?"} answer={"Oui, vous pouvez changer de plan ou revenir au forfait gratuit quand vous le souhaitez, sans frais."}/>
                   <FaqCard cardHeight={"h-30"} question={"Mes données sont-elles sécurisées ?"} answer={"Absolument. Vos données sont chiffrées et stockées sur des serveurs sécurisés, conformes aux standards de confidentialité."}/>
               </div>
                <div className={'space-y-4'}>
                    <FaqCard cardHeight={"h-30"} question={"Puis-je personnaliser mes factures ?"} answer={"Oui, tous les forfaits permettent d’ajouter votre logo, vos coordonnées, et les mentions légales."}/>
                    <FaqCard cardHeight={"h-30"} question={"Qu’est-ce que la livraison digitale ?"} answer={"C’est une fonctionnalité (incluse dans Giga Patron) qui permet à vos clients de télécharger directement vos livrables depuis la facture, après paiement."}/>
                    <FaqCard cardHeight={"h-30"} question={"Puis-je automatiser ma facturation ?"} answer={"Oui, le forfait Giga Patron donne accès à l’API et aux webhooks, idéals pour connecter InvowMe à vos autres outils."}/>
                    <FaqCard cardHeight={"h-30"} question={"Comment fonctionne la collecte de paiement ?"} answer={"Avec Giga Patron, vos clients peuvent payer directement en ligne via un lien sécurisé intégré dans la facture."}/>
                    <FaqCard cardHeight={"h-30"} question={"Est-ce qu’il existe des modèles de factures plus avancés ?"} answer={"Oui, vous pouvez acheter des templates premium (devis & factures) à petit prix pour un rendu encore plus professionnel."}/>
                    <FaqCard cardHeight={"h-30"} question={"Puis-je suivre si mes factures ont été ouvertes par mes clients ?"} answer={"Oui, avec les forfaits payants, vous êtes notifié lorsque vos clients ouvrent les factures envoyées par email. Pratique pour relancer au bon moment !"}/>
                </div>
            </div>
        </div>
    );
};

export default FaqSection;