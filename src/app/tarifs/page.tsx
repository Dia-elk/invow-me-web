import React from 'react';
import UnderLogoTitle from "@/app/components/UnderLogoTitle";
import PlansSection from "@/app/components/sections/PlansSection";
import FeaturesSection from "@/app/components/sections/FeaturesSection";
import FaqSection from "@/app/components/sections/FaqSection";
import FeedbackSection from "@/app/components/sections/FeedbackSection";

const Page = () => {
    return (
        <div>
            <UnderLogoTitle title={'Tarifs'}/>
            <PlansSection/>
            <FeaturesSection/>
            <FaqSection/>
            <FeedbackSection/>
        </div>
    );
};

export default Page;