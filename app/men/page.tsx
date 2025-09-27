import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { getProductsFromDirectory, CATEGORY_PATHS } from "@/lib/product-utils";
import Link from "next/link";
import Image from "next/image";

export default function MenPage() {
  // 获取每个分类的前4个产品
  const jacketProducts = getProductsFromDirectory(CATEGORY_PATHS.jackets).slice(
    0,
    4
  );
  const trenchCoatProducts = getProductsFromDirectory(
    CATEGORY_PATHS.trenchCoats
  ).slice(0, 4);
  const suitProducts = getProductsFromDirectory(CATEGORY_PATHS.suits).slice(
    0,
    4
  );
  const pantsProducts = getProductsFromDirectory(CATEGORY_PATHS.pants).slice(
    0,
    4
  );

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative h-[400px] bg-gradient-to-r from-primary/20 to-accent/20">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 text-balance">
                男子系列
              </h1>
              <p className="text-lg text-muted-foreground text-balance">
                专为男性设计的高品质服装
              </p>
            </div>
          </div>
        </section>

        {/* Category Sections */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold">男子商品</h2>
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

            {/* 夹克分类 */}
            <div className="mb-12">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold">夹克系列</h3>
                <Link href="/men/jackets">
                  <Button variant="outline" size="sm">
                    查看更多 →
                  </Button>
                </Link>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {jacketProducts.map((product) => (
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

            {/* 风衣分类 */}
            <div className="mb-12">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold">风衣系列</h3>
                <Link href="/men/trench-coats">
                  <Button variant="outline" size="sm">
                    查看更多 →
                  </Button>
                </Link>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {trenchCoatProducts.map((product) => (
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

            {/* 西装分类 */}
            <div className="mb-12">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold">西装系列</h3>
                <Link href="/men/suits">
                  <Button variant="outline" size="sm">
                    查看更多 →
                  </Button>
                </Link>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {suitProducts.map((product) => (
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

            {/* 裤子分类 */}
            <div className="mb-12">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold">裤子系列</h3>
                <Link href="/men/pants">
                  <Button variant="outline" size="sm">
                    查看更多 →
                  </Button>
                </Link>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {pantsProducts.map((product) => (
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
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
