/**
 * 本脚本用于将英语入口文件复制到其他语言目录中。
 * 它首先获取语言目录中的所有语言文件夹，然后排除英语，将英语入口文件复制到每个非英语语言文件夹中。
 * 这样做的目的是为了在不同语言的项目中保持入口文件的一致性。
 */

import fs from "fs"
import path from "path"

// 定义源语言文件夹路径
const root = "./src/lang"
// 定义入口文件名
const entry = "entry.ts"
// 获取语言目录中的所有语言文件夹
const langs = fs.readdirSync(root)

// 过滤掉英语，将英语入口文件复制到其他语言文件夹中
langs
  .filter((lang) => lang !== "en")
  .forEach((lang) => {
    fs.copyFileSync(path.join(root, "en", entry), path.join(root, lang, entry))
  })