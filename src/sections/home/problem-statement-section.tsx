import { TrendingUp, AlertCircle, Users } from "lucide-react";
import { Card } from "@/components/ui/card";

const stats = [
  {
    icon: TrendingUp,
    value: "60%",
    label: "educators worry about AI-written work",
  },
  {
    icon: AlertCircle,
    value: "3x",
    label: "rise in flagged plagiarism since 2022",
  },
  {
    icon: Users,
    value: "89%",
    label: "students want clear AI guidance",
  },
];

export const ProblemStatement = () => {
  return (
    <section className="pt-20 pb-30 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-heading-1 text-foreground mb-6">
              Academic integrity in the AI era—built for Canvas & Google Classroom
            </h2>
            <p className="text-body-lg text-muted-foreground mb-6">
              Detect AI writing, check originality, and auto-grade—seamlessly inside your LMS.
            </p>
            <p className="text-body text-muted-foreground">
              Get transparent reports, rubric-aligned autograding, and workflows that support learning—not suspicion.
            </p>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-brand-500/20 to-accent/20 p-8 flex items-center justify-center">
              <div className="w-full h-full rounded-xl bg-white shadow-strong flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-brand-500/10 flex items-center justify-center">
                    <AlertCircle className="w-10 h-10 text-brand-500" />
                  </div>
                  <p className="text-2xl font-bold text-foreground">
                    Trust what students submit—every time
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-20">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="p-8 text-center shadow-soft hover:shadow-medium transition-smooth border-2"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-brand-500/10 flex items-center justify-center">
                <stat.icon className="w-7 h-7 text-brand-500" />
              </div>
              <div className="text-4xl font-bold text-brand-500 mb-2">{stat.value}</div>
              <p className="text-muted-foreground font-medium">{stat.label}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
export default ProblemStatement;
