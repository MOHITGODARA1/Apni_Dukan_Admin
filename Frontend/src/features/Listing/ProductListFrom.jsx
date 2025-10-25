import { useState,useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function ProductListForm() {
  const [ProductName, setProcuctName] = useState("");
  const [WeightOption, setWeightOption] = useState([{ Weight: "", Price: "" }]);
  const [Description, setDescription] = useState("");
  const [Tag, setTag] = useState("");
  const [Price, setPrice] = useState("");
  const [Image, setImage] = useState(null);
  const navigate=useNavigate();
    useEffect(()=>{
      const isLogin=localStorage.getItem('loginData');
      if(!isLogin){
        navigate('/')
      }
    },[navigate])
  async function handelSaveProduct(e) {
    e.preventDefault();
    if (!ProductName || !Description || !Tag || !Image) {
      alert("All fields are required");
      return;
    }

    const Data = new FormData();
    Data.append("ProductName", ProductName);
    Data.append("Description", Description);
    Data.append("Tag", Tag);
    Data.append("Price", Price);
    Data.append("WeightOption", JSON.stringify(WeightOption));
    Data.append("ImageOfProduct", Image);
    const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
    try {
      const response = await axios.post(
        `${API_BASE_URL}/list/Product-List`,
        Data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Product added successfully", response.data);
      alert("Product added successfully");
      setProcuctName("");
      setDescription("");
      setTag("");
      setWeightOption([{ Weight: "", Price: "" }]);
      setImage(null);
    } catch (error) {
      console.error("Error registering product", error);
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        🛍️ Apni Dukan Admin
      </h1>

      {/* Form Container */}
      <form
        onSubmit={handelSaveProduct}
        className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-6 space-y-6 border border-gray-200"
      >
        {/* Product Name */}
        <div>
          <label className="block text-gray-600 font-medium mb-1">
            Product Name
          </label>
          <input
            type="text"
            placeholder="e.g. Premium Cotton Shirt"
            className="border border-gray-300 rounded-lg w-full h-10 px-3 focus:ring-2 focus:ring-blue-400 outline-none text-gray-700"
            value={ProductName}
            onChange={(e) => setProcuctName(e.target.value)}
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-gray-600 font-medium mb-1">
            Description
          </label>
          <textarea
            placeholder="Describe your product in detail..."
            className="border border-gray-300 rounded-lg w-full h-24 px-3 py-2 resize-none focus:ring-2 focus:ring-blue-400 outline-none text-gray-700"
            value={Description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>

        {/* Tag and Price */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-600 font-medium mb-1">Tag</label>
            <input
              type="text"
              placeholder="e.g. Atta, Wheat, Flour"
              className="border border-gray-300 rounded-lg w-full h-10 px-3 focus:ring-2 focus:ring-blue-400 outline-none text-gray-700"
              value={Tag}
              onChange={(e) => setTag(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-gray-600 font-medium mb-1">Price</label>
            <input
              type="text"
              placeholder="e.g. 399"
              className="border border-gray-300 rounded-lg w-full h-10 px-3 focus:ring-2 focus:ring-blue-400 outline-none text-gray-700"
              value={Price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
        </div>

        {/* Weight Options */}
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <h3 className="text-gray-700 font-semibold text-lg">
              Weight Options
            </h3>
            <button
              type="button"
              className="bg-blue-500 hover:bg-blue-600 text-white text-sm px-3 py-1 rounded-lg transition"
              onClick={() =>
                setWeightOption([...WeightOption, { Weight: "", Price: "" }])
              }
            >
              + Add Option
            </button>
          </div>

          {WeightOption.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-12 gap-3 items-end border border-gray-200 p-3 rounded-lg bg-gray-50"
            >
              <div className="col-span-5">
                <label className="text-sm text-gray-600 font-medium">
                  Weight
                </label>
                <input
                  type="text"
                  placeholder="e.g. 500gm"
                  className="border border-gray-300 rounded-lg w-full h-9 px-3 focus:ring-2 focus:ring-blue-400 outline-none text-gray-700"
                  value={item.Weight}
                  onChange={(e) => {
                    const newOptions = [...WeightOption];
                    newOptions[index].Weight = e.target.value;
                    setWeightOption(newOptions);
                  }}
                />
              </div>

              <div className="col-span-5">
                <label className="text-sm text-gray-600 font-medium">
                  Price
                </label>
                <input
                  type="text"
                  placeholder="e.g. 399"
                  className="border border-gray-300 rounded-lg w-full h-9 px-3 focus:ring-2 focus:ring-blue-400 outline-none text-gray-700"
                  value={item.Price}
                  onChange={(e) => {
                    const newOptions = [...WeightOption];
                    newOptions[index].Price = e.target.value;
                    setWeightOption(newOptions);
                  }}
                />
              </div>

              <div className="col-span-2 flex justify-center">
                <button
                  type="button"
                  className="bg-red-500 hover:bg-red-600 text-white text-xs px-3 py-2 rounded-lg transition"
                  onClick={() =>
                    setWeightOption(WeightOption.filter((_, i) => i !== index))
                  }
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Image Upload */}
        <div>
          <label className="block text-gray-600 font-medium mb-1">
            Product Image
          </label>
          <input
            type="file"
            accept="image/*"
            className="border border-gray-300 rounded-lg w-full h-10 px-3 py-1 cursor-pointer text-gray-700 focus:ring-2 focus:ring-blue-400"
            onChange={(e) => setImage(e.target.files[0])}
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-2 rounded-lg shadow transition"
          >
            Save Product
          </button>
        </div>
      </form>
    </div>
  );
}

export default ProductListForm;
