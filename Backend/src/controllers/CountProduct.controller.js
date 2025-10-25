import { product } from "../models/ProductList.models.js";

const CountProduct=async (req,res)=>{
  try {
    const count=await product.countDocuments();
    return res.status(200).json({
      success:200,
      count
    })
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: "Server Error" });
  }
}

export default CountProduct