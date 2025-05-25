import React from 'react';
import UnderLogoTitle from "@/app/components/UnderLogoTitle";
import FeedbackSection from "@/app/components/sections/FeedbackSection";
import FaqSection from "@/app/components/sections/FaqSection";
import FeaturesSection from "@/app/components/sections/FeaturesSection";

const Page = () => {
    return (
        <div>
            <UnderLogoTitle title={'Fonctionnalités'}/>
            <FeaturesSection/>
            <FaqSection/>
            <FeedbackSection/>
        </div>
    );
};

export default Page;