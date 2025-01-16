import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api/": "https://thrift-store-group-9-ae49a0738ba3.herokuapp.com/api/products/allproducts",
      "/uploads/": "https://thrift-store-group-9-ae49a0738ba3.herokuapp.com/api/products/uploads",
    },
  },
});
