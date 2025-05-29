import React from 'react';

interface BlogHeaderProps {
    title: string,
    description: string,
    image: string,
}

const BlogHeader = ({title, description, image}:BlogHeaderProps) => {
    return (
        <div>
            <p className={"text-secondary text-xs"}> {description}</p>
            <h1 className={'text-2xl font-black mt-4'}>{title}</h1>
            <div className={'h-80 mt-10 w-full overflow-hidden rounded-xl'}>
                <img src={image} alt={title}/>
            </div>
        </div>
    );
};

export default BlogHeader;