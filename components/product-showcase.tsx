import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, ShoppingBag } from "lucide-react";
import { getProductsFromSupabase, CATEGORY_PATHS } from "@/lib/product-utils";
import Image from "next/image";

export async function ProductShowcase() {
  // 从不同分类获取一些产品作为特色展示
  const shortSleeveProducts = (
    await getProductsFromSupabase(CATEGORY_PATHS.shortSleeve)
  ).slice(0, 1);
  const leatherShoesProducts = (
    await getProductsFromSupabase(CATEGORY_PATHS.leatherShoes)
  ).slice(0, 1);
  const sweatersProducts = (
    await getProductsFromSupabase(CATEGORY_PATHS.sweaters)
  ).slice(0, 1);
  const watchesProducts = (
    await getProductsFromSupabase(CATEGORY_PATHS.watches)
  ).slice(0, 1);

  // 合并产品并添加徽章
  const featuredProducts = [
    ...shortSleeveProducts.map((p) => ({ ...p, badge: "热卖" })),
    ...leatherShoesProducts.map((p) => ({ ...p, badge: "精选" })),
    ...sweatersProducts.map((p) => ({ ...p, badge: "限时优惠" })),
    ...watchesProducts.map((p) => ({ ...p, badge: "精选" })),
  ].slice(0, 4); // 确保只显示4个产品

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
                <Image
                  src={product.image}
                  alt={product.name}
                  width={300}
                  height={300}
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
                <p className="text-lg font-bold text-primary mb-3">
                  {product.price}
                </p>
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
