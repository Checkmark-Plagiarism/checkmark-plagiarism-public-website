const HowItWorksSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              How It Works
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                Teachers often spot copied work by looking at revision history.
                Checkmark automates this process using thousands of writing style patterns — making detection faster, more reliable, and more transparent.
              </p>
              <p className="text-foreground font-medium">
                You can focus on reviewing authentic student work, already auto-graded for your convenience.
              </p>
            </div>
          </div>

          {/* Comparison Visual */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
            <div className="bg-card rounded-xl p-6 shadow-card border border-green-200">
              <div className="h-4 bg-secondary rounded mb-4"></div>
              <h3 className="font-semibold text-lg mb-3 text-secondary">Authentic Writing</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  <div className="h-2 bg-secondary/30 rounded flex-1"></div>
                </div>
                <div className="flex items-center gap-2 ml-4">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  <div className="h-2 bg-secondary/50 rounded flex-1"></div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  <div className="h-2 bg-secondary/40 rounded flex-1"></div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                Shows natural typing and revision flow
              </p>
            </div>

            <div className="bg-card rounded-xl p-6 shadow-card border border-red-200">
              <div className="h-4 bg-destructive rounded mb-4"></div>
              <h3 className="font-semibold text-lg mb-3 text-destructive">Copied Writing</h3>
              <div className="space-y-2">
                <div className="h-2 bg-destructive/80 rounded"></div>
                <div className="h-2 bg-destructive/60 rounded"></div>
                <div className="h-2 bg-destructive/70 rounded"></div>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                Shows pasted or transcribed text with no writing process
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
