import { product } from "../models/ProductList.models.js";
import { uplodeCloudaniry } from "../utils/cloudniry.js";

const Productregister=async (req,res)=>{
  try {
    //recive data from user


    const {ProductName,Description,Tag,WeightOption,Price}=req.body;
    console.log(ProductName,Description,Tag);


    //check if all data is send or not


    if(!ProductName  || !Description || !Tag || !req.file ){
      return res.status(400).json({
        success:false,
        message:"All fields are required"
      })
    }
    console.log(req.file.path)


    //image section


    const productImage=req.file.path;
    if(!productImage){
      return res.status(400).json({
        success: false,
        message: "Image upload failed"
      });
    }
    const path = productImage.replace(/\\/g, "/");
    const productimg=await uplodeCloudaniry(path);
    if(!productimg){
      return res.status(400).json({
        success: false,
        message: "Image upload failed"
      });
    }


    //tag string into array


    const tagArray=Tag.split(",").map(tag=>tag.trim())
    console.log(tagArray)

    //Weight Option


    let weightArray;
    try {
      weightArray=JSON.parse(WeightOption)
    } catch (error) {
      return res.status(400).json({
        success: false,
        message: "Invalid weight option format",
      });
    }


    //store data into db
    const ProductList=await product.create({
      ProductName,
      Description,
      Price,
      Tag:tagArray,
      ImageOfProduct:productimg,
      WeightOption:weightArray,
    });


    //send response to frontend
    return res.status(200).json({
      success:true,
      message:"Product list successfully"
    })


  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success:false,
      message:"internal server error"||error.message
    })
  }
}
export {Productregister}