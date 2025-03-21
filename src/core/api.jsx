import axios from "axios";

const API_BASE_URL = `${import.meta.env.VITE_API_URL}`; // Thay bằng API thật

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000, // Timeout 10s
  headers: {
    "Content-Type": "application/json",
  },
});

// Thêm interceptor để tự động thêm token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Xử lý token hết hạn và retry request
api.interceptors.response.use(
  (response) => response.data, // Chỉ trả về data, bỏ metadata
  async (error) => {
    if (error.response) {
      const originalRequest = error.config;

      // Nếu lỗi 401 (Unauthorized), thử refresh token
      if (error.response.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;
        try {
          const refreshToken = localStorage.getItem("refreshToken");
          const res = await axios.post(`${API_BASE_URL}/auth/refresh`, {
            token: refreshToken,
          });

          // Cập nhật token mới
          localStorage.setItem("token", res.data.accessToken);
          originalRequest.headers.Authorization = `Bearer ${res.data.accessToken}`;

          return api(originalRequest); // Retry request với token mới
        } catch (refreshError) {
          console.error("Refresh token failed", refreshError);
          localStorage.removeItem("token");
          localStorage.removeItem("refreshToken");
          window.location.href = "/login"; // Redirect về login
        }
      }
    }
    return Promise.reject(error);
  }
);

export default api;
