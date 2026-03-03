const Footer = () => {
  return (
    <footer className="border-t border-border py-8 mt-8">
      <div className="container mx-auto px-4 text-center">
        <h3 className="text-2xl font-display brand-gradient-text tracking-wider">MM LANCHES</h3>
        <p className="text-muted-foreground text-sm mt-2">
          Os melhores lanches da cidade · Delivery via WhatsApp
        </p>
        <p className="text-muted-foreground text-xs mt-4">
          © {new Date().getFullYear()} MM Lanches. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
