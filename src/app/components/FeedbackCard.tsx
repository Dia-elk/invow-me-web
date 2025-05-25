import React from 'react';

interface FeedbackCardProps {
    title: string,
    message: string,
    author: string,
}

const FeedbackCard = ({title, message, author}: FeedbackCardProps) => {
    return (
        <div className={'h-screen max-w-xl mx-auto text-center flex flex-col justify-center items-center'}>
            <h4 className={'text-secondary'}>{title}</h4>
            <p className={'mt-4 opacity-80 text-sm'}>{message}</p>
            <div className={'border border-secondary p-4 bg-neutral-300/20 dark:bg-neutral-900/20 rounded-lg backdrop-blur-sm mt-8'}>
                <p className={'font-black text-xs'}>{author}</p>
            </div>
        </div>
    );
};

export default FeedbackCard;