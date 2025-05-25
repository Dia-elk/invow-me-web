import React from 'react';

const UnderLogoTitle = ({title}:{title:string}) => {
    return (
        <div className={'max-w-5xl mx-auto flex items-center gap-1 pl-[33px] pt-[2px] '}>
            <div className={'w-1 h-1 bg-secondary rounded-full'}>
            </div>
            <p className={'text-sm text-secondary'}>
                {title}
            </p>
        </div>
    );
};

export default UnderLogoTitle;