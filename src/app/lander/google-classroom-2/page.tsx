import { GoogleClassroomHero } from "@/components/sections/lander/google-classroom/hero";
import { GoogleClassroomFeatures } from "@/components/sections/lander/google-classroom/features";
import { GoogleClassroomHowItWorks } from "@/components/sections/lander/google-classroom/how-it-works";
// import { GoogleClassroomSignupForm } from "@/components/sections/lander/google-classroom/signup-form";
import { GoogleClassroomTestimonial } from "@/components/sections/lander/google-classroom/testimonial";
import { GoogleClassroomCTA } from "@/components/sections/lander/google-classroom/cta";

const GoogleClassroom = () => {
    return (
        <div className="min-h-screen">
            <main>
                <GoogleClassroomHero />
                <GoogleClassroomFeatures />
                <GoogleClassroomHowItWorks />
                {/* <GoogleClassroomSignupForm /> */}
                <GoogleClassroomTestimonial />
                <GoogleClassroomCTA />
            </main>
        </div>
    );
};

export default GoogleClassroom;
