const WilderModel = require("../models/Wilder");

module.exports = {
  create: (req, res) => {
    WilderModel.init().then(() => {
      const newWilder = new WilderModel(req.body);
      newWilder
        .save()
        .then((result) => {
          res.status(201).json({ status: "success", result });
        })
        .catch((err) => {
          console.log(err);
          res.status(500).json({ status: "error", err });
        });
    });
  },

  getAll: (_, res) => {
    WilderModel.find()
      .then((result) => {
        res.status(200).json({ status: "success", result });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({ status: "error", err });
      });
  },

  update: (req, res) => {
    WilderModel.findOneAndUpdate({ name: req.params.name }, req.body, { new: true })
      .then((result) => {
        if (result) {
          res.status(200).json({ status: "success", result });
        } else {
          res.status(400).json({ status: "error", result: "Unknow name" });
        }
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({ status: "error", err });
      });
  },

  delete: (req, res) => {
    WilderModel.findOneAndDelete({ name: req.params.name })
      .then((result) => {
        if (result) {
          res.status(200).json({ status: "success", result: `${result.name} has been deleted` });
        } else {
          res.status(400).json({ status: "error", result: "Unknow name" });
        }
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({ status: "error", err });
      });
  },
};
