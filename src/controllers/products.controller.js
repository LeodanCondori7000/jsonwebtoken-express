const Product = require("../models/Product");

const createProduct = async (req, res) => {
  const { name, category, price, imgURL } = req.body;

  const newProduct = new Product({
    name,
    category,
    price,
    imgURL,
  });
  const productSaved = await newProduct.save();
  res.status(201).json(productSaved);
};

const getProducts = async (req, res) => {
  const products = await Product.find();
  return res.json(products);
};

const getProductById = async (req, res) => {
  const { productId } = req.params;

  const product = await Product.findById(productId);
  res.status(200).json(product);
};

const updateProductById = async (req, res) => {
  const updatedProduct = await Product.findByIdAndUpdate(
    req.params.productId,
    req.body,
    {
      new: true,
    }
  );
  res.status(200).json(updatedProduct);
};

const deleteProductById = async (req, res) => {
  const { productId } = req.params;

  await Product.findByIdAndDelete(productId);

  // code 200 is ok too
  res.status(204).json();
};
module.exports = {
  getProducts,
  createProduct,
  updateProductById,
  deleteProductById,
  getProductById,
};
