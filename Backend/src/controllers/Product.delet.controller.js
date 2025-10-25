import { product } from "../models/ProductList.models.js";

const DeletProduct=async(req,res)=>{
  try {
    const {id}=req.body;
    await product.findByIdAndDelete(id);
    return res.status(200).json({
      success:true,
      message:"Product delet successfully"
    })
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success:false,
      message:"Something went wrong"
    })
  }
  
}

export default DeletProduct