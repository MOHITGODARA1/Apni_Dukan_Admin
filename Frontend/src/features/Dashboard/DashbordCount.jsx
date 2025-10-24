import { FaMoneyBillWave, FaShoppingCart, FaUsers, FaBoxOpen } from "react-icons/fa";
import { useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function DashboardCount() {
  const [count,setcount]=useState(0);
  const navigate=useNavigate();
  const stats = [
    { label: "Total Revenue", value: "₹0", icon: <FaMoneyBillWave className="text-3xl text-green-500" /> },
    { label: "Orders", value: "0", icon: <FaShoppingCart className="text-3xl text-blue-500" /> },
    { label: "Customers", value: "0", icon: <FaUsers className="text-3xl text-yellow-500" /> },
    { label: "Products", value: count, icon: <FaBoxOpen className="text-3xl text-purple-500" /> },
  ];
  useEffect(()=>{
    const isLogin=localStorage.getItem('loginData');
    if(!isLogin){
      navigate('/')
    }
  },[navigate])
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  useEffect(()=>{
    async function  fetchCount() {
       const response=await axios.get(
        `${API_BASE_URL}/list/Product-Count`)
        setcount(response.data.count)
    }
    fetchCount();
  },[API_BASE_URL])

  return (
    <div className="p-6 bg-gray-50 ">
      {/* Header */}
      <h1 className="text-3xl font-bold mt-5 mb-6 text-gray-800">🛍️ Apni Dukan Admin</h1>

      {/* Stats Cards */}
      <div className="flex flex-wrap justify-evenly gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="h-32 w-40 bg-white shadow-2xl rounded-lg p-4 flex flex-col justify-between hover:shadow-xl transition"
          >
            <div className="flex justify-between items-center">
              <p className="text-sm text-gray-400">{stat.label}</p>
              <div>{stat.icon}</div>
            </div>
            <div className="mt-4 font-bold text-2xl text-gray-800">{stat.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DashboardCount;
