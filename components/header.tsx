"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Heart, ShoppingBag, Menu, X, ChevronDown } from "lucide-react";

const categories = [
  {
    name: "男子",
    href: "/men",
    subcategories: [
      { name: "夹克系列", href: "/men/jackets" },
      { name: "风衣系列", href: "/men/trench-coats" },
      { name: "西装系列", href: "/men/suits" },
      { name: "裤子系列", href: "/men/pants" },
    ],
  },
  {
    name: "女子",
    href: "/women",
    subcategories: [
      { name: "ND NF NY", href: "/women/nd-nf-ny" },
      { name: "NK", href: "/women/nk" },
      { name: "NQ", href: "/women/nq" },
      { name: "NS", href: "/women/ns" },
      { name: "NT", href: "/women/nt" },
      { name: "NX", href: "/women/nx" },
      { name: "PX", href: "/women/px" },
    ],
  },
  {
    name: "皮具皮饰",
    href: "/leather",
    subcategories: [
      { name: "钱包", href: "/leather/wallets" },
      { name: "皮带", href: "/leather/belts" },
      { name: "皮包", href: "/leather/bags" },
      { name: "皮鞋", href: "/leather/shoes" },
      { name: "皮装", href: "/leather/clothing" },
    ],
  },
  {
    name: "羊毛衫",
    href: "/sweaters",
    subcategories: [{ name: "查看全部", href: "/sweaters" }],
  },
  {
    name: "手表",
    href: "/watches",
    subcategories: [
      { name: "手表系列", href: "/watches/watches" },
      { name: "表带系列", href: "/watches/bands" },
    ],
  },
  {
    name: "长袖",
    href: "/long-sleeve",
    subcategories: [
      { name: "衬衫系列", href: "/long-sleeve/shirts" },
      { name: "T恤系列", href: "/long-sleeve/tshirts" },
    ],
  },
  {
    name: "短袖",
    href: "/short-sleeve",
    subcategories: [
      { name: "短袖衬衫", href: "/short-sleeve/shirts" },
      { name: "短袖T恤", href: "/short-sleeve/tshirts" },
    ],
  },
  {
    name: "袖扣",
    href: "/cufflinks",
    subcategories: [{ name: "查看全部", href: "/cufflinks" }],
  },
  {
    name: "袜子围巾",
    href: "/socks-scarves",
    subcategories: [{ name: "查看全部", href: "/socks-scarves" }],
  },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      {/* Top banner */}

      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <img
              src="/6b6cf1d6bb7b344fef1a43b6846ad835.png"
              alt="CAPTAINO Logo"
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {categories.map((category) => (
              <div key={category.name} className="relative group">
                <Link
                  href={category.href}
                  className="flex items-center space-x-1 text-sm font-medium hover:text-accent transition-colors"
                >
                  <span>{category.name}</span>
                  <ChevronDown className="h-4 w-4" />
                </Link>

                {/* Dropdown Menu */}
                <div className="absolute top-full left-0 mt-2 w-48 rounded-md border bg-popover p-2 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  {category.subcategories.map((sub) => (
                    <Link
                      key={sub.name}
                      href={sub.href}
                      className="block px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground rounded-sm transition-colors"
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </nav>

          {/* Search and Actions */}
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input placeholder="搜索" className="w-64 pl-10" />
              </div>
            </div>

            <Button variant="ghost" size="icon">
              <Heart className="h-5 w-5" />
            </Button>

            <Button variant="ghost" size="icon">
              <ShoppingBag className="h-5 w-5" />
            </Button>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t py-4">
            <div className="mb-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input placeholder="搜索" className="w-full pl-10" />
              </div>
            </div>
            <nav className="space-y-2">
              {categories.map((category) => (
                <div key={category.name}>
                  <Link
                    href={category.href}
                    className="block py-2 text-sm font-medium hover:text-accent transition-colors"
                  >
                    {category.name}
                  </Link>
                  <div className="ml-4 space-y-1">
                    {category.subcategories.map((sub) => (
                      <Link
                        key={sub.name}
                        href={sub.href}
                        className="block py-1 text-sm text-muted-foreground hover:text-accent transition-colors"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
