import { DollarSign, Zap, Smartphone, Search, ThumbsUp } from "lucide-react";

const benefits = [
  {
    icon: DollarSign,
    title: "Affordable Pricing",
    desc: "Professional websites starting at just $300. No hidden fees, no long-term contracts.",
  },
  {
    icon: Zap,
    title: "Fast Turnaround",
    desc: "Your website can be live in as little as 5 business days. We respect your time.",
  },
  {
    icon: Smartphone,
    title: "Mobile-Friendly Design",
    desc: "Every website we build looks and works great on phones, tablets, and desktops.",
  },
  {
    icon: Search,
    title: "SEO-Ready Structure",
    desc: "Built with search engines in mind so customers can find your business online.",
  },
  {
    icon: ThumbsUp,
    title: "Simple, Stress-Free Process",
    desc: "We handle everything. Just tell us about your business and we'll take care of the rest.",
  },
];

const WhyChooseUsSection = () => {
  return (
    <section id="why-us" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Small Businesses Choose Us
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We specialize in helping small businesses get online quickly and affordably — without the headaches.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {benefits.map((b) => (
            <div key={b.title} className="text-center space-y-3 p-6">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-accent/10 text-accent">
                <b.icon className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-bold text-foreground">{b.title}</h3>
              <p className="text-sm text-muted-foreground">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
