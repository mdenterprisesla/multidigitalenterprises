import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "How much does a website cost?",
    a: "Our websites start at just $300 for a single-page site. Multi-page sites start at $500. There are no hidden fees or surprise charges.",
  },
  {
    q: "How long does it take to build my website?",
    a: "Most single-page websites are completed within 5 business days. Multi-page websites are typically ready in about 7 business days.",
  },
  {
    q: "Will my website show up on Google?",
    a: "Yes! Every website we build includes basic SEO setup so search engines can find and index your site. We structure your pages with the right tags, keywords, and metadata.",
  },
  {
    q: "Do I need to buy a domain and hosting?",
    a: "If you don't already have a domain, we can help you choose and register one. We'll also guide you through hosting options so your site goes live smoothly.",
  },
  {
    q: "What if I need changes after the website is done?",
    a: "We offer affordable maintenance plans for ongoing updates. Small tweaks after launch are included at no extra charge within the first 30 days.",
  },
  {
    q: "What is the scheduling system?",
    a: "It's an online booking tool integrated into your website that lets your customers schedule appointments directly. You get automatic confirmations and calendar syncing.",
  },
  {
    q: "Do I own my website?",
    a: "Absolutely. You own 100% of your website, content, and domain. We build it, hand it over, and you're in full control.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Got questions? We've got answers.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="border border-border rounded-lg px-5 bg-card"
            >
              <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
