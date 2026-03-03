import heroBurger from "@/assets/hero-burger.jpg";

const HeroSection = () => {
  return (
    <section className="relative h-[70vh] md:h-[80vh] w-full overflow-hidden">
      <img
        src={heroBurger}
        alt="Hambúrguer artesanal MM Lanches"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="hero-overlay absolute inset-0" />
      <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center">
        <div className="max-w-xl animate-fade-in">
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-display leading-none tracking-wider text-foreground">
            SABOR QUE<br />
            <span className="brand-gradient-text">CONQUISTA</span>
          </h2>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-md">
            Os melhores lanches da cidade, feitos com ingredientes selecionados e muito sabor.
          </p>
          <a
            href="#cardapio"
            className="mt-6 inline-block px-8 py-3 rounded-lg brand-gradient text-primary-foreground font-bold text-lg hover:opacity-90 transition-opacity"
          >
            VER CARDÁPIO
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
