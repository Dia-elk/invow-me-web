import React from 'react';
import WhatTitle from "@/app/components/WhatTitle";

interface WhatCardProps{
    number:string,
    title:string,
    mainDescription:string,
    subDescription:string
}
const WhatCard = ({number,title,mainDescription,subDescription}:WhatCardProps) => {
    return (
        <div className={'grid md:grid-cols-8 gap-4 w-full items-start mt-20 md:mt-40 px-4'}>
            <div className={'col-span-3 flex md:justify-end mt-4'}>
                <WhatTitle number={number} title={title}/>
            </div>
            <div className={'col-span-5 w-full grid md:grid-cols-3'}>
                <div></div>
                <div className={'tracking-wide'}>
                    <p className={'text-xl font-medium'}>{mainDescription}</p>
                    <p className={'mt-8 md:mt-40 text-xs'}>{subDescription}</p>
                </div>
                <div></div>
            </div>
        </div>
    );
};

export default WhatCard;