
const Check=async (req,res)=>{
  try {
    const {MobileNumber,Password}=req.body
    // Check if data is come or not 
    if(!MobileNumber || !Password){
      return res.status(400).json({
        success:false,
        message:"all fileds required"
      })
    }

    //Check if number and password are correct or not
    console.log(process.env.MOBILE_NUMBER," ",MobileNumber)
    console.log(process.env.PASSWORD," ",Password)
    if (
      process.env.MOBILE_NUMBER !== MobileNumber ||
      process.env.PASSWORD !== Password
    ) {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials",
      });
    }
    return res.status(200).json({
      success:true,
      message:"Login Successful",
    })
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: "Server error" });
  }
}

export default Check