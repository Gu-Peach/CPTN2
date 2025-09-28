import { getProductsFromSupabase } from "@/lib/product-utils";
import { listFilesInPath, getSupabaseImageUrl } from "@/lib/supabase";

export default async function DebugPage() {
  // 测试不同的路径
  const bdFiles = await listFilesInPath("clothes", "cloth/cloth/BD");
  const csFiles = await listFilesInPath("clothes", "cloth/cloth/CS");
  const txFiles = await listFilesInPath("clothes", "cloth/cloth/TX");

  // 测试正确的手表子类别路径
  const sbFiles = await listFilesInPath("clothes", "cloth/cloth/SB");
  const sbBdFiles = await listFilesInPath("clothes", "cloth/cloth/SB/BD"); // 表带
  const sbSbFiles = await listFilesInPath("clothes", "cloth/cloth/SB/SB"); // 手表

  // 详细分析SB/BD文件 (表带)
  const sbBdImageFiles = sbBdFiles.filter((file) => {
    if (!file.name || file.name.includes("/")) return false;
    const ext = file.name.toLowerCase().split(".").pop();
    return ["jpg", "jpeg", "png", "webp"].includes(ext || "");
  });

  // 详细分析SB/SB文件 (手表)
  const sbSbImageFiles = sbSbFiles.filter((file) => {
    if (!file.name || file.name.includes("/")) return false;
    const ext = file.name.toLowerCase().split(".").pop();
    return ["jpg", "jpeg", "png", "webp"].includes(ext || "");
  });

  const bdProducts = await getProductsFromSupabase("BD");
  const csProducts = await getProductsFromSupabase("CS");
  const txProducts = await getProductsFromSupabase("TX");

  // 测试正确路径的手表产品
  const sbBdProducts = await getProductsFromSupabase("SB/BD"); // 表带
  const sbSbProducts = await getProductsFromSupabase("SB/SB"); // 手表

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-8">调试信息</h1>

      <div className="space-y-8">
        <div>
          <h2 className="text-xl font-semibold mb-4">SB文件夹 (主目录):</h2>
          <p className="mb-2">总文件数: {sbFiles.length}</p>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-auto max-h-40">
            {JSON.stringify(sbFiles, null, 2)}
          </pre>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">SB/BD文件夹 (表带):</h2>
          <p className="mb-2">总文件数: {sbBdFiles.length}</p>
          <p className="mb-2">图片文件数: {sbBdImageFiles.length}</p>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-auto max-h-40">
            {JSON.stringify(sbBdFiles, null, 2)}
          </pre>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">SB/SB文件夹 (手表):</h2>
          <p className="mb-2">总文件数: {sbSbFiles.length}</p>
          <p className="mb-2">图片文件数: {sbSbImageFiles.length}</p>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-auto max-h-40">
            {JSON.stringify(sbSbFiles, null, 2)}
          </pre>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">SB/BD产品数据 (表带):</h2>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-auto max-h-40">
            {JSON.stringify(sbBdProducts, null, 2)}
          </pre>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">SB/SB产品数据 (手表):</h2>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-auto max-h-40">
            {JSON.stringify(sbSbProducts, null, 2)}
          </pre>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">BD文件夹原始文件列表:</h2>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-auto max-h-40">
            {JSON.stringify(bdFiles, null, 2)}
          </pre>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">CS文件夹原始文件列表:</h2>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-auto max-h-40">
            {JSON.stringify(csFiles, null, 2)}
          </pre>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">TX文件夹原始文件列表:</h2>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-auto max-h-40">
            {JSON.stringify(txFiles, null, 2)}
          </pre>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">BD产品数据:</h2>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-auto max-h-40">
            {JSON.stringify(bdProducts, null, 2)}
          </pre>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">CS产品数据:</h2>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-auto max-h-40">
            {JSON.stringify(csProducts, null, 2)}
          </pre>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">TX产品数据:</h2>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-auto max-h-40">
            {JSON.stringify(txProducts, null, 2)}
          </pre>
        </div>
      </div>
    </div>
  );
}
