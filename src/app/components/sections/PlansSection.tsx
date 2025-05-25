import React from 'react';
import GratouillePack from "@/app/components/packs/GratouillePack";
import PetitTafPack from "@/app/components/packs/PetitTafPack";
import GigaPatron from "@/app/components/packs/GigaPatron";

const PlansSection = () => {
    return (
        <div className={'max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-40 px-8'}>
           <GratouillePack/>
            <PetitTafPack/>
            <GigaPatron/>
        </div>
    );
};

export default PlansSection;