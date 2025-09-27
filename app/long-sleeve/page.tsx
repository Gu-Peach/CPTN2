import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  getAllSubCategoryProducts,
  SUB_CATEGORY_PATHS,
  SUB_CATEGORY_INFO,
} from "@/lib/product-utils";
import Image from "next/image";

export default async function LongSleevePage() {
  // 获取所有长袖子分类的产品
  const subCategoryProducts = await getAllSubCategoryProducts("CX", [
    SUB_CATEGORY_PATHS.longSleeveShirts,
    SUB_CATEGORY_PATHS.longSleeveTShirts,
  ]);

  const allProducts = [
    ...subCategoryProducts[SUB_CATEGORY_PATHS.longSleeveShirts],
    ...subCategoryProducts[SUB_CATEGORY_PATHS.longSleeveTShirts],
  ];

  const ProductGrid = ({ products }: { products: any[] }) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product) => (
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
          </div>

          <CardContent className="p-4">
            <h3 className="font-semibold mb-2 text-balance">{product.name}</h3>
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
  );

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative h-[300px] bg-gradient-to-r from-primary/20 to-accent/20">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
                长袖系列
              </h1>
              <p className="text-lg text-muted-foreground text-balance">
                舒适长袖，品质生活的完美选择
              </p>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold">
                长袖商品 ({allProducts.length})
              </h2>
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

            <Tabs defaultValue="all" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="all">全部商品</TabsTrigger>
                <TabsTrigger value="shirts">
                  衬衫 (
                  {
                    subCategoryProducts[SUB_CATEGORY_PATHS.longSleeveShirts]
                      .length
                  }
                  )
                </TabsTrigger>
                <TabsTrigger value="tshirts">
                  T恤 (
                  {
                    subCategoryProducts[SUB_CATEGORY_PATHS.longSleeveTShirts]
                      .length
                  }
                  )
                </TabsTrigger>
              </TabsList>

              <TabsContent value="all">
                {allProducts.length > 0 ? (
                  <ProductGrid products={allProducts} />
                ) : (
                  <div className="text-center py-12">
                    <p className="text-lg text-muted-foreground">暂无商品</p>
                  </div>
                )}
              </TabsContent>

              <TabsContent value="shirts">
                {subCategoryProducts[SUB_CATEGORY_PATHS.longSleeveShirts]
                  .length > 0 ? (
                  <ProductGrid
                    products={
                      subCategoryProducts[SUB_CATEGORY_PATHS.longSleeveShirts]
                    }
                  />
                ) : (
                  <div className="text-center py-12">
                    <p className="text-lg text-muted-foreground">
                      暂无衬衫商品
                    </p>
                  </div>
                )}
              </TabsContent>

              <TabsContent value="tshirts">
                {subCategoryProducts[SUB_CATEGORY_PATHS.longSleeveTShirts]
                  .length > 0 ? (
                  <ProductGrid
                    products={
                      subCategoryProducts[SUB_CATEGORY_PATHS.longSleeveTShirts]
                    }
                  />
                ) : (
                  <div className="text-center py-12">
                    <p className="text-lg text-muted-foreground">暂无T恤商品</p>
                  </div>
                )}
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
