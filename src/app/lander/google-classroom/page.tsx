import { GoogleClassroomHero } from "@/sections/lander/google-classroom/hero";
import { GoogleClassroomPhilosophy } from "@/sections/lander/google-classroom/philosophy";
import { GoogleClassroomFeatures } from "@/sections/lander/google-classroom/features";
import { GoogleClassroomHowItWorks } from "@/sections/lander/google-classroom/how-it-works";
import { GoogleClassroomSignupForm } from "@/sections/lander/google-classroom/signup-form";
import { GoogleClassroomCTA } from "@/sections/lander/google-classroom/cta";
import { GoogleClassroomFAQ } from "@/sections/lander/google-classroom/faq";

const GoogleClassroom = () => {
    return (
        <div className="min-h-screen">
            <main>
                <GoogleClassroomHero />
                <GoogleClassroomPhilosophy />
                <GoogleClassroomFeatures />
                <GoogleClassroomHowItWorks />
                <GoogleClassroomSignupForm />
                <GoogleClassroomFAQ />
                <GoogleClassroomCTA />
            </main>
        </div>
    );
};

export default GoogleClassroom;
