'use client'
import React, {useState} from 'react';
import ArrowDownIcon from "@/app/components/icons/ArrowDownIcon";


interface FaqCardProps{
    cardHeight:string,
    initHeight?:string
    question:string,
    answer:string,
}
const FaqCard = ({cardHeight,initHeight='h-16 md:h-14 lg:h-12',question,answer}:FaqCardProps) => {
    const [isOpen,setIsOpen]=useState(false)
    return (
        <div className={'w-full bg-indigo-300 text-background rounded-xl text-sm overflow-hidden transition-all duration-500 ' +(isOpen?cardHeight : initHeight)}>
            <div onClick={()=>setIsOpen(prev=>!prev)} className={'px-4 flex justify-between items-center cursor-pointer select-none '+initHeight}>
                <p>{question}</p>
                <div className={'transition-all duration-300 '+ (isOpen?'-rotate-90':'rotate-0')}>
                    <ArrowDownIcon/>
                </div>
            </div>
            <div className={'mt-1 p-4   text-background/80 leading-normal tracking-tight text-xs'}>
                {answer}
            </div>
        </div>
    );
};

export default FaqCard;