const Footer = () => {
  return (
    <footer className="bg-foreground py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm text-background/60">
          © {new Date().getFullYear()} Multi-Digital Enterprises. All rights reserved.
        </p>
        <p className="text-xs text-background/40 mt-1">
          Affordable website design for small businesses.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
