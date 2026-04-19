import { CanvasHero } from "@/sections/lander/canvas-3/hero";
import { CanvasPhilosophy } from "@/sections/lander/canvas/philosophy";
import { CanvasFeatures } from "@/sections/lander/canvas/features";
import { CanvasHowItWorks } from "@/sections/lander/canvas/how-it-works";
// import { CanvasTestimonial } from "@/sections/lander/canvas/testimonials";
import { CanvasFAQ } from "@/sections/lander/canvas/faq";
import { CanvasCTA } from "@/sections/lander/canvas/cta";
import { CanvasSignupForm } from "@/sections/lander/canvas/signup-form";
import { CanvasDemo } from "@/sections/lander/canvas/demo";

const CanvasIntegration = () => {
    return (
        <div className="min-h-screen">
            <main>
                <CanvasHero />
                <CanvasPhilosophy />
                <CanvasFeatures />
                <CanvasHowItWorks />
                <CanvasDemo />
                <CanvasSignupForm />
                {/* <CanvasTestimonial /> */}
                <CanvasFAQ />
                <CanvasCTA />
            </main>
        </div>
    );
};

export default CanvasIntegration;
