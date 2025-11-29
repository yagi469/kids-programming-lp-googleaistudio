import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // GitHub Pagesのリポジトリ名に合わせて変更してください。
  // 例: https://username.github.io/my-app/ なら base: '/my-app/'
  // './' にしておくと相対パスで解決されるため、多くの場合で動作します。
  base: './',
});