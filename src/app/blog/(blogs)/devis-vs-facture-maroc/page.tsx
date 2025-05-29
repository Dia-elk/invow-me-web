import React from 'react';
import BlogHeader from "@/app/components/BlogHeader";
import blogs from "@/data/blogs.json";
import {getBlogMetadata} from "@/utils/getBlogMetadata";

export const metadata = getBlogMetadata(4);
const Page = () => {
    return (
        <div>
            <BlogHeader title={blogs[4].title}
                        image={blogs[4].image}
                        description={blogs[4].description}
            />

            <p className={'mt-20'}>
                Quand on débute en freelance, il n’est pas toujours évident de savoir quand utiliser un devis ou une
                facture. Pourtant, ces deux documents jouent des rôles bien distincts dans votre activité. Pour éviter
                les erreurs et renforcer votre professionnalisme, il est essentiel de comprendre la différence entre un
                devis et une facture, et surtout, à quel moment chacun doit être utilisé.
            </p>

            <div className={'space-y-4  mt-20'}>
                <h4 className={'font-black text-xl'}>1. Le devis : une proposition avant l’accord</h4>
                <p>Le devis est un document pré-contractuel. Il s’agit d’une proposition de prix et de prestation que
                    vous soumettez à un client potentiel. Tant qu’il n’est pas signé, il n’engage personne.</p>
                <p>Son objectif :</p>
                <ul className={'list-disc px-8 space-y-2'}>
                    <li>Donner une estimation détaillée du travail à réaliser</li>
                    <li>Présenter vos conditions tarifaires</li>
                    <li>Poser les bases de la collaboration</li>
                </ul>
                <p className={'font-black'}>Une fois accepté et signé par le client, le devis devient un contrat : vous
                    vous engagez à exécuter la mission telle que décrite, et le client s’engage à payer le montant
                    prévu.</p>
            </div>

            <div className={'space-y-4  mt-20'}>
                <h4 className={'font-black text-xl'}>2. La facture : une demande de paiement après prestation</h4>
                <p>La facture est un document comptable et légal que vous émettez après avoir réalisé tout ou partie
                    d’une prestation. Elle atteste que le travail a été effectué, et sert de preuve de paiement à venir
                    (ou effectué).</p>
                <p>Elle est obligatoire pour :</p>
                <ul className={'list-disc px-8 space-y-2'}>
                    <li>Justifier votre chiffre d’affaires</li>
                    <li>Être payé en bonne et due forme</li>
                    <li>Être en règle avec les impôts marocains</li>
                </ul>
                <p className={'font-black'}>La facture doit comporter des mentions légales précises et peut être
                    contrôlée par l’administration fiscale.</p>
            </div>

            <div className={'space-y-4  mt-20'}>
                <h4 className={'font-black text-xl'}>3. Quand faire un devis ?</h4>
                <p>Vous devez faire un devis dans les situations suivantes :</p>
                <ul className={'list-disc px-8 space-y-2'}>
                    <li>Avant le début d’une mission, pour clarifier le périmètre et le budget</li>
                    <li>Si le client le demande (souvent le cas dans les entreprises)</li>
                    <li>Quand le projet comporte plusieurs étapes, ou un tarif global important</li>
                </ul>
                <p className={'font-black'}>Un devis signé est une sécurité juridique pour vous.</p>
            </div>

            <div className={'space-y-4  mt-20'}>
                <h4 className={'font-black text-xl'}>4. Quand faire une facture ?</h4>
                <p>Vous devez faire une facture :</p>
                <ul className={'list-disc px-8 space-y-2'}>
                    <li>Dès qu’une prestation est terminée</li>
                    <li>Lorsque vous recevez un acompte</li>
                    <li>À chaque fois que vous êtes payé</li>
                </ul>
                <p className={'font-black'}>Même si vous êtes auto-entrepreneur, la facture est obligatoire. Elle vous
                    permet de justifier vos revenus et de rester crédible.</p>
            </div>

            <div className={'space-y-4  mt-20'}>
                <h4 className={'font-black text-xl'}>5. Les différences clés entre devis et facture</h4>
                <div className="overflow-x-auto mt-8">
                    <table className="w-full text-left text-sm">
                        <thead className="bg-secondary text-[#052d32]">
                        <tr>
                            <th className="p-4 font-semibold">Critère</th>
                            <th className="p-4 font-semibold">Devis</th>
                            <th className="p-4 font-semibold">Facture</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr className="border-t">
                            <td className="p-4">Moment d’utilisation</td>
                            <td className="p-4">Avant la prestation</td>
                            <td className="p-4">Après la prestation</td>
                        </tr>
                        <tr className="border-t">
                            <td className="p-4">Objectif</td>
                            <td className="p-4">Proposer un tarif / conditions</td>
                            <td className="p-4">Demander un paiement</td>
                        </tr>
                        <tr className="border-t">
                            <td className="p-4">Valeur juridique</td>
                            <td className="p-4">Engage une fois signé</td>
                            <td className="p-4">Document légal obligatoire</td>
                        </tr>
                        <tr className="border-t">
                            <td className="p-4">Contenu</td>
                            <td className="p-4">Estimation + détails + validité</td>
                            <td className="p-4">Détails + montants HT/TTC + paiement</td>
                        </tr>
                        <tr className="border-t">
                            <td className="p-4">Numérotation</td>
                            <td className="p-4">Libre mais suivie</td>
                            <td className="p-4">Obligatoire, séquentielle et unique</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div className={'space-y-4  mt-20'}>
                <h4 className={'font-black text-xl'}>6. Est-ce que le devis remplace la facture ?</h4>

                <p className={'font-black'}>Non. Le devis est une promesse, la facture est une preuve. Même si le devis
                    a été accepté et payé en partie, vous devez toujours émettre une facture à la fin. C’est
                    indispensable pour votre comptabilité et vos déclarations.</p>
            </div>

            <div className={'space-y-4  mt-20'}>
                <h4 className={'font-black text-xl'}>7. Pourquoi utiliser un outil comme InvowMe</h4>

                <p className={'font-black'}>Créer des devis puis les convertir en facture peut vite devenir laborieux à
                    la main. Avec InvowMe, vous créez vos devis en quelques clics, vous les faites signer par le client,
                    puis vous les transformez automatiquement en factures. Un gain de temps et une garantie de
                    conformité.</p>
            </div>

            <div className={'space-y-4  mt-20'}>
                <h4 className={'font-black text-xl'}>Conclusion</h4>

                <p className={'font-black'}>Le devis et la facture sont deux documents complémentaires. Le premier prépare la collaboration, le second la valide et la clôture. Savoir quand utiliser l’un ou l’autre est essentiel pour gérer son activité de freelance au Maroc de manière professionnelle, fluide et légale.</p>
            </div>


        </div>
    );
};

export default Page;