import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// 获取Supabase存储中的图片URL
export function getSupabaseImageUrl(
  bucketName: string,
  filePath: string
): string {
  // Supabase 会自动处理 URL 编码，我们不需要手动编码
  // 直接使用原始文件路径
  const { data } = supabase.storage.from(bucketName).getPublicUrl(filePath);
  return data.publicUrl;
}

// 列出指定路径下的所有文件
export async function listFilesInPath(bucketName: string, folderPath: string) {
  const { data, error } = await supabase.storage
    .from(bucketName)
    .list(folderPath, {
      limit: 1000,
      sortBy: { column: "name", order: "asc" },
    });

  if (error) {
    console.error("Error listing files:", error);
    return [];
  }

  return data || [];
}
