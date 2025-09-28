import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { getProductsFromSupabase } from "@/lib/product-utils";
import Image from "next/image";
import Link from "next/link";

export default async function WomenPage() {
  // 根据 Supabase 存储结构定义女装分类 - 只有最右边的7个文件夹
  const categories = [
    { path: "woman/ND NF NY", name: "ND NF NY", href: "/women/nd-nf-ny" },
    { path: "woman/NK", name: "NK", href: "/women/nk" },
    { path: "woman/NQ", name: "NQ", href: "/women/nq" },
    { path: "woman/NS", name: "NS", href: "/women/ns" },
    { path: "woman/NT", name: "NT", href: "/women/nt" },
    { path: "woman/NX", name: "NX", href: "/women/nx" },
    { path: "woman/PX", name: "PX", href: "/women/px" },
  ];

  // 获取每个分类的前4个产品
  const categoryProducts = await Promise.all(
    categories.map(async (category) => {
      try {
        const products = await getProductsFromSupabase(category.path);
        return {
          ...category,
          products: products.slice(0, 4),
        };
      } catch (error) {
        return {
          ...category,
          products: [],
        };
      }
    })
  );

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative h-[400px] bg-gradient-to-r from-pink-100 to-purple-100 dark:from-pink-900/20 dark:to-purple-900/20">
          <div className="absolute inset-0 bg-black/5"></div>
          <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 text-balance">
                女子系列
              </h1>
              <p className="text-lg text-muted-foreground text-balance">
                专为女性设计的时尚运动装备
              </p>
            </div>
          </div>
        </section>

        {/* Category Sections */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold">女子商品</h2>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  价格排序
                </Button>
                <Button variant="outline" size="sm">
                  最新上架
                </Button>
                <Button variant="outline" size="sm">
                  热销排序
                </Button>
              </div>
            </div>

            {/* 动态渲染每个分类 */}
            {categoryProducts.map((category) => (
              <div key={category.path} className="mb-12">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold">
                    {category.name} 系列
                  </h3>
                  <Link href={category.href}>
                    <Button variant="outline" size="sm">
                      查看更多 →
                    </Button>
                  </Link>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {category.products.length > 0 ? (
                    category.products.map((product) => (
                      <Card
                        key={product.id}
                        className="group overflow-hidden border-0 shadow-md hover:shadow-lg transition-all duration-300"
                      >
                        <div className="relative overflow-hidden">
                          <Image
                            src={product.image || "/placeholder.svg"}
                            alt={product.name}
                            width={300}
                            height={300}
                            className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                          />
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
                    ))
                  ) : (
                    <div className="col-span-4 text-center py-12 text-muted-foreground">
                      暂无商品
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
