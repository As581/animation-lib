import { defineConfig } from "vite";

export default defineConfig({
    build: {
        lib: {
            entry: "src/main.js",
            name: "Animations",
            fileName: "animation-lib",
        },
    },
});