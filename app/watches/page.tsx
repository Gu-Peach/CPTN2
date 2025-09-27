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

export default async function WatchesPage() {
  // 获取所有手表子分类的产品
  const subCategoryProducts = await getAllSubCategoryProducts("SB", [
    SUB_CATEGORY_PATHS.watches,
    SUB_CATEGORY_PATHS.watchBands,
  ]);

  const allProducts = [
    ...subCategoryProducts[SUB_CATEGORY_PATHS.watches],
    ...subCategoryProducts[SUB_CATEGORY_PATHS.watchBands],
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
                手表系列
              </h1>
              <p className="text-lg text-muted-foreground text-balance">
                精致腕表，时间与品味的完美诠释
              </p>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold">
                手表商品 ({allProducts.length})
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
                <TabsTrigger value="watches">
                  手表 ({subCategoryProducts[SUB_CATEGORY_PATHS.watches].length}
                  )
                </TabsTrigger>
                <TabsTrigger value="bands">
                  表带 (
                  {subCategoryProducts[SUB_CATEGORY_PATHS.watchBands].length})
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

              <TabsContent value="watches">
                {subCategoryProducts[SUB_CATEGORY_PATHS.watches].length > 0 ? (
                  <ProductGrid
                    products={subCategoryProducts[SUB_CATEGORY_PATHS.watches]}
                  />
                ) : (
                  <div className="text-center py-12">
                    <p className="text-lg text-muted-foreground">
                      暂无手表商品
                    </p>
                  </div>
                )}
              </TabsContent>

              <TabsContent value="bands">
                {subCategoryProducts[SUB_CATEGORY_PATHS.watchBands].length >
                0 ? (
                  <ProductGrid
                    products={
                      subCategoryProducts[SUB_CATEGORY_PATHS.watchBands]
                    }
                  />
                ) : (
                  <div className="text-center py-12">
                    <p className="text-lg text-muted-foreground">
                      暂无表带商品
                    </p>
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
