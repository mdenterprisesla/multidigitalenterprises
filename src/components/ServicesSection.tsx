import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const packages = [
  {
    name: "1-Page Website",
    price: "$300",
    bestFor: "Startups & solo businesses that need a simple online presence fast.",
    features: [
      "Custom single-page design",
      "Mobile-responsive layout",
      "Contact form included",
      "Basic SEO setup",
      "Fast 5-day turnaround",
    ],
  },
  {
    name: "1-Page + Scheduling",
    price: "$350",
    bestFor: "Service providers who need clients to book appointments online.",
    features: [
      "Everything in 1-Page Website",
      "Online scheduling system",
      "Calendar integration",
      "Automated confirmations",
      "Fast 5-day turnaround",
    ],
    popular: true,
  },
  {
    name: "Multi-Page Website",
    price: "$500",
    bestFor: "Growing businesses that need multiple pages (About, Services, Contact, etc.).",
    features: [
      "Up to 5 custom pages",
      "Mobile-responsive design",
      "Contact form included",
      "Advanced SEO setup",
      "7-day turnaround",
    ],
  },
  {
    name: "Multi-Page + Scheduling",
    price: "$525",
    bestFor: "Established businesses that want a full website with booking capabilities.",
    features: [
      "Everything in Multi-Page Website",
      "Online scheduling system",
      "Calendar integration",
      "Automated confirmations",
      "7-day turnaround",
    ],
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the package that fits your business. No contracts, no surprises — just a great website at an affordable price.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`relative bg-card rounded-xl p-6 shadow-sm border transition-shadow hover:shadow-lg flex flex-col ${
                pkg.popular ? "border-accent ring-2 ring-accent" : "border-border"
              }`}
            >
              {pkg.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-full">
                  Most Popular
                </span>
              )}
              <h3 className="text-lg font-bold text-foreground mb-1">{pkg.name}</h3>
              <p className="text-3xl font-extrabold text-primary mb-2">{pkg.price}</p>
              <p className="text-sm text-muted-foreground mb-5">{pkg.bestFor}</p>
              <ul className="space-y-2 mb-6 flex-1">
                {pkg.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-foreground">
                    <Check className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <Button variant={pkg.popular ? "cta" : "outline"} className="w-full" asChild>
                <a href="#contact">Get Started</a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
