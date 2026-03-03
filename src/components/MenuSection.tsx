import { useState, useMemo } from "react";
import { Search } from "lucide-react";
import { menuItems, MenuItem } from "@/data/menu";
import ProductCard from "./ProductCard";

type MenuSectionProps = {
  onAddItem: (item: MenuItem) => void;
};

const categories = [
  { key: "todos", label: "Todos" },
  { key: "lanches", label: "🍔 Lanches" },
  { key: "bebidas", label: "🥤 Bebidas" },
] as const;

const MenuSection = ({ onAddItem }: MenuSectionProps) => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<string>("todos");

  const filtered = useMemo(() => {
    return menuItems.filter((item) => {
      const matchCategory = category === "todos" || item.category === category;
      const matchSearch =
        search === "" ||
        item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.description.toLowerCase().includes(search.toLowerCase());
      return matchCategory && matchSearch;
    });
  }, [search, category]);

  return (
    <section id="cardapio" className="py-16 container mx-auto px-4">
      <h2 className="text-4xl md:text-5xl font-display text-center tracking-wider text-foreground mb-8">
        NOSSO <span className="brand-gradient-text">CARDÁPIO</span>
      </h2>

      {/* Search */}
      <div className="max-w-md mx-auto mb-6 relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <input
          type="text"
          placeholder="Buscar lanches..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-10 pr-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition"
        />
      </div>

      {/* Categories */}
      <div className="flex justify-center gap-3 mb-10 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat.key}
            onClick={() => setCategory(cat.key)}
            className={`px-5 py-2 rounded-full font-semibold text-sm transition-all ${
              category === cat.key
                ? "brand-gradient text-primary-foreground"
                : "bg-muted text-muted-foreground hover:text-foreground"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filtered.map((item, i) => (
          <ProductCard key={item.id} item={item} onAdd={onAddItem} index={i} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-muted-foreground mt-10 text-lg">
          Nenhum item encontrado.
        </p>
      )}
    </section>
  );
};

export default MenuSection;
