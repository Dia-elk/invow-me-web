import React from 'react';
import Link from "next/link";

interface BlogCard {
    slug: string,
    title: string,
    description: string,
    image: string,
    isReversed: boolean,
}

const BlogCard = ({slug, title, description, image, isReversed}) => {
    return (
        <div className={'grid md:grid-cols-2 gap-8'}>
            <div className={'h-80 w-full overflow-hidden rounded-xl ' +(isReversed ? "order-1 md:order-2" : "order-1 md:order-1")}>
                <img src={image} alt={title}
                     className={'w-full h-full object-cover'}/>
            </div>
            <div className={'flex flex-col justify-between ' + (isReversed ? "order-2 md:order-1" : "order-2 md:order-2")}>
                <div>
                    <h2 className={'text-xl font-black'}>{title}</h2>
                    <p className={'text-sm pt-8'}>{description}</p>
                </div>
                <div>
                    <Link href={slug} className={' w-fit bg-secondary font-black px-8 py-4 text-xs select-none cursor-pointer rounded-lg text-background hover:bg-primary hover:text-[#052d32] transition-all duration-300'}>
                        Lire l’article ---→
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;