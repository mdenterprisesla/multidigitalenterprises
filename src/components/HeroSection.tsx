import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.png";

const HeroSection = () => {
  return (
    <section className="relative bg-primary pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary-foreground leading-tight">
            Professional Websites for Small Businesses — Starting at $300
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-lg mx-auto md:mx-0">
            We build affordable, mobile-friendly websites that help your small business get found online and attract more customers. Fast turnaround, no hassle.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button variant="hero" size="xl" asChild>
              <a href="#contact">Get Your Website Built</a>
            </Button>
            <Button variant="hero-outline" size="xl" asChild>
              <a href="#services">View Pricing</a>
            </Button>
          </div>
          <p className="text-sm text-primary-foreground/60">
            ✓ No hidden fees &nbsp; ✓ Ready in days, not weeks &nbsp; ✓ 100% satisfaction guarantee
          </p>
        </div>
        <div className="hidden md:block">
          <img
            src={heroImage}
            alt="Small business owner viewing their new professional website"
            className="rounded-2xl shadow-2xl w-full"
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
