const appRouter = require("./appRoutes");

const routes = (app) => {
  /**
   * ==============================
   *  App Routes
   * ==============================
   */
  app.use("/api/app", appRouter);
};

module.exports = routes;
