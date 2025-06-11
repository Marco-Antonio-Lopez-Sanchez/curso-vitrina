import express from "express";
import {
  createProduct,
  deleteProduct,
  getProducts,
  UpdateProduct,
} from "../controllers/product.controller.js";

const router = express.Router();

router.get("/", getProducts);
//////////////////////////////////////////////////////////////////////
/// API para creacion de productos
router.post("/", createProduct);
///////////////////////////////////////////////////////////////////
//Postman Aplicacion se usara como front temporal para mostrar el correcto funcionamiento
////////////////////////////////////////////////////////////////////
router.put("/:id", UpdateProduct);
// API para eliminacion de productos
router.delete("/:id", deleteProduct);

export default router;
