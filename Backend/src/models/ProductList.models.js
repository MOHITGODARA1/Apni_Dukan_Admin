import mongoose from "mongoose"
import { Schema } from "mongoose"

const productList=new Schema({
  ProductName:{
    type:String,
    required:true,
    trim:true
  },
  Description:{
    type:String,
    required:true,
    trim:true
  },
  Price:{
    type:String
  },
  WeightOption:[
    {
      Weight:{
        type:String,
      },
      Price:{
        type:String,
      },
    }
  ],
  
  Tag:{
    type:[String],
    required:true
  },
  ImageOfProduct:{
    type:String,
    required:true
  }
},{
  timestamps:true
});





export const product=mongoose.model("product",productList)