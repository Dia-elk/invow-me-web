import React from 'react';
import UnderLogoTitle from "@/app/components/UnderLogoTitle";

import HowItWorksSection from "@/app/components/sections/HowItWorksSection";
import FaqSection from "@/app/components/sections/FaqSection";
import FeedbackSection from "@/app/components/sections/FeedbackSection";

const Page = () => {
    return (
        <div>
            <UnderLogoTitle title={'Comment ça marche'}/>
            <HowItWorksSection/>
            <FaqSection/>
            <FeedbackSection/>
        </div>
    );
};

export default Page;