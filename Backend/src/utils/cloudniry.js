import dotenv from "dotenv";
import { v2 as cloudinary } from "cloudinary";
dotenv.config();
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME || "dznwqaqjw",
  api_key: process.env.CLOUDINARY_API_KEY || "617376113713873",
  api_secret: process.env.CLOUDINARY_API_SECRET || "F7dn0ZVvfvYJbCrOza3EHjrnngs",
});
const uplodeCloudaniry=async (localpath)=>{
  try {
    if(!localpath)return null;
    const response=await cloudinary.uploader.upload(localpath,{
      resource_type:"auto"
    })
    console.log("file uplod successful",response.secure_url);
    return response.secure_url;
  } catch (error) {
    console.log("Cloudinary ENV:", {
  CLOUDINARY_URL: process.env.CLOUDINARY_URL
});

    console.log("file is not uploded",error);
    return null
  }
}
export {uplodeCloudaniry}