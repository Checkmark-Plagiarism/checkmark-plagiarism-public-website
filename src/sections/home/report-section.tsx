import { Play, FileText, Eye } from "lucide-react";
import Image from "next/image";

const plagiarismReportImage = "";
const ReportSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="bg-card rounded-2xl shadow-large overflow-hidden border">
              <Image
                src={plagiarismReportImage} 
                alt="Plagiarism report interface" 
                className="w-full h-auto"
                height={"50"}
                width={"50"}
              />
            </div>
            
            {/* Floating playback control */}
            <div className="absolute bottom-4 left-4 bg-primary text-primary-foreground px-4 py-2 rounded-lg shadow-medium flex items-center gap-2">
              <Play size={16} />
              <span className="text-sm font-medium">Typing Playback</span>
            </div>
          </div>

          <div className="space-y-8 order-1 lg:order-2">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Inside the{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Plagiarism Report
                </span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Checkmark Plagiarism gives teachers a transparent, detailed report based on typing patterns and revision history.
              </p>
              <p className="text-lg text-foreground font-medium">
                With typing playback, you can see exactly how a student wrote their essay — making detection clear and reliable.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="bg-destructive/10 p-3 rounded-lg">
                  <FileText className="text-destructive" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    Sample Plagiarism Report
                  </h3>
                  <p className="text-muted-foreground">
                    Shows flagged passages with detailed analysis.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Eye className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    Typing Playback
                  </h3>
                  <p className="text-muted-foreground">
                    Replay the writing process in real time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReportSection;
