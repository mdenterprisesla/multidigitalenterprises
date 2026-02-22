import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Placeholder — replace with actual email endpoint
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "We'll get back to you within 24 hours.",
      });
      setForm({ name: "", email: "", phone: "", message: "" });
      setLoading(false);
    }, 800);
  };

  return (
    <section id="contact" className="py-20 bg-primary">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Get Your Business Online?
          </h2>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Fill out the form below for a free consultation. No obligations — just a friendly conversation about how we can help.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <form onSubmit={handleSubmit} className="space-y-4 bg-card rounded-xl p-6 shadow-lg">
            <Input
              placeholder="Your Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
            />
            <Input
              type="email"
              placeholder="Your Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
            />
            <Input
              type="tel"
              placeholder="Your Phone (optional)"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
            />
            <Textarea
              placeholder="Tell us about your business and what you need..."
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              required
            />
            <Button variant="cta" size="lg" className="w-full" type="submit" disabled={loading}>
              {loading ? "Sending..." : "Request a Free Consultation"}
            </Button>
          </form>

          <div className="space-y-6 text-primary-foreground">
            <div>
              <h3 className="text-xl font-bold mb-2">Get In Touch</h3>
              <p className="text-primary-foreground/80 text-sm">
                Prefer to reach out directly? Call or email us anytime. We typically respond within a few hours.
              </p>
            </div>
            <a
              href="tel:"
              className="flex items-center gap-3 text-primary-foreground hover:text-accent transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span className="font-medium">(XXX) XXX-XXXX</span>
            </a>
            <a
              href="mailto:info@multidigitalenterprises.com"
              className="flex items-center gap-3 text-primary-foreground hover:text-accent transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span className="font-medium">info@multidigitalenterprises.com</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
