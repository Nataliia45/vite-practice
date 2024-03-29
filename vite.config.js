import { defineConfig } from 'vite';
import { resolve } from "path";

export default defineConfig({
base: "/vite-practice/",
build: {
    rollupOptions:{
        input: {
            main: resolve(__dirname, "index.html"),
            about: resolve(__dirname, "pages/about.html"),
        }
    }
}
});