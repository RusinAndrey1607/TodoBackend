const Router = require("express").Router;
const todoController = require("../controlers/todo.controller.js");

const todoRouter = Router();

todoRouter.get("/", todoController.getAll);
todoRouter.get("/:id", todoController.getOne);
todoRouter.delete("/:id", todoController.delete);
todoRouter.put("/:id", todoController.update);
todoRouter.post("/add", todoController.create);

module.exports = todoRouter;