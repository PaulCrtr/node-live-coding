const Wilder = require("../models/Wilder");
const WilderModel = require("../models/Wilder");

module.exports = {
  create: (req, res) => {
    WilderModel.init().then(() => {
      const firstWilder = new WilderModel({
        name: "First Wildeer",
        city: "San Francisco",
        skills: [
          { title: "HTML", voteCount: 10 },
          { title: "React", voteCount: 5 },
        ],
      });
      firstWilder
        .save()
        .then((result) => {
          res.status(201).json({ status: "success", result });
        })
        .catch((err) => {
          console.log("error:", err);
          res.status(500).json({ status: "error", err });
        });
    });
  },
};
