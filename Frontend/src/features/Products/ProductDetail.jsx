import axios from "axios";
import { useParams,useNavigate  } from "react-router-dom";
import { useEffect, useState } from "react";

function ProductDetail() {
  const { id } = useParams(); // ✅ Correct way to get ID
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate=useNavigate();
  
  useEffect(() => {
    async function fetchProduct() {
      try {
        const response = await axios.get(`http://localhost:4000/api/v1/list/Product-get/${id}`);
        setProduct(response.data.product); // 👈 Make sure your backend sends product as 'product'
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchProduct();
  }, [id]);

  if (loading) {
    return <p className="text-center mt-10 text-gray-600">Loading product details...</p>;
  }

  if (!product) {
    return <p className="text-center mt-10 text-red-500">Product not found.</p>;
  }
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  async function handeldelet(id){
    try {
      const send={id};
      await axios.post(
        `${API_BASE_URL}/list/Product-delet`,
        send,{
          headers:{
            "Content-Type": "application/json",
          }
        }
      )
      alert("Product deleted successfully ✅")
      navigate("/Product-item")
    } catch (error) {
      alert("error in deleting a product");
      console.log(error)
    }
  }

  return (
    <>
      <div>
        <h1 className="text-2xl font-serif ml-3 mt-4">Product Detail</h1>
      </div>

      <div className="ml-5 mt-5 w-[90%]">
        <div className="w-full  p-5 rounded-xl shadow-md">
          {/* Image Section */}
          <div className="flex h-full w-full justify-center items-center">
            <div className="flex w-[40%] h-60">
              <img
                src={product.ImageOfProduct || "https://via.placeholder.com/150"}
                alt={product.ProductName}
                className="object-fit rounded-lg"
              />

            </div>
            <div className=" h-full w-[60%] flex flex-col justify-center">
                <h1 className=" text-2xl font-bold">
                  {product.ProductName}
                </h1>
                <h1 className=" mt-3 text-sm text-gray-400">
                  {product.Description}
                </h1>
                <h1 className=" mt-3 text-sm text-gray-400">
                  <span className="text-black font-semibold">Tag:-</span>{product.Tag}
                </h1>
                {
                  product.Price ?(
                    <p className=" mt-5 text-sm text-gray-400">₹{product.Price}</p>
                  ):(
                    <>
                      <div className="mt-5">
                        <div className="grid grid-cols-4 gap-3">
                          {product.WeightOption?.map((opt, i) => (
                            <div
                              className="h-13 w-25 rounded-lg  bg-blue-100 flex items-center justify-center"
                              key={i}
                            >
                              <p className="text-sm">
                                {opt.Weight}-₹{opt.Price}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>

                    </>
                  )
                }
            </div>
          </div>
          <div className="w-full h-20  flex justify-end items-center">
              <button className="bg-red-500 h-9 rounded-lg w-29 text-white" onClick={()=>handeldelet(product._id)}>
                Delete Product
              </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetail;
