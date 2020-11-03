const wildersRouter = require("express").Router();
const wilderControllers = require("../controllers/wilders");

wildersRouter.post("/", wilderControllers.create);
wildersRouter.get("/", wilderControllers.getAll);
wildersRouter.put("/:name", wilderControllers.update);
wildersRouter.delete("/:name", wilderControllers.delete);

module.exports = wildersRouter;
