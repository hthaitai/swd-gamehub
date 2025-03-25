import api from "../core/api";
const productService = {
  getProduct: () => api.get("/api/products"),
  getProductById: (id) => api.get(`/api/products/${id}`),
  getUserById: (id) => api.get(`/users/${id}`),
  login: async (username, password) => {
    try {
      const data = await api.post("/auth/log-in", { username, password });
      console.log("API response:", data); // Kiểm tra dữ liệu API trả về
      return data; // Interceptor đã lấy sẵn `data`, không cần `data.data`
    } catch (error) {
      console.error("Login API error:", error);
      throw error;
    }
  },
  signup: async (username, password, email, roleNames) => {
    try {
      const data = await api.post("/auth/register", {username,password,email,roleNames});
      return data;
    } catch (error) {
      console.error("Sign Up api error", error);
      throw error;
    }
  }
};

export default productService;
