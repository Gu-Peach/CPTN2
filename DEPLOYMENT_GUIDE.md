# CAPTAINO 部署指南

## 1. Supabase 配置

### 环境变量设置

在项目根目录创建 `.env.local` 文件，添加以下配置：

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 获取 Supabase 配置信息

1. 登录 [Supabase Dashboard](https://app.supabase.com)
2. 选择您的项目
3. 点击左侧菜单的 "Settings" → "API"
4. 复制 "Project URL" 到 `NEXT_PUBLIC_SUPABASE_URL`
5. 复制 "anon public" key 到 `NEXT_PUBLIC_SUPABASE_ANON_KEY`

### 存储桶配置

确保在 Supabase Storage 中已创建 `clothes` 存储桶，并且文件结构如下：

```
clothes/
└── cloth/
    └── cloth/
        ├── man/
        │   ├── JK/     (夹克)
        │   ├── FY/     (风衣)
        │   ├── XZ/     (西装)
        │   └── KZ/     (裤子)
        ├── PJPS/
        │   ├── QB/     (钱包)
        │   ├── PD/     (皮带)
        │   ├── PB/     (皮包)
        │   ├── PX/     (皮鞋)
        │   └── PZ/     (皮装)
        ├── woman/       (女装)
        ├── YMS/         (羊毛衫)
        ├── SB/          (手表)
        ├── CX/          (长袖)
        ├── DX/          (短袖)
        ├── XK/          (袖扣)
        └── WZWJ/        (袜子围巾)
```

## 2. Vercel 部署

### 第一步：安装依赖

```bash
pnpm install
```

### 第二步：添加 Supabase 客户端

```bash
pnpm add @supabase/supabase-js
```

### 第三步：在 Vercel 中设置环境变量

1. 在 Vercel 项目设置中添加环境变量
2. 添加 `NEXT_PUBLIC_SUPABASE_URL` 和 `NEXT_PUBLIC_SUPABASE_ANON_KEY`

### 第四步：部署

```bash
git add .
git commit -m "配置 Supabase 图片存储"
git push origin main
```

## 3. 文件映射对照表

| 中文类别 | 拼音首字母 | Supabase 路径 |
| -------- | ---------- | ------------- |
| 男子夹克 | JK         | man/JK        |
| 男子风衣 | FY         | man/FY        |
| 男子西装 | XZ         | man/XZ        |
| 男子裤子 | KZ         | man/KZ        |
| 钱包     | QB         | PJPS/QB       |
| 皮带     | PD         | PJPS/PD       |
| 皮包     | PB         | PJPS/PB       |
| 皮鞋     | PX         | PJPS/PX       |
| 皮装     | PZ         | PJPS/PZ       |
| 女装     | -          | woman         |
| 羊毛衫   | YMS        | YMS           |
| 手表     | SB         | SB            |
| 长袖     | CX         | CX            |
| 短袖     | DX         | DX            |
| 袖扣     | XK         | XK            |
| 袜子围巾 | WZWJ       | WZWJ          |

## 4. 注意事项

- 图片文件名应包含价格信息，格式：`商品编号 价格.jpg`
- 确保所有图片都是 web 友好格式（jpg, jpeg, png, webp）
- Supabase 存储桶需要设置为公开访问
- 部署前请确保所有环境变量都已正确配置
