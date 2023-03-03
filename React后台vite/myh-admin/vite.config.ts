import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
// 默认antd4没有样式的按需引入 下载vite-plugin-style-import插件
// import styleImport, {AntdResolve} from 'vite-plugin-style-import'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // styleImport({
    //   resolves: [
    //     AntdResolve()
    //   ]
    // })
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, 'src')
    }
  }
})
