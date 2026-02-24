import { MSPHero } from "@/sections/lander/msp/hero";
import { MSPFeatures } from "@/sections/lander/msp/features";
import { MSPHowItWorks } from "@/sections/lander/msp/how-it-works";
import { MSPCTA } from "@/sections/lander/msp/cta";
import { CanvasDemo } from "@/sections/lander/canvas/demo";

const MSP = () => {
    return (
        <div className="min-h-screen">
            <main>
                <MSPHero />
                <MSPFeatures />
                <MSPHowItWorks />
                <CanvasDemo />
                <MSPCTA />
            </main>
        </div>
    );
};

export default MSP;
