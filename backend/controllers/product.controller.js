import Product from "../Models/product.model.js";
import mongoose from "mongoose";

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json({ success: true, data: products });
  } catch (error) {
    console.log("error en encontrar productos", error.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};
export const createProduct = async (req, res) => {
  const product = req.body; // el usuario enviara esta informacion

  if (!product.name || !product.price || !product.image) {
    return res
      .status(400)
      .json({ success: false, message: "LLena todos los campos" });
  }

  const newProduct = new Product(product);

  try {
    await newProduct.save();
    res.status(201).json({ succes: true, data: newProduct });
  } catch (error) {
    console.error("Error al crear el producto", error.message);
    return res
      .status(500)
      .json({ succes: false, message: "Error en el Servidor" });
  }
};

export const UpdateProduct = async (req, res) => {
  console.log("Parámetros recibidos:", req.params);
  const { id } = req.params;
  const product = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(404)
      .json({ success: false, message: "invalid Product Id" });
  }
  try {
    const updatedProduct = await Product.findByIdAndUpdate(id, product, {
      new: true,
    });
    res.status(200).json({ succes: true, data: updatedProduct });
  } catch (error) {
    res.status(500).json({ succes: false, message: "Server Error" });
  }
};
export const deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    await Product.findByIdAndDelete(id);
    res.status(200).json({ success: true, message: "Product Deleted" });
  } catch (error) {
    console.log("Error al borrar el producto:", error.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};
