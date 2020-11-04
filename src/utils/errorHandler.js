asyncErrorHandler = (callback) => (req, res) => {
  callback(req, res).catch((err) => {
    if (err.name == "MongoError" && err.code == 11000) {
      const message = err.keyPattern.name ? "Name already exists" : "Duplicate field";
      res.status(400).json({ message });
    }
    res.status(500).json({ err });
  });
};

module.exports = asyncErrorHandler;
