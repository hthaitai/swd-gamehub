import api from "../core/api";
const productService = {
  getProduct: () => api.get("/api/products"),
  getProductById: (id) => api.get(`/api/products/${id}`),
};

export default productService;
