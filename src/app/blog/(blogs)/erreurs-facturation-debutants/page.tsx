import React from 'react';
import blogs from "@/data/blogs.json";
import BlogHeader from "@/app/components/BlogHeader";
import {getBlogMetadata} from "@/utils/getBlogMetadata";

export const metadata = getBlogMetadata(2);
const Page = () => {
    return (
        <div>
            <BlogHeader title={blogs[2].title}
                        image={blogs[2].image}
                        description={blogs[2].description}
            />

            <p className={'mt-20'}>
                Se lancer en freelance au Maroc, c’est excitant, mais cela vient avec son lot de responsabilités — et la
                facturation en fait partie. Beaucoup de débutants commettent des erreurs qui peuvent ralentir les
                paiements, nuire à leur image professionnelle ou même poser problème avec l’administration. Dans cet
                article, nous listons les erreurs les plus fréquentes en facturation, et surtout, comment les éviter
                pour partir du bon pied.
            </p>

            <div className={'space-y-4  mt-20'}>
                <h4 className={'font-black text-xl'}>1. Ne pas émettre de facture </h4>
                <p>Oui, cela paraît évident. Pourtant, de nombreux freelances oublient de formaliser leurs prestations
                    par une facture, surtout quand il s'agit de missions "entre amis" ou de petits montants. C’est une
                    erreur qui peut vous faire perdre vos droits et compliquer votre comptabilité. Même pour 200 MAD,
                    facturez toujours.</p>
            </div>

            <div className={'space-y-4  mt-20'}>
                <h4 className={'font-black text-xl'}>2. Oublier des mentions légales obligatoires</h4>
                <p>Chaque facture au Maroc doit comporter certaines informations essentielles :</p>
                <ul className={'list-disc px-8 space-y-2'}>
                    <li>Numéro de facture unique</li>
                    <li>Date d’émission</li>
                    <li>Identité complète du client et du freelance</li>
                    <li>Description des services</li>
                    <li>Montant HT, TVA (si applicable), montant TTC</li>
                    <li>Mode et délai de paiement</li>
                </ul>
                <p className={'font-black'}>L’absence de ces éléments rend la facture non conforme.</p>
            </div>


            <div className={'space-y-4  mt-20'}>
                <h4 className={'font-black text-xl'}>3. Mal numéroter ses factures</h4>
                <p>Il est crucial d’utiliser un système de numérotation chronologique et unique (ex : FAC-2025-0001).
                    Évitez de repartir à zéro chaque mois ou d’utiliser des numéros aléatoires. Cela complique votre
                    suivi et peut attirer l’attention du fisc en cas de contrôle.</p>
            </div>

            <div className={'space-y-4  mt-20'}>
                <h4 className={'font-black text-xl'}>4. Ne pas mentionner les pénalités de retard</h4>
                <p>En cas de non-paiement, si vous n’avez pas mentionné de pénalités dans votre facture, il sera plus
                    difficile de faire valoir vos droits. Ajoutez toujours une ligne comme :
                    "Pénalités de retard : taux légal en vigueur après 30 jours."</p>
            </div>

            <div className={'space-y-4  mt-20'}>
                <h4 className={'font-black text-xl'}>5. Être flou dans la description de la prestation</h4>
                <p>Écrire simplement "mission web" ou "conseil" ne suffit pas. Soyez précis :</p>
                <ul className={'list-disc px-8 space-y-2'}>
                    <li>"Développement du site vitrine WordPress pour la société X"</li>
                    <li>"Consultation SEO sur une période de 3 jours"</li>
                </ul>
                <p className={'font-black'}>Cela évite les contestations et rassure le client.</p>
            </div>

            <div className={'space-y-4  mt-20'}>
                <h4 className={'font-black text-xl'}>6. Ne pas envoyer sa facture dans les temps </h4>
                <p>Plus vous tardez à envoyer votre facture, plus vous attendez d’être payé. Habituez-vous à facturer
                    dès la fin de la prestation ou selon les étapes prévues. Utilisez un outil comme InvowMe pour ne
                    jamais oublier.</p>
            </div>

            <div className={'space-y-4  mt-20'}>
                <h4 className={'font-black text-xl'}>7. Envoyer la facture sans la formaliser</h4>
                <p>Une facture envoyée dans un simple mail en texte brut ou via WhatsApp, ce n’est pas professionnel.
                    Préférez un PDF propre, structuré, et envoyé avec un suivi (mail, lien sécurisé…).</p>
            </div>

            <div className={'space-y-4  mt-20'}>
                <h4 className={'font-black text-xl'}>8. Oublier le suivi après envoi</h4>
                <p>Beaucoup de freelances débutants envoient une facture puis... attendent passivement. Relancer
                    poliment après 7 jours puis à l’échéance prévue est essentiel pour se faire respecter.</p>
            </div>


            <div className={'space-y-4 mt-20'}>
                <h4 className={'font-black text-xl'}>9. Mal gérer les acomptes ou paiements partiels</h4>
                <p>Si vous avez un acompte, vous devez le mentionner sur la facture finale, sinon vous risquez de
                    facturer deux fois ou de perdre le fil de vos revenus réels. Une bonne gestion des acomptes renforce
                    votre sérieux.</p>
            </div>


            <div className={'space-y-4  mt-20'}>
                <h4 className={'font-black text-xl'}>10. Ne pas garder une copie ou archivage désorganisé</h4>
                <p>Vous devez garder une trace de toutes vos factures. Sans cela, impossible de bien déclarer vos
                    revenus ou de répondre à un contrôle. Utilisez une solution digitale centralisée comme InvowMe pour
                    archiver et retrouver facilement vos documents.</p>
            </div>

            <div className={'space-y-4  mt-20'}>
                <h4 className={'font-black text-xl'}>Conclusion</h4>
                <p>La facturation est un pilier de votre activité freelance. Ce n’est pas juste une formalité : c’est
                    votre preuve de travail, votre outil de paiement, et votre garantie en cas de litige. En évitant ces
                    erreurs dès le début, vous gagnez en professionnalisme, en confiance et en tranquillité.</p>
            </div>

        </div>
    );
};

export default Page;