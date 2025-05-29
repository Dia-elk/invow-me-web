import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://invow.me',
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 1,
        },
        {
            url: 'https://invow.me/fonctionnalites',
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 0.5,
        },
        {
            url: 'https://invow.me/tarifs',
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 0.5,
        },
        {
            url: 'https://invow.me/comment-ca-marche',
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 0.5,
        },
        {
            url: 'https://invow.me/testimonials',
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 0.5,
        },
        {
            url: 'https://invow.me/blog',
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 0.5,
        },
        {
            url: 'https://invow.me/blog/creer-facture-maroc',
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 0.5,
        },
        {
            url: 'https://invow.me/blog/mentions-obligatoires-facture',
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 0.5,
        },
        {
            url: 'https://invow.me/blog/erreurs-facturation-debutants',
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 0.5,
        },
        {
            url: 'https://invow.me/blog/creer-devis-efficace',
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 0.5,
        },
        {
            url: 'https://invow.me/blog/devis-vs-facture-maroc',
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 0.5,
        },
    ]
}