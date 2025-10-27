import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  useEffect(() => {
    async function fetchProduct() {
      try {
        const response = await axios.get(`${API_BASE_URL}/Product-get/${id}`);
        setProduct(response.data.product); 
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-pulse flex flex-col items-center">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          <p className="mt-4 text-gray-600 text-lg">Loading product details...</p>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-center">
          <p className="text-red-500 text-xl font-semibold">Product not found.</p>
          <button 
            onClick={() => navigate("/Product-item")}
            className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
          >
            Back to Products
          </button>
        </div>
      </div>
    );
  }


  async function handeldelet(id) {
    if (!window.confirm("Are you sure you want to delete this product?")) {
      return;
    }

    try {
      const send = { id };
      await axios.post(
        `${API_BASE_URL}/Product-delet`,
        send, {
          headers: {
            "Content-Type": "application/json",
          }
        }
      );
      alert("Product deleted successfully ✅");
      navigate("/Product-item");
    } catch (error) {
      alert("Error in deleting a product");
      console.log(error);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8 px-4">
      {/* Header */}
      <div className="max-w-6xl mx-auto mb-6">
        <button 
          onClick={() => navigate("/Product-item")}
          className="flex items-center text-gray-600 hover:text-gray-900 transition mb-4"
        >
          <span className="mr-2">←</span> Back to Products
        </button>
        <h1 className="text-4xl font-bold text-gray-800">Product Details</h1>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-5">
            {/* Left Section - Image */}
            <div className="md:col-span-2 flex justify-center items-start bg-gray-50 p-8">
              <img
                src={product.ImageOfProduct || "https://via.placeholder.com/400"}
                alt={product.ProductName}
                className="max-h-96 w-full object-contain rounded-lg"
              />
            </div>

            {/* Right Section - Top Details */}
            <div className="md:col-span-3 p-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                {product.ProductName}
              </h1>
              
              <div className="mb-6">
                <p className="text-gray-600 leading-relaxed">
                  {product.Description}
                </p>
              </div>

              <div className="mb-6 inline-block">
                <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                  {product.Tag}
                </span>
              </div>
            </div>
          </div>

          {/* Full Width Bottom Section - Price/Weight Options & Delete Button */}
          <div className="px-8 pb-8">
            {/* Price Section */}
            {product.Price ? (
              <div className="mb-6">
                <p className="text-sm text-gray-500 mb-1">Price</p>
                <p className="text-4xl font-bold text-green-600">₹{product.Price}</p>
              </div>
            ) : (
              <div className="mb-6">
                <p className="text-sm text-gray-500 mb-3 font-semibold">Weight Options</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {product.WeightOption?.map((opt, i) => (
                    <div
                      className="bg-gradient-to-r from-blue-50 to-blue-100 border-2 border-blue-200 rounded-lg p-4 hover:shadow-md transition"
                      key={i}
                    >
                      <p className="text-gray-700 font-medium">{opt.Weight}</p>
                      <p className="text-green-600 font-bold text-lg">₹{opt.Price}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Delete Button */}
            <div className="pt-6 border-t border-gray-200">
              <button 
                className="w-full md:w-auto bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-8 rounded-lg transition duration-200 shadow-md hover:shadow-lg flex items-center justify-center"
                onClick={() => handeldelet(product._id)}
              >
                <span className="mr-2">🗑️</span> Delete Product
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;