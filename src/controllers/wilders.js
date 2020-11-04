const WilderModel = require("../models/Wilder");

module.exports = {
  create: async (req, res) => {
    try {
      await WilderModel.init();
      const newWilder = new WilderModel(req.body);
      const wilderSaved = await newWilder.save();
      res.status(201).json({ wilderSaved });
    } catch (err) {
      console.log(err);
      res.status(500).json({ err });
    }
  },

  getAll: async (_, res) => {
    try {
      const wilders = await WilderModel.find();
      res.status(200).json({ wilders });
    } catch (err) {
      console.log(err);
      res.status(500).json({ err });
    }
  },

  update: async (req, res) => {
    try {
      const wilderUpdated = await WilderModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!wilderUpdated) {
        return res.status(400).send("Unknow id");
      }
      res.status(200).json({ wilderUpdated });
    } catch (err) {
      console.log(err);
      res.status(500).json({ err });
    }
  },

  delete: async (req, res) => {
    try {
      const wilderDeleted = WilderModel.findByIdAndDelete(req.params.id);
      if (!wilderDeleted) {
        return res.status(400).send("Unknow id");
      }
      res.status(200).send(`${wilderDeleted.name} has been deleted`);
    } catch (err) {
      console.log(err);
      res.status(500).json({ err });
    }
  },
};
