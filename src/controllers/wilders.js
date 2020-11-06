const WilderModel = require("../models/Wilder");

module.exports = {
  create: async (req, res) => {
    await WilderModel.init();
    const newWilder = new WilderModel(req.body);
    const wilderSaved = await newWilder.save();
    res.status(201).json({ wilderSaved });
  },

  getAll: async (_, res) => {
    const wilders = await WilderModel.find();
    res.json({ wilders });
  },

  update: async (req, res) => {
    const wilderUpdated = await WilderModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!wilderUpdated) {
      return res.status(400).json("Unknown id");
    }
    res.json({ wilderUpdated });
  },

  delete: async (req, res) => {
    const wilderDeleted = await WilderModel.findByIdAndDelete(req.params.id);
    if (!wilderDeleted) {
      return res.status(400).json("Unknown id");
    }
    res.json(`${wilderDeleted.name} has been deleted`);
  },
};
