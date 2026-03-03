import { X, Plus, Minus, Trash2, MessageCircle } from "lucide-react";
import { CartItem } from "@/hooks/useCart";

type CartSidebarProps = {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  total: number;
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemove: (id: string) => void;
  onCheckout: () => void;
};

const CartSidebar = ({
  isOpen,
  onClose,
  items,
  total,
  onUpdateQuantity,
  onRemove,
  onCheckout,
}: CartSidebarProps) => {
  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-background/60 backdrop-blur-sm z-50"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-card border-l border-border z-50 flex flex-col transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-border">
          <h3 className="text-2xl font-display tracking-wider text-foreground">SEU PEDIDO</h3>
          <button onClick={onClose} className="p-2 hover:bg-muted rounded-lg transition-colors">
            <X className="h-5 w-5 text-muted-foreground" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-hide">
          {items.length === 0 ? (
            <p className="text-center text-muted-foreground mt-10">
              Seu carrinho está vazio
            </p>
          ) : (
            items.map((item) => (
              <div
                key={item.id}
                className="flex gap-3 bg-muted rounded-lg p-3"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-foreground text-sm truncate">{item.name}</h4>
                  <p className="text-primary font-bold text-sm">
                    R$ {(item.price * item.quantity).toFixed(2)}
                  </p>
                  <div className="flex items-center gap-2 mt-1">
                    <button
                      onClick={() => onUpdateQuantity(item.id, -1)}
                      className="p-1 rounded bg-border hover:bg-primary/20 transition-colors"
                    >
                      <Minus className="h-3 w-3 text-foreground" />
                    </button>
                    <span className="text-foreground font-semibold text-sm w-5 text-center">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => onUpdateQuantity(item.id, 1)}
                      className="p-1 rounded bg-border hover:bg-primary/20 transition-colors"
                    >
                      <Plus className="h-3 w-3 text-foreground" />
                    </button>
                    <button
                      onClick={() => onRemove(item.id)}
                      className="ml-auto p-1 rounded hover:bg-destructive/20 transition-colors"
                    >
                      <Trash2 className="h-3.5 w-3.5 text-destructive" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="p-4 border-t border-border space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground font-semibold">Total</span>
              <span className="text-2xl font-display tracking-wider text-foreground">
                R$ {total.toFixed(2)}
              </span>
            </div>
            <button
              onClick={onCheckout}
              className="w-full py-3 rounded-lg bg-[hsl(142,70%,40%)] hover:bg-[hsl(142,70%,35%)] text-[hsl(0,0%,100%)] font-bold text-lg flex items-center justify-center gap-2 transition-colors"
            >
              <MessageCircle className="h-5 w-5" />
              Finalizar pelo WhatsApp
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartSidebar;
