import React from 'react';
import blogs from "@/data/blogs.json";
import BlogHeader from "@/app/components/BlogHeader";
import {getBlogMetadata} from "@/utils/getBlogMetadata";

export const metadata = getBlogMetadata(3);
const Page = () => {
    return (
        <div>
            <BlogHeader title={blogs[3].title}
                        image={blogs[3].image}
                        description={blogs[3].description}
            />

            <p className={'mt-20'}>
                Avant la facture, il y a souvent le devis. Ce document est la première impression professionnelle que
                vous laissez à votre client. Mal rédigé, il peut faire fuir un prospect. Bien construit, il peut vous
                décrocher une mission sans négociation. Si vous êtes freelance ou prestataire de services au Maroc, ce
                guide vous explique comment créer un devis qui inspire confiance et donne envie de signer.</p>

            <div className={'space-y-4  mt-20'}>
                <h4 className={'font-black text-xl'}>1. Pourquoi un bon devis fait la différence</h4>
                <p>Un devis n’est pas qu’un document chiffré : c’est une promesse. Il rassure le client sur votre
                    professionnalisme, clarifie la mission, et encadre juridiquement la relation. Un bon devis évite les
                    malentendus, les mauvaises surprises… et les litiges.</p>
            </div>

            <div className={'space-y-4  mt-20'}>
                <h4 className={'font-black text-xl'}>2. Les éléments indispensables dans un devis</h4>
                <p>Voici les informations que tout devis doit contenir au Maroc :</p>
                <ul className={'list-disc px-8 space-y-2'}>
                    <li>Vos informations (nom, ICE, adresse…)</li>
                    <li>Les coordonnées du client</li>
                    <li>Le numéro du devis et sa date</li>
                    <li>La description claire des prestations proposées</li>
                    <li>Les quantités et les tarifs</li>
                    <li>Le montant total HT et TTC</li>
                    <li>Le délai de réalisation</li>
                    <li>La durée de validité du devis (généralement 15 à 30 jours)</li>
                    <li>Les modalités de paiement</li>
                    <li>Une mention "Bon pour accord" avec espace pour la signature</li>
                </ul>
                <p className={'font-black'}>Sans ces éléments, votre devis risque de ne pas être pris au sérieux.</p>
            </div>

            <div className={'space-y-4  mt-20'}>
                <h4 className={'font-black text-xl'}>3. Rédiger une description claire et convaincante</h4>
                <p>C’est là que tout se joue. Évitez les termes vagues. Préférez une description détaillée mais
                    accessible. Par exemple :</p>
                <ul className={'list-disc px-8 space-y-2'}>
                    <li>❌ "Création site web"</li>
                    <li>✅ "Conception d’un site vitrine WordPress de 5 pages optimisé SEO, avec formulaire de contact et
                        intégration Google Maps"
                    </li>
                </ul>
                <p className={'font-black'}>Plus c’est précis, plus votre valeur perçue augmente.</p>
            </div>

            <div className={'space-y-4  mt-20'}>
                <h4 className={'font-black text-xl'}>4. Soyez transparent sur les tarifs</h4>
                <p>Détaillez vos tarifs par ligne :</p>
                <ul className={'list-disc px-8 space-y-2'}>
                    <li>Taux horaire ou forfait ?</li>
                    <li>Frais supplémentaires ?</li>
                    <li>TVA incluse ou non ?</li>
                </ul>
                <p className={'font-black'}>Cela évite les surprises pour le client et vous protège juridiquement.
                    Pensez à préciser s’il y a des conditions particulières (acompte, frais de déplacement…).</p>
            </div>

            <div className={'space-y-4  mt-20'}>
                <h4 className={'font-black text-xl'}>5. Mentionnez les délais et conditions</h4>
                <p>Précisez clairement :</p>
                <ul className={'list-disc px-8 space-y-2'}>
                    <li>Le délai estimé de réalisation</li>
                    <li>Les étapes de livraison (si plusieurs phases)</li>
                    <li>Les conditions d’annulation ou de modification</li>
                </ul>
                <p className={'font-black'}>Ces précisions inspirent confiance et montrent que vous avez l’habitude de
                    gérer des projets sérieusement.</p>
            </div>

            <div className={'space-y-4  mt-20'}>
                <h4 className={'font-black text-xl'}>6. Personnalisez votre devis</h4>
                <p>Ajoutez une petite phrase d’introduction ou de clôture personnalisée :</p>
                <p>"Merci pour votre intérêt, je serais ravi de collaborer avec vous sur ce projet."</p>
                <p>Ce type de touche humaine vous différencie des devis froids et impersonnels.</p>
            </div>

            <div className={'space-y-4  mt-20'}>
                <h4 className={'font-black text-xl'}>7. Utilisez un outil professionnel</h4>
                <p>Un devis Word mal aligné n’a pas l’impact d’un devis bien présenté. Utilisez un outil comme InvowMe
                    pour générer des devis clairs, professionnels et facilement modifiables. Vous pouvez ensuite les
                    convertir en facture en un clic.</p>
            </div>

            <div className={'space-y-4  mt-20'}>
                <h4 className={'font-black text-xl'}>Conclusion</h4>
                <p>Un devis bien structuré vous fait gagner du temps, renforce votre crédibilité et augmente vos chances de signer des contrats. Ce n’est pas un détail administratif, c’est un vrai levier commercial. Mettez-y autant de soin que dans votre travail.</p>
            </div>
        </div>
    );
};

export default Page;