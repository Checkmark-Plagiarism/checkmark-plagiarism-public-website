import { GoogleClassroomHero } from "@/sections/lander/google-classroom/hero";
import { GoogleClassroomFeatures } from "@/sections/lander/google-classroom/features";
import { GoogleClassroomHowItWorks } from "@/sections/lander/google-classroom/how-it-works";
import { GoogleClassroomSignupForm } from "@/sections/lander/google-classroom/signup-form";
import { GoogleClassroomCTA } from "@/sections/lander/google-classroom/cta";
import { CanvasDemo } from "@/sections/lander/canvas/demo";

const GoogleClassroom = () => {
    return (
        <div className="min-h-screen">
            <main>
                <GoogleClassroomHero />
                <GoogleClassroomFeatures />
                <GoogleClassroomHowItWorks />
                <CanvasDemo />
                <GoogleClassroomSignupForm />
                <GoogleClassroomCTA />
            </main>
        </div>
    );
};

export default GoogleClassroom;
