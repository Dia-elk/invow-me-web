import HeroSection from "@/app/components/sections/HeroSection";
import FeaturesSection from "@/app/components/sections/FeaturesSection";
import TrustedUsLogos from "@/app/components/sections/TrustedUsLogos";
import React from "react";
import PlansSection from "@/app/components/sections/PlansSection";
import FaqSection from "@/app/components/sections/FaqSection";
import HowItWorksSection from "@/app/components/sections/HowItWorksSection";
import FeedbackSection from "@/app/components/sections/FeedbackSection";


export default function Home() {
    return (
        <>
            <HeroSection/>
            <TrustedUsLogos/>
            <FeaturesSection/>
            <PlansSection/>
            <HowItWorksSection/>
            <FaqSection/>
            <FeedbackSection/>
        </>
    );
}
