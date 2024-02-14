const { Router } = require("express");
const { AuthRouter } = require("./auth");
const { UserRouter } = require("./user");
const { TodosRouter } = require("./todos");
const { MembersRouter } = require("./members");

const AppRouter = Router();

AppRouter.use("/auth", AuthRouter);
AppRouter.use("/user", UserRouter);
AppRouter.use("/todos", TodosRouter);
AppRouter.use("/members", MembersRouter);

module.exports = { AppRouter };
