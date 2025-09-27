import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, ShoppingBag } from "lucide-react";

const featuredProducts = [
  {
    id: "1",
    name: "经典短袖T恤",
    price: "¥488",
    originalPrice: "¥588",
    image: "/cloth/短袖/CS/CSJ4338 488.JPG",
    colors: ["黑色", "白色", "灰色"],
    badge: "热卖",
  },
  {
    id: "2",
    name: "精品皮鞋",
    price: "¥1180",
    originalPrice: "¥1380",
    image: "/cloth/皮具皮饰/皮鞋/PX S1002 1180.JPG",
    colors: ["棕色", "黑色"],
    badge: "精选",
  },
  {
    id: "3",
    name: "羊毛衫",
    price: "¥780",
    originalPrice: "¥980",
    image: "/cloth/羊毛衫/YM07047 780.JPG",
    colors: ["米色", "深蓝", "酒红"],
    badge: "限时优惠",
  },
  {
    id: "4",
    name: "时尚手表",
    price: "¥6980",
    originalPrice: "¥7980",
    image: "/cloth/手表/CW 手表/CW AR002L0 6980.jpg",
    colors: ["银色", "金色"],
    badge: "精选",
  },
];

export function ProductShowcase() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">热门商品</h2>
            <p className="text-lg text-muted-foreground">精选优质时尚单品</p>
          </div>
          <Button variant="outline" asChild>
            <Link href="/products">查看全部</Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <Card
              key={product.id}
              className="group overflow-hidden border-0 shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3">
                  <Badge
                    variant="secondary"
                    className="bg-accent text-accent-foreground"
                  >
                    {product.badge}
                  </Badge>
                </div>
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex flex-col gap-2">
                    <Button size="icon" variant="secondary" className="h-8 w-8">
                      <Heart className="h-4 w-4" />
                    </Button>
                    <Button size="icon" variant="secondary" className="h-8 w-8">
                      <ShoppingBag className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>

              <CardContent className="p-4">
                <h3 className="font-semibold mb-2 text-balance">
                  {product.name}
                </h3>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-lg font-bold text-accent">
                    {product.price}
                  </span>
                  <span className="text-sm text-muted-foreground line-through">
                    {product.originalPrice}
                  </span>
                </div>
                <div className="flex flex-wrap gap-1 mb-3">
                  {product.colors.map((color, index) => (
                    <span
                      key={index}
                      className="text-xs bg-muted px-2 py-1 rounded"
                    >
                      {color}
                    </span>
                  ))}
                </div>
                <Button className="w-full" size="sm">
                  立即购买
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
