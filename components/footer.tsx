import Link from "next/link";

const footerSections = [
  {
    title: "购物指南",
    links: [
      { name: "如何购买", href: "/guide/how-to-buy" },
      { name: "支付方式", href: "/guide/payment" },
      { name: "配送说明", href: "/guide/shipping" },
      { name: "退换货政策", href: "/guide/returns" },
    ],
  },
  {
    title: "客户服务",
    links: [
      { name: "联系我们", href: "/contact" },
      { name: "在线客服", href: "/support" },
      { name: "常见问题", href: "/faq" },
      { name: "尺码指南", href: "/size-guide" },
    ],
  },
  {
    title: "关于我们",
    links: [
      { name: "品牌故事", href: "/about" },
      { name: "招聘信息", href: "/careers" },
      { name: "新闻资讯", href: "/news" },
      { name: "合作伙伴", href: "/partners" },
    ],
  },
  {
    title: "关注我们",
    links: [
      { name: "微信公众号", href: "#" },
      { name: "微博", href: "#" },
      { name: "抖音", href: "#" },
      { name: "小红书", href: "#" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-2">
              <div className="h-6 w-6 rounded bg-primary-foreground"></div>
            </div>
            <p className="text-sm text-primary-foreground/80">
              © 2025 CAPTAINO. 保留所有权利。
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
