import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Maria Gonzalez",
    business: "Maria's Cleaning Services",
    text: "I never thought I could afford a professional website. Multi-Digital built mine in less than a week and my phone has been ringing ever since! Best $300 I ever spent.",
  },
  {
    name: "James Parker",
    business: "Parker Home Repairs",
    text: "They made the whole process so easy. I just told them about my business and they handled everything. My customers love the new site and I'm getting more jobs than ever.",
  },
  {
    name: "Aisha Thompson",
    business: "Thompson Tax Prep",
    text: "The scheduling system they added to my website has saved me so much time. Clients can book their own appointments now. Highly recommend Multi-Digital!",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="reviews" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it — hear from small business owners who trust us with their online presence.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-card rounded-xl p-6 shadow-sm border border-border space-y-4"
            >
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-sm text-foreground leading-relaxed">"{t.text}"</p>
              <div>
                <p className="font-semibold text-foreground text-sm">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.business}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
