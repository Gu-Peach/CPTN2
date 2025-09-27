import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const womenProducts = [
  {
    id: 1,
    name: "女士瑜伽套装",
    price: "¥499",
    originalPrice: "¥699",
    image: "/women-yoga-outfit-set.jpg",
    badge: "热销",
    category: "套装",
  },
  {
    id: 2,
    name: "女士跑步鞋",
    price: "¥799",
    originalPrice: "¥1199",
    image: "/women-running-shoes-pink.jpg",
    badge: "新品",
    category: "鞋类",
  },
  {
    id: 3,
    name: "女士运动内衣",
    price: "¥199",
    originalPrice: "¥299",
    image: "/women-sports-bra.jpg",
    badge: "舒适",
    category: "内衣",
  },
  {
    id: 4,
    name: "女士运动外套",
    price: "¥699",
    originalPrice: "¥899",
    image: "/placeholder.svg?height=400&width=400",
    badge: "防风",
    category: "外套",
  },
  {
    id: 5,
    name: "女士健身裤",
    price: "¥399",
    originalPrice: "¥599",
    image: "/placeholder.svg?height=400&width=400",
    badge: "弹性",
    category: "下装",
  },
  {
    id: 6,
    name: "女士运动鞋",
    price: "¥899",
    originalPrice: "¥1299",
    image: "/placeholder.svg?height=400&width=400",
    badge: "轻便",
    category: "鞋类",
  },
];

export default function WomenPage() {
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

        {/* Products Grid */}
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

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {womenProducts.map((product) => (
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
                    <div className="absolute top-3 right-3">
                      <Badge variant="outline" className="bg-background/80">
                        {product.category}
                      </Badge>
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
                    <Button className="w-full" size="sm">
                      立即购买
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
