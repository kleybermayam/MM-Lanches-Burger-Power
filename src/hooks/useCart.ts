import { useState, useCallback } from "react";
import { MenuItem } from "@/data/menu";

export type CartItem = MenuItem & { quantity: number };

export function useCart() {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const addItem = useCallback((item: MenuItem) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
    setIsOpen(true);
  }, []);

  const removeItem = useCallback((id: string) => {
    setItems((prev) => prev.filter((i) => i.id !== id));
  }, []);

  const updateQuantity = useCallback((id: string, delta: number) => {
    setItems((prev) =>
      prev
        .map((i) =>
          i.id === id ? { ...i, quantity: i.quantity + delta } : i
        )
        .filter((i) => i.quantity > 0)
    );
  }, []);

  const total = items.reduce((sum, i) => sum + i.price * i.quantity, 0);
  const count = items.reduce((sum, i) => sum + i.quantity, 0);

  const sendToWhatsApp = useCallback(() => {
    if (items.length === 0) return;
    const lines = items.map(
      (i) => `• ${i.quantity}x ${i.name} - R$ ${(i.price * i.quantity).toFixed(2)}`
    );
    const msg = `🍔 *Pedido MM Lanches*\n\n${lines.join("\n")}\n\n*Total: R$ ${total.toFixed(2)}*`;
    const encoded = encodeURIComponent(msg);
    window.open(`https://wa.me/558998418790?text=${encoded}`, "_blank");
  }, [items, total]);

  return { items, isOpen, setIsOpen, addItem, removeItem, updateQuantity, total, count, sendToWhatsApp };
}
