import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const categories = [
  {
    title: "皮具精品",
    description: "高品质皮革制品，展现优雅品味",
    image: "/cloth/皮具皮饰/皮鞋/PX S1001 1180.JPG",
    href: "/leather",
    badge: "精选",
  },
  {
    title: "时尚手表",
    description: "精准计时，彰显个人风格",
    image: "/cloth/手表/CW 手表/CW AR001L0 6980.jpg",
    href: "/watches",
    badge: "热销",
  },
  {
    title: "长袖系列",
    description: "舒适保暖，时尚百搭",
    image: "/cloth/长袖/CS/CS01041 368.JPG",
    href: "/long-sleeve",
    badge: "新品上市",
  },
];

export function FeaturedCategories() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
            精选分类
          </h2>
          <p className="text-lg text-muted-foreground text-balance">
            发现适合您的时尚单品
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={category.image || "/placeholder.svg"}
                  alt={category.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
                    {category.badge}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              </div>

              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                <p className="text-muted-foreground mb-4">
                  {category.description}
                </p>
                <Button asChild className="w-full">
                  <Link href={category.href}>立即选购</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
