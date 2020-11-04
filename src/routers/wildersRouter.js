const wildersRouter = require("express").Router();
const wilderControllers = require("../controllers/wilders");
const errorHandler = require("../utils/errorHandler");

wildersRouter.post("/", errorHandler(wilderControllers.create));
wildersRouter.get("/", errorHandler(wilderControllers.getAll));
wildersRouter.put("/:id", errorHandler(wilderControllers.update));
wildersRouter.delete("/:id", errorHandler(wilderControllers.delete));

module.exports = wildersRouter;
