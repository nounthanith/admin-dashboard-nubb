const { generateProductCode } = require("./counterController");
const { removeFile } = require("../utils/removeFile");
const Product = require("../models/Product");

exports.create = async (req, res) => {
  try {
    const code = await generateProductCode();
    const data = {
      name: req.body.name,
      category: req.body.category,
      code: code,
      imageURL: req.file.filename,
      costPrice: req.body.costPrice,
      salePrice: req.body.salePrice,
      stockQty: req.body.stockQty,
      description: req.body.description,
    };
    const doc = await Product.create(data);
    res.status(200).json({
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

    const docs = await Product.find(queryObject)
      .skip(skip)
      .limit(limit)
      .sort({ _id: -1 })
      .populate("category");
    const totalItems = await Product.find(queryObject).countDocuments(
      queryObject
    );
    const totalPages = Math.ceil(totalItems / limit);

    res.status(200).json({
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
    const id = req.params.id;
    const doc = await Product.findOne({ _id: id }).populate("category");
    if (!doc) {
      throw new Error("Product is not found with id");
    }
    res.status(200).json({
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

exports.update = async (req, res) => {
  try {
    let data = {
      ...req.body,
    };

    if (req.file) {
      data.imageURL = req.file.filename;
    }

    const id = req.params.id;
    const doc = await Product.findByIdAndUpdate(id, data, {
      new: true,
      runValidators: true,
    });
    if (!doc) {
      throw new Error("Can not found with id");
    }
    res.status(200).json({
      status: "successfully",
      data: doc,
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: err.message,
    });
  }
};

exports.remove = async (req, res) => {
  try {
    const doc = await Product.findOne({ _id: req.params.id });
    if (!doc) {
      throw new Error("Not Found");
    }
    removeFile(doc.imageURL);
    await Product.deleteOne({ _id: req.params.id });
    res.status(200).json({
      status: "success",
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: err.message,
    });
  }
};
