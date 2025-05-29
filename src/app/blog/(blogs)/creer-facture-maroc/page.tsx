import React from 'react';
import BlogHeader from "@/app/components/BlogHeader";
import blogs from "@/data/blogs.json";

import {getBlogMetadata} from "@/utils/getBlogMetadata";


export const metadata = getBlogMetadata(0);

const Page = () => {
    return (
        <div className={"text-sm"}>
            <BlogHeader title={blogs[0].title}
                        image={blogs[0].image}
                        description={blogs[0].description}
            />
            <p className={'mt-20'}>
                Créer une facture professionnelle au Maroc n’est pas seulement une formalité : c’est une obligation
                légale et un gage de crédibilité. Que vous soyez freelance, auto-entrepreneur ou indépendant, vous devez
                émettre des factures conformes aux normes fiscales marocaines. Dans ce guide, vous allez découvrir pas à
                pas comment structurer une facture légale, éviter les erreurs fréquentes, et comment gagner du temps
                grâce à des outils adaptés comme InvowMe.
            </p>

            <div className={'space-y-4  mt-20'}>
                <h4 className={'font-black text-xl'}>Pourquoi une facture conforme est indispensable ?</h4>
                <p>Une facture bien faite n'est pas seulement un document à transmettre au client. Elle vous protège
                    juridiquement, vous permet d’être payé dans les délais, facilite votre comptabilité, et vous rend
                    crédible.</p>
                <p>Une facture mal rédigée ou incomplète peut être rejetée par un client ou vous poser problème en cas
                    de contrôle fiscal. C’est donc un élément clé de votre activité. </p>
            </div>

            <div className={'space-y-4  mt-20'}>
                <h4 className={'font-black text-xl'}>Les mentions obligatoires sur une facture au Maroc</h4>
                <p>Voici les éléments que vous devez inclure dans chaque facture pour respecter la loi marocaine : </p>
                <ul className={'list-disc px-8 space-y-2'}>
                    <li>Nom et prénom (ou nom commercial) du freelance</li>
                    <li>Adresse professionnelle</li>
                    <li>Numéro ICE (Identifiant Commun de l’Entreprise)</li>
                    <li>Identifiant Fiscal (IF) si applicable</li>
                    <li>Numéro unique de facture (ex : F-2025-001)</li>
                    <li>Date d’émission de la facture</li>
                    <li>Coordonnées du client (nom, adresse, ICE si entreprise)</li>
                    <li>Description détaillée des prestations ou produits vendus</li>
                    <li>Montant HT, TVA (si applicable), et montant TTC</li>
                    <li>Conditions de paiement (délais, mode, pénalités éventuelles)</li>
                </ul>
                <p className={'font-black'}>💡 Si vous êtes auto-entrepreneur, précisez “Exonéré de TVA selon l’article
                    145 du CGI”. </p>
            </div>

            <div className={'space-y-8  mt-20'}>
                <h4 className={'font-black text-xl'}>Étapes pour créer une facture professionnelle </h4>

                <div className={'space-y-2'}>
                    <h5 className={'font-black'}>1. Préparez vos informations</h5>
                    <p className={'pl-4'}>Avant de créer votre facture, assurez-vous que vos coordonnées fiscales (ICE,
                        IF, statut) sont bien à jour. Cela renforce votre crédibilité et permet au client de traiter la
                        facture rapidement.</p>
                </div>

                <div className={'space-y-2'}>
                    <h5 className={'font-black'}>2. Numérotez chaque facture</h5>
                    <p className={'pl-4'}>Chaque facture doit avoir un numéro unique et chronologique. Par exemple :
                        INV-2025-001, INV-2025-002… Ne réutilisez jamais un ancien numéro.</p>
                </div>

                <div className={'space-y-2'}>
                    <h5 className={'font-black'}>3. Décrivez vos prestations clairement</h5>
                    <p className={'pl-4'}>Indiquez précisément ce que vous avez fourni, avec la date, la quantité ou la
                        période concernée. Exemples :</p>
                    <ul className={'list-disc px-8 space-y-2'}>
                        <li>“Création d’un site vitrine de 5 pages”</li>
                        <li>“Formation en ligne de 6h sur la facturation”</li>
                    </ul>
                </div>

                <div className={'space-y-2'}>
                    <h5 className={'font-black'}>4. Calculez les montants</h5>
                    <p className={'pl-4'}>Si vous êtes soumis à la TVA, ajoutez le montant HT + le taux de TVA + le
                        total TTC. Si non, mentionnez l’exonération. </p>
                </div>

                <div className={'space-y-2'}>
                    <h5 className={'font-black'}>5. Précisez les conditions de paiement</h5>
                    <p className={'pl-4'}>Exemple : “Paiement sous 7 jours par virement bancaire”. Vous pouvez aussi
                        ajouter vos coordonnées bancaires ou intégrer un lien de paiement avec InvowMe.</p>
                </div>
            </div>

            <div className={'space-y-4  mt-20'}>
                <h4 className={'font-black text-xl'}>Exemple de facture marocaine</h4>
                <div
                    className="my-8 bg-gray-100 dark:bg-neutral-900 border border-secondary rounded-lg p-4 font-mono text-sm  whitespace-pre-wrap">
                    InvowMe | Freelancer : Saïd B. <br/>
                    Adresse : Rue Zerktouni, Casablanca <br/>
                    ICE : 0023456789012 | IF : 12345678<br/>
                    Facture N° INV-2025-004 | Date : 12/05/2025<br/><br/><br/>

                    Client : Agence Xpress<br/>
                    Adresse : 5 Rue des Jardins, Rabat<br/>
                    ICE : 0034567890123<br/><br/><br/>

                    Prestation : Création d’une maquette UI – livraison sous 7 jours<br/>
                    Montant : 2 500 MAD<br/>
                    TVA : Exonéré (auto-entrepreneur)<br/>
                    Total TTC : 2 500 MAD<br/>
                    Paiement : Virement bancaire sous 7 jours<br/>
                </div>
            </div>

            <div className={'space-y-4  mt-20'}>
                <h4 className={'font-black text-xl'}>Les erreurs fréquentes à éviter</h4>
                <ul className={'list-disc px-8 space-y-2'}>
                    <li>Oublier le numéro ICE</li>
                    <li>Réutiliser un ancien numéro de facture</li>
                    <li>Ne pas indiquer de conditions de paiement</li>
                    <li>Donner un montant TTC sans détailler HT/TVA</li>
                    <li>Envoyer un fichier Word ou Excel sans structure</li>
                </ul>
            </div>

            <div className={'space-y-4  mt-20'}>
                <h4 className={'font-black text-xl'}>Gagnez du temps avec InvowMe</h4>
                <p>Créer une facture manuellement à chaque fois peut vite devenir chronophage. InvowMe vous permet de
                    : </p>
                <ul className={'list-disc px-8 space-y-2'}>
                    <li>Générer des factures conformes automatiquement</li>
                    <li>Ajouter votre logo, votre ICE, vos coordonnées en 1 clic</li>
                    <li>Envoyer vos factures par email ou WhatsApp</li>
                    <li>Suivre les paiements et relancer en cas de retard</li>
                    <li>Intégrer un lien de paiement dans chaque facture</li>
                </ul>
                <p className={'font-black'}>🕒 Plus besoin de perdre 20 minutes par facture : avec InvowMe, vous facturez
                    en 2 minutes. </p>
            </div>

            <div className={'space-y-4 mt-20'}>
                <h4 className={'font-black text-xl'}>Conclusion</h4>
                <p>Une facture professionnelle au Maroc doit respecter des règles simples mais précises. En suivant ce
                    guide, vous garantissez la conformité de vos documents, rassurez vos clients et gagnez du temps dans
                    la gestion quotidienne. </p>
                <p>Et pour aller plus loin, laissez InvowMe s’occuper de la partie compliquée pour vous : créez votre
                    compte, personnalisez votre modèle et envoyez votre première facture aujourd’hui. </p>
            </div>
        </div>
    );
};

export default Page;