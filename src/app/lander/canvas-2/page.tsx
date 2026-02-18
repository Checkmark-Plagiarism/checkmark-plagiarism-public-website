import { Canvas2Hero } from "@/sections/lander/canvas/hero-2";
// import { CanvasSignupForm } from "@/components/canvas/CanvasSignupForm";
import { CanvasFeatures } from "@/sections/lander/canvas/features";
import { CanvasHowItWorks } from "@/sections/lander/canvas/how-it-works";
import { CanvasTestimonial } from "@/sections/lander/canvas/testimonials";
import { CanvasCTA } from "@/sections/lander/canvas/cta";

const CanvasIntegration = () => {
    return (
        <div className="min-h-screen">
            <main>
                <Canvas2Hero />
                <CanvasFeatures />
                <CanvasHowItWorks />
                <CanvasTestimonial />
                <CanvasCTA />
            </main>
        </div>
    );
};

export default CanvasIntegration;
