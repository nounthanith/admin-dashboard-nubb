const Category = require("../models/Category");

exports.create = async (req, res) => {
  try {
    const exist = await Category.findOne({ name: req.body.name });
    if (exist) {
      throw new Error("Name already exist!");
    }
    const doc = await Category.create(req.body);
    res.status(201).json({
      status: "success",
      data: doc,
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: err.message,
    });
  }
};

exports.findAll = async (req, res) => {
  try {
    let queryObject = {};

    const page = req.query.page * 1 || 1;
    const limit = req.query.limit * 1 || 25;
    const skip = (page - 1) * limit;

    if (req.query.search) {
      queryObject = {
        name: { $regex: req.query.search, $options: "i" },
      };
    }

    const docs = await Category.find(queryObject)
      .skip(skip)
      .limit(limit)
      .sort({ _id: -1 });
    const totalItems = await Category.find(queryObject).countDocuments(
      queryObject
    );
    const totalPages = Math.ceil(totalItems / limit);

    res.status(201).json({
      status: "success",
      totalPages,
      data: docs,
    });
  } catch (err) {
    res.status(500).json({
      status: "Error",
      message: err.message,
    });
  }
};

exports.findOne = async (req, res) => {
  try {
    const doc = await Category.findOne({ _id: req.params.id });
    if (!doc) {
      throw new Error("No document found with id");
    }
    res.status(201).json({
      status: "success",
      data: doc,
    });
  } catch (err) {
    res.status(500).status(500).json({
      status: "error",
      message: err.message,
    });
  }
};

exports.update = async (req, res) => {
  try {
    const id = req.params.id;
    const doc = await Category.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!doc) {
      throw new Error("No document find with ID");
    }
    res.status(201).json({
      status: "Update Success",
      data: doc,
    });
  } catch (err) {
    res.status(500).json({
      status: "Error",
      message: err.message,
    });
  }
};

exports.remove = async (req, res) => {
  try {
    const doc = await Category.findByIdAndDelete(req.params.id);
    if (!doc) {
      throw new Error("No Document Found With ID");
    }
    res.status(201).json({
      status: "Success",
      data: null,
    });
  } catch (err) {
    res.status(500).json({
      status: "Error",
      message: err.message,
    });
  }
};
