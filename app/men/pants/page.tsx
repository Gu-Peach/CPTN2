import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { getProductsFromSupabase, CATEGORY_PATHS } from "@/lib/product-utils";

export const dynamic = 'force-dynamic';

export default async function PantsPage() {
  // 动态获取裤子产品
  const products = await getProductsFromSupabase(CATEGORY_PATHS.pants);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">裤子系列</h1>
        <p className="text-muted-foreground">
          探索我们精选的男士裤子系列，从休闲到正式，满足您的各种需求。 共找到{" "}
          {products.length} 件商品。
        </p>
      </div>

      {products.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-muted-foreground">暂无商品</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card
              key={product.id}
              className="group cursor-pointer hover:shadow-lg transition-shadow"
            >
              <CardContent className="p-4">
                <div className="aspect-square relative mb-4 overflow-hidden rounded-lg">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-sm line-clamp-2">
                    {product.name}
                  </h3>
                  <p className="text-lg font-bold text-primary">
                    {product.price}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
