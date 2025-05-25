import React from 'react';
interface WhatTitleProps{
    number:string,
    title:string,
}
const WhatTitle = ({number,title}:WhatTitleProps) => {
    return (
        <div className={'flex items-center text-secondary gap-1 uppercase'}>
            <p>{number}</p>
            <div className={'h-[2px] w-6 bg-secondary font-medium'}></div>
            <p>{title}</p>
        </div>
    );
};

export default WhatTitle;