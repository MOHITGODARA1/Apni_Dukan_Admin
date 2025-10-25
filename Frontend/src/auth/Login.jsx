import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function Login() {
  const [MobileNumber, setMobileNumber] = useState("");
  const [Password, setPassword] = useState("");
  const [error, setError] = useState("");
  const Navigate = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();
    if (!MobileNumber || !Password) {
      setError("Please fill in all fields");
      return;
    }

    try {
      const data={
        MobileNumber,
        Password
      }
      const response=await axios.post(
        "http://localhost:4000/api/v1/list/User-Login"
      ,data,
      {
        headers:{
          "Content-Type": "application/json",
        }
      }
    );
      if(response.data.success===true){
        alert("User Login successfully ");
        localStorage.setItem("loginData","true")
        Navigate("/Dashbord")
      } else {
        setError(response.data.message || "Invalid  credentials");
      }
    } catch (error) {
      console.log(error);
      alert("backend is not working")
    }
  }

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-r">
      <div className="bg-white shadow-2xl rounded-2xl overflow-hidden flex w-[850px] h-[500px]">
        {/* Left Image Section */}
        <div className="w-1/2 h-full bg-blue-100 flex justify-center items-center ">
          <img
            src="./loginimage.png"
            alt="Login Illustration"
            className="h-full w-full  rounded-xl"
          />
        </div>

        {/* Right Form Section */}
        <div className="w-1/2 p-10 flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-center text-blue-700 mb-8">
            Welcome Back 👋
          </h2>

          <form onSubmit={handleLogin} className="flex flex-col gap-6">
            {/* Mobile Number */}
            <div>
              <label
                htmlFor="number"
                className="text-gray-700 font-semibold text-sm"
              >
                Mobile Number
              </label>
              <input
                type="text"
                placeholder="Enter your mobile number"
                value={MobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
                className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-100 focus:bg-white focus:ring-2 focus:ring-blue-400 outline-none transition-all"
              />
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="text-gray-700 font-semibold text-sm"
              >
                Password
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                value={Password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-100 focus:bg-white focus:ring-2 focus:ring-blue-400 outline-none transition-all"
              />
            </div>

            {/* Error Message */}
            {error && (
              <p className="text-red-500 text-sm font-semibold text-center">
                {error}
              </p>
            )}

            {/* Login Button */}
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 transition-all text-white font-semibold py-2 rounded-lg shadow-md hover:shadow-lg"
            >
              Login
            </button>
          </form>

          <p className="text-center text-sm text-gray-500 mt-6">
            Forgot password?{" "}
            <a href="#" className="text-blue-600 font-medium hover:underline">
              Reset here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
