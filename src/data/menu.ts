import xburger from "@/assets/xburger.jpg";
import xsalada from "@/assets/xsalada.jpg";
import gameover from "@/assets/gameover.jpg";
import xfrango from "@/assets/xfrango.jpg";
import xcalabresa from "@/assets/xcalabresa.jpg";
import saboroso from "@/assets/saboroso.jpg";
import xtudo from "@/assets/xtudo.jpg";
import beruti from "@/assets/beruti.jpg";
import cocacola from "@/assets/cocacola.jpg";

export type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: "lanches" | "bebidas";
};

export const menuItems: MenuItem[] = [
  {
    id: "xburger",
    name: "X-Burger",
    description: "Pão bola, hambúrguer, presunto, mussarela e salada",
    price: 8,
    image: xburger,
    category: "lanches",
  },
  {
    id: "xsalada",
    name: "X-Salada",
    description: "Pão bola, hambúrguer duplo, ovo, mussarela, presunto e salada",
    price: 10,
    image: xsalada,
    category: "lanches",
  },
  {
    id: "americano",
    name: "Americano",
    description: "Pão bola, presunto, ovo, mussarela, salada e maionese",
    price: 9,
    image: xburger,
    category: "lanches",
  },
  {
    id: "gameover",
    name: "Game Over",
    description: "Pão bola, salsicha, ovo, bacon, presunto, mussarela e salada",
    price: 11,
    image: gameover,
    category: "lanches",
  },
  {
    id: "xfrango",
    name: "X-Frango",
    description: "Pão bola, frango desfiado, mussarela e salada",
    price: 9,
    image: xfrango,
    category: "lanches",
  },
  {
    id: "xcalabresa",
    name: "X-Calabresa",
    description: "Pão bola, calabresa, mussarela, presunto, catupiry e salada",
    price: 12,
    image: xcalabresa,
    category: "lanches",
  },
  {
    id: "saboroso",
    name: "Saboroso",
    description: "Pão bola, hambúrguer, bacon, mussarela e salada",
    price: 12,
    image: saboroso,
    category: "lanches",
  },
  {
    id: "bauru",
    name: "Bauru",
    description: "Pão bola, presunto, ovo, mussarela, tomate e salada",
    price: 8,
    image: xsalada,
    category: "lanches",
  },
  {
    id: "xcalabresa-especial",
    name: "X-Calabresa Especial",
    description: "Pão bola, hambúrguer, calabresa, mussarela, presunto e salada",
    price: 10,
    image: xcalabresa,
    category: "lanches",
  },
  {
    id: "xtudo",
    name: "X-Tudo",
    description: "Pão bola, hambúrguer, ovo, bacon, calabresa, presunto e mussarela",
    price: 14,
    image: xtudo,
    category: "lanches",
  },
  {
    id: "beruti",
    name: "Beruti",
    description: "Pão árabe, hambúrguer, ovo, bacon, calabresa, presunto, mussarela, alface, tomate, catupiry, cheddar e frango desfiado",
    price: 20,
    image: beruti,
    category: "lanches",
  },
  {
    id: "coca-lata",
    name: "Coca-Cola Lata",
    description: "Coca-Cola lata 350ml",
    price: 5,
    image: cocacola,
    category: "bebidas",
  },
  {
    id: "coca-1l",
    name: "Coca-Cola 1L",
    description: "Coca-Cola 1 litro",
    price: 10,
    image: cocacola,
    category: "bebidas",
  },
  {
    id: "coca-2l",
    name: "Coca-Cola 2L",
    description: "Coca-Cola 2 litros",
    price: 13,
    image: cocacola,
    category: "bebidas",
  },
];
