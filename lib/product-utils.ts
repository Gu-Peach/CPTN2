import fs from "fs";
import path from "path";

export interface Product {
  id: string;
  name: string;
  image: string;
  price: string;
}

export function getProductsFromDirectory(categoryPath: string): Product[] {
  try {
    const fullPath = path.join(process.cwd(), "public", categoryPath);

    // 检查目录是否存在
    if (!fs.existsSync(fullPath)) {
      console.warn(`Directory not found: ${fullPath}`);
      return [];
    }

    const files = fs.readdirSync(fullPath);

    // 过滤出图片文件
    const imageFiles = files.filter((file) => {
      const ext = path.extname(file).toLowerCase();
      return (
        [".jpg", ".jpeg", ".png", ".webp"].includes(ext) &&
        !file.startsWith(".")
      );
    });

    // 转换为产品对象
    const products: Product[] = imageFiles.map((file, index) => {
      const nameWithoutExt = path.parse(file).name;
      // 从文件名中提取价格（如果存在）
      const priceMatch = nameWithoutExt.match(/(\d+)$/);
      const price = priceMatch ? `¥${priceMatch[1]}` : "价格待定";

      // 从商品名称中移除价格部分，只保留商品编号
      const nameWithoutPrice = priceMatch
        ? nameWithoutExt.replace(/\s*\d+$/, "").trim()
        : nameWithoutExt;

      return {
        id: `${categoryPath.replace(/[\/\\]/g, "-")}-${index + 1}`,
        name: nameWithoutPrice,
        image: `/${categoryPath}/${file}`,
        price: price,
      };
    });

    return products;
  } catch (error) {
    console.error(`Error reading directory ${categoryPath}:`, error);
    return [];
  }
}

// 预定义的分类路径
export const CATEGORY_PATHS = {
  // 男子类别
  jackets: "cloth/男子/夹克",
  trenchCoats: "cloth/男子/风衣",
  suits: "cloth/男子/西装",
  pants: "cloth/男子/裤子",

  // 皮具皮饰类别
  wallets: "cloth/皮具皮饰/钱包",
  belts: "cloth/皮具皮饰/皮带",
  leatherBags: "cloth/皮具皮饰/皮包",
  leatherShoes: "cloth/皮具皮饰/皮鞋",
  leatherClothing: "cloth/皮具皮饰/皮装",

  // 其他类别
  sweaters: "cloth/羊毛衫",
  watches: "cloth/手表",
  longSleeve: "cloth/长袖",
  shortSleeve: "cloth/短袖",
  cufflinks: "cloth/袖扣",
  socksScarves: "cloth/袜子 围巾",
} as const;
