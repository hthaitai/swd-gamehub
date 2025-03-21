import api from "../core/api";
const gameService = {
  getGame: () => api.get("/api/products"),
};

export default gameService;
