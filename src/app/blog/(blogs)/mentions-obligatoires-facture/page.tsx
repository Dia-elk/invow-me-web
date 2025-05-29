import React from 'react';
import BlogHeader from "@/app/components/BlogHeader";
import blogs from "@/data/blogs.json";
import {getBlogMetadata} from "@/utils/getBlogMetadata";

export const metadata = getBlogMetadata(1);

const Page = () => {
    return (
        <div className={'text-sm'}>
            <BlogHeader title={blogs[1].title}
                        image={blogs[1].image}
                        description={blogs[1].description}
            />

            <p className={'mt-20'}>
                La facturation au Maroc ne se résume pas à l’émission d’un simple document de paiement. Pour être valable aux yeux de la loi et des administrations, chaque facture doit contenir un certain nombre d’informations obligatoires. En tant que freelance ou auto-entrepreneur, connaître ces éléments est essentiel pour éviter les sanctions, assurer votre crédibilité auprès de vos clients et faciliter votre comptabilité. </p>

            <div className={'space-y-4  mt-20'}>
                <h4 className={'font-black text-xl'}>1. Les informations de l’émetteur de la facture</h4>
                <p>Vous devez impérativement faire figurer sur votre facture :</p>
                <ul className={'list-disc px-8 space-y-2'}>
                    <li>Votre nom ou raison sociale</li>
                    <li>Votre adresse professionnelle</li>
                    <li>Votre numéro d’identification fiscale (IF)</li>
                    <li>Votre numéro d’identification à la TVA (si applicable)</li>
                    <li>Votre ICE (Identifiant Commun de l’Entreprise)</li>
                </ul>
                <p className={'font-black'}>Ces informations permettent d’identifier clairement l’émetteur de la facture. Si vous êtes auto-entrepreneur, mentionnez-le également.</p>
            </div>

            <div className={'space-y-4  mt-20'}>
                <h4 className={'font-black text-xl'}>2. Les informations du client</h4>
                <p>Votre facture doit également comporter les données du client :</p>
                <ul className={'list-disc px-8 space-y-2'}>
                    <li>Nom ou raison sociale du client</li>
                    <li>Adresse complète</li>
                    <li>Numéro IF / ICE (si entreprise)</li>
                </ul>
                <p className={'font-black'}>Ces données sont importantes notamment si votre client est une société, pour qu’il puisse comptabiliser correctement la facture.</p>
            </div>

            <div className={'space-y-4  mt-20'}>
                <h4 className={'font-black text-xl'}>3. Le numéro et la date de la facture</h4>
                <p>Chaque facture doit être numérotée de façon unique et séquentielle. Exemple : FAC-2025-0001.</p>
                <p>La date d’émission est également obligatoire. Elle permet de situer la transaction dans le temps, ce qui est important pour la déclaration fiscale et pour les délais de paiement. </p>
            </div>

            <div className={'space-y-4  mt-20'}>
                <h4 className={'font-black text-xl'}>4. La description des prestations ou produits</h4>
                <p>Indiquez clairement :</p>
                <ul className={'list-disc px-8 space-y-2'}>
                    <li>La nature des biens ou services rendus</li>
                    <li>Les quantités et les tarifs unitaires</li>
                    <li>Le montant total HT (hors taxes)</li>
                </ul>
                <p className={'font-black'}>Plus vous êtes précis, moins il y aura de litiges potentiels avec votre client.</p>
            </div>

            <div className={'space-y-4  mt-20'}>
                <h4 className={'font-black text-xl'}>5. Le montant total, la TVA et le net à payer</h4>
                <p>Selon votre statut (soumis ou non à la TVA), vous devez indiquer :</p>
                <ul className={'list-disc px-8 space-y-2'}>
                    <li>Le montant HT</li>
                    <li>Le taux et le montant de la TVA (si applicable)</li>
                    <li>Le montant TTC (toutes taxes comprises)</li>
                </ul>
                <p className={'font-black'}>Si vous êtes exonéré de TVA, ajoutez la mention : TVA non applicable, article 89 du CGI.</p>
            </div>

            <div className={'space-y-4  mt-20'}>
                <h4 className={'font-black text-xl'}>6. Les modalités de paiement</h4>
                <p>Spécifiez :</p>
                <ul className={'list-disc px-8 space-y-2'}>
                    <li>Les moyens de paiement acceptés (virement, chèque, espèces...)</li>
                    <li>Le délai de règlement (ex : 30 jours après facturation)</li>
                    <li>Le montant TTC (toutes taxes comprises)</li>
                </ul>
                <p className={'font-black'}>Cela vous protège en cas de retard de paiement.</p>
            </div>

            <div className={'space-y-4  mt-20'}>
                <h4 className={'font-black text-xl'}>7. Mentions légales complémentaires</h4>
                <p>Voici quelques mentions que vous pouvez inclure selon le contexte :</p>
                <ul className={'list-disc px-8 space-y-2'}>
                    <li>Auto-entrepreneur, exonéré de TVA selon l’article 89 du CGI</li>
                    <li>Pénalités de retard : taux légal en vigueur</li>
                    <li>Paiement exigible à réception</li>
                </ul>
            </div>

            <div className={'space-y-4  mt-20'}>
                <h4 className={'font-black text-xl'}>Conclusion</h4>
                <p>Une facture conforme au Maroc est plus qu’un simple document de transaction. Elle est le reflet de votre professionnalisme. En respectant les obligations légales, vous vous assurez d’être payé dans les règles, d’éviter tout problème fiscal et de renforcer la confiance avec vos clients.</p>
            </div>
        </div>
    );
};

export default Page;