const wildersRouter = require("express").Router();
const wilderControllers = require("../controllers/wilders");

wildersRouter.post("/", wilderControllers.create);
wildersRouter.get("/", wilderControllers.getAll);
wildersRouter.put("/:id", wilderControllers.update);
wildersRouter.delete("/:id", wilderControllers.delete);

module.exports = wildersRouter;
