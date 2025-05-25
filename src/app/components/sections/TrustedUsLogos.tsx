import React from 'react';

const TrustedUsLogos = () => {
    return (
        <div className={'mt-40 px-4 py-20 w-full bg-secondary'}>
            <h4 className={'text-center text-xs text-background'}>Déjà adopté par des freelances et petites agences à travers le Maroc
                🇲🇦</h4>
            <div className={'flex items-center justify-center gap-20 mt-16'}>
                <img alt={'realbound logo'} src={'/companies/realbound.png'} className={'w-30 md:w-60'}/>
                <img alt={'diagital studio logo'} src={'/companies/diagital-studio.png'} className={'w-8 md:w-16'}/>
                <img alt={'Furious logo'} src={'/companies/furious.png'} className={'w-30 md:w-60'}/>
            </div>
        </div>
    );
};

export default TrustedUsLogos;