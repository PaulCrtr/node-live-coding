const wildersRouter = require("express").Router();
const wildersControllers = require("../controllers/wilders");
const errorHandler = require("../utils/errorHandler");

wildersRouter.post("/", errorHandler(wildersControllers.create));
wildersRouter.get("/", errorHandler(wildersControllers.getAll));
wildersRouter.put("/:id", errorHandler(wildersControllers.update));
wildersRouter.delete("/:id", errorHandler(wildersControllers.delete));

module.exports = wildersRouter;
