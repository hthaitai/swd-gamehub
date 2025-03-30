import api from "../core/api";
const productService = {
  getProduct: () => api.get("/api/products"),
  getProductById: (id) => api.get(`/api/products/${id}`),
  postProduct: (data) =>
    api.post(`/api/products/create`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }),
  putProduct: (data) =>
    api.put(`/api/products/update`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }),
  getUserById: (id) => api.get(`/users/${id}`),
  login: async (username, password) => {
    try {
      const data = await api.post("/auth/log-in", { username, password });
      console.log("API response:", data);
      return data;
    } catch (error) {
      console.error("Login API error:", error);
      throw error;
    }
  },
  signup: async (username, password, email, roleNames) => {
    try {
      const data = await api.post("/auth/register", {
        username,
        password,
        email,
        roleNames,
      });
      return data;
    } catch (error) {
      console.error("Sign Up api error", error);
      throw error;
    }
  },
};

export default productService;
