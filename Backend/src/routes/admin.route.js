import { Router } from "express";
import { uplode } from "../middleware/image.multter.js";
import { Productregister } from "../controllers/productregister.controller.js";
import { product } from "../models/ProductList.models.js";
import DeletProduct from "../controllers/Product.delet.controller.js";
import CountProduct from "../controllers/CountProduct.controller.js";
import Check from "../controllers/UserLogin.controller.js";
const router=Router()

//get data from frontend
router.post("/Product-List", uplode.single("ImageOfProduct"),Productregister)


// send data
router.get("/Product-get",async (req,res)=>{
  try {
    const allProducts=await product.find();
    return res.status(200).json({
      success:true,
      Products:allProducts
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Internal server error"
    });
  }
})
router.get("/Product-get/:id", async (req, res) => {
  try {
    const { id } = req.params; // ✅ extract product id from URL
    const singleProduct = await product.findById(id);

    if (!singleProduct) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    return res.status(200).json({
      success: true,
      product: singleProduct,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
});

//delet Product from database
router.post("/Product-delet",DeletProduct)


//Count Product

router.get("/Product-Count",CountProduct)

//Check user login

router.post("/User-Login",Check)

export default router
