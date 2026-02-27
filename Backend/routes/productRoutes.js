import express from "express";
import {
  createProduct,
  deleteProduct,
  getProducts,
  updateProduct,
} from "../controllers/productControllers";

const router = express.Router();

//Route to create new product
router.post("/add", createProduct);

//Route to get All products
router.get("/", getProducts);

//Route to update product by ID
router.put("/update/:id", updateProduct);

//Route to Delete product by ID
router.put("/delete/:id", deleteProduct);

export default router;
