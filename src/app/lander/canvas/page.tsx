import { CanvasHero } from "@/components/sections/lander/canvas/hero";
// import { CanvasSignupForm } from "@/components/canvas/CanvasSignupForm";
import { CanvasFeatures } from "@/components/sections/lander/canvas/features";
import { CanvasHowItWorks } from "@/components/sections/lander/canvas/how-it-works";
import { CanvasTestimonial } from "@/components/sections/lander/canvas/testimonials";
import { CanvasCTA } from "@/components/sections/lander/canvas/cta";

const CanvasIntegration = () => {
    return (
        <div className="min-h-screen">
            <main>
                <CanvasHero />
                <CanvasFeatures />
                <CanvasHowItWorks />
                {/* <CanvasSignupForm /> */}
                <CanvasTestimonial />
                <CanvasCTA />
            </main>
        </div>
    );
};

export default CanvasIntegration;
