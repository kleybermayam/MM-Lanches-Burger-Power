import { ShoppingCart } from "lucide-react";

type HeaderProps = {
  cartCount: number;
  onCartClick: () => void;
};

const Header = ({ cartCount, onCartClick }: HeaderProps) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <h1 className="text-3xl font-display brand-gradient-text">MM LANCHES</h1>
        <button
          onClick={onCartClick}
          className="relative p-2 rounded-lg bg-muted hover:bg-primary/20 transition-colors"
          aria-label="Abrir carrinho"
        >
          <ShoppingCart className="h-6 w-6 text-foreground" />
          {cartCount > 0 && (
            <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full brand-gradient text-primary-foreground text-xs flex items-center justify-center font-bold">
              {cartCount}
            </span>
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;
