import { CanvasHero } from "@/sections/lander/canvas/hero";
import { CanvasFeatures } from "@/sections/lander/canvas/features";
import { CanvasHowItWorks } from "@/sections/lander/canvas/how-it-works";
// import { CanvasTestimonial } from "@/sections/lander/canvas/testimonials";
import { CanvasCTA } from "@/sections/lander/canvas/cta";
import { CanvasSignupForm } from "@/sections/lander/canvas/signup-form";
import { CanvasDemo } from "@/sections/lander/canvas/demo";

const CanvasIntegration = () => {
    return (
        <div className="min-h-screen">
            <main>
                <CanvasHero />
                <CanvasFeatures />
                <CanvasHowItWorks />
                <CanvasDemo />
                <CanvasSignupForm />
                {/* <CanvasTestimonial /> */}
                <CanvasCTA />
            </main>
        </div>
    );
};

export default CanvasIntegration;
