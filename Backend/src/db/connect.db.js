import mongoose from "mongoose"
import { ProductList } from "../content.js"
const DB=async ()=>{
  try {
    console.log('MONGODB_URL:', process.env.MONGODB_URL);
    const dbreturnn=await mongoose.connect(`${process.env.MONGODB_URL}/${ProductList}`)
    console.log(dbreturnn.connection.host)
  } catch (error) {
    console.error("DB connection error",error);
  }
}

export default DB