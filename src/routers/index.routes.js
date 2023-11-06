import { Router } from "express";

import whatsappRoutes from "./whatsapp.routes.js";
import healthRoutes from "./health.routes.js";
import userRoutes from "./user.routes.js";

class RoutesApp {
  router = Router();

  constructor() {
    this.#routers();
  }

  #routers() {
    this.router.use("/", healthRoutes);
    this.router.use("/whatsapp", whatsappRoutes);
    this.router.use("/user", userRoutes);
  }
}

export default RoutesApp;
