import { Plus } from "lucide-react";
import { MenuItem } from "@/data/menu";

type ProductCardProps = {
  item: MenuItem;
  onAdd: (item: MenuItem) => void;
  index: number;
};

const ProductCard = ({ item, onAdd, index }: ProductCardProps) => {
  return (
    <div
      className="bg-card rounded-lg overflow-hidden card-hover border border-border opacity-0 animate-fade-in"
      style={{ animationDelay: `${index * 60}ms` }}
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          loading="lazy"
        />
        <div className="absolute top-3 right-3 bg-primary px-3 py-1 rounded-full">
          <span className="text-primary-foreground font-bold text-sm">
            R$ {item.price.toFixed(2)}
          </span>
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-display text-xl text-foreground tracking-wide">{item.name}</h3>
        <p className="text-muted-foreground text-sm mt-1 line-clamp-2">{item.description}</p>
        <button
          onClick={() => onAdd(item)}
          className="mt-3 w-full py-2.5 rounded-lg brand-gradient text-primary-foreground font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
        >
          <Plus className="h-4 w-4" />
          Adicionar
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
