import { listFilesInPath, getSupabaseImageUrl } from "./supabase";

export interface Product {
  id: string;
  name: string;
  image: string;
  price: string;
}

// 从Supabase存储获取产品数据
export async function getProductsFromSupabase(
  categoryPath: string
): Promise<Product[]> {
  try {
    const files = await listFilesInPath(
      "clothes",
      `cloth/cloth/${categoryPath}`
    );

    // 过滤出图片文件
    const imageFiles = files.filter((file) => {
      if (!file.name || file.name.includes("/")) return false;
      const ext = file.name.toLowerCase().split(".").pop();
      return ["jpg", "jpeg", "png", "webp"].includes(ext || "");
    });

    // 转换为产品对象
    const products: Product[] = imageFiles.map((file, index) => {
      const nameWithoutExt = file.name!.replace(/\.[^/.]+$/, "");
      // 从文件名中提取价格（如果存在）
      const priceMatch = nameWithoutExt.match(/(\d+)$/);
      const price = priceMatch ? `¥${priceMatch[1]}` : "价格待定";

      // 从商品名称中移除价格部分，只保留商品编号
      const nameWithoutPrice = priceMatch
        ? nameWithoutExt.replace(/\s*\d+$/, "").trim()
        : nameWithoutExt;

      const imageUrl = getSupabaseImageUrl(
        "clothes",
        `cloth/cloth/${categoryPath}/${file.name}`
      );

      return {
        id: `${categoryPath.replace(/[\/\\]/g, "-")}-${index + 1}`,
        name: nameWithoutPrice,
        image: imageUrl,
        price: price,
      };
    });

    return products;
  } catch (error) {
    console.error(
      `Error fetching products from Supabase for ${categoryPath}:`,
      error
    );
    return [];
  }
}

// 兼容旧的函数，但现在返回空数组（因为本地文件已移至Supabase）
export function getProductsFromDirectory(categoryPath: string): Product[] {
  console.warn(
    "getProductsFromDirectory is deprecated. Use getProductsFromSupabase instead."
  );
  return [];
}

// 更新的分类路径，使用拼音首字母
export const CATEGORY_PATHS = {
  // 男子类别 (man)
  jackets: "man/JK", // 夹克
  trenchCoats: "man/FY", // 风衣
  suits: "man/XZ", // 西装
  pants: "man/KZ", // 裤子

  // 皮具皮饰类别 (PJPS)
  wallets: "PJPS/QB", // 钱包
  belts: "PJPS/PD", // 皮带
  leatherBags: "PJPS/PB", // 皮包
  leatherShoes: "PJPS/PX", // 皮鞋
  leatherClothing: "PJPS/PZ", // 皮装

  // 女子类别 (woman)
  womenClothing: "woman", // 女装

  // 其他类别 - 根据您的图片，我看到了这些文件夹
  sweaters: "YMS", // 羊毛衫 (YangMaoShan)
  watches: "SB", // 手表 (ShouBiao)
  longSleeve: "CX", // 长袖 (ChangXiu)
  shortSleeve: "DX", // 短袖 (DuanXiu)
  cufflinks: "XK", // 袖扣 (XiuKou)
  socksScarves: "WZWJ", // 袜子围巾 (WaZiWeiJin)
} as const;

// 子分类映射
export const SUB_CATEGORY_PATHS = {
  // 长袖子分类
  longSleeveShirts: "CS", // 衬衫 (ChenShan)
  longSleeveTShirts: "TX", // T恤 (TXu)

  // 手表子分类
  watchBands: "SB/BD", // 表带 (BiaoDai) - 在SB文件夹下的BD子文件夹
  watches: "SB/SB", // 手表 (ShouBiao) - 在SB文件夹下的SB子文件夹
} as const;

// 获取所有子分类产品
export async function getAllSubCategoryProducts(
  mainCategory: string,
  subCategories: string[]
): Promise<{ [key: string]: Product[] }> {
  const results: { [key: string]: Product[] } = {};

  for (const subCategory of subCategories) {
    try {
      const products = await getProductsFromSupabase(subCategory);
      results[subCategory] = products;
    } catch (error) {
      console.error(`Error fetching products for ${subCategory}:`, error);
      results[subCategory] = [];
    }
  }

  return results;
}

// 子分类信息
export const SUB_CATEGORY_INFO = {
  // 长袖子分类
  CS: { name: "衬衫", description: "商务休闲衬衫" },
  TX: { name: "T恤", description: "舒适长袖T恤" },

  // 手表子分类
  BD: { name: "表带", description: "精美表带配件" },
  SB: { name: "手表", description: "精致腕表" },
} as const;
