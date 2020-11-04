const WilderModel = require("../models/Wilder");

module.exports = {
  create: (req, res) => {
    WilderModel.init().then(() => {
      const newWilder = new WilderModel(req.body);
      newWilder
        .save()
        .then((result) => {
          res.status(201).json({ result });
        })
        .catch((err) => {
          console.log(err);
          res.status(500).json({ err });
        });
    });
  },

  getAll: (_, res) => {
    WilderModel.find()
      .then((wilders) => {
        res.status(200).json({ wilders });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({ err });
      });
  },

  update: (req, res) => {
    WilderModel.findByIdAndUpdate(req.params.id, req.body, { new: true })
      .then((wilderUpdated) => {
        if (wilderUpdated) {
          res.status(200).json({ wilderUpdated });
        } else {
          res.status(400).send("Unknow id");
        }
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({ err });
      });
  },

  delete: (req, res) => {
    WilderModel.findByIdAndDelete(req.params.id)
      .then((wilderDeleted) => {
        if (wilderDeleted) {
          res.status(200).send(`${wilderDeleted.name} has been deleted`);
        } else {
          res.status(400).send("Unknow id");
        }
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({ err });
      });
  },
};
