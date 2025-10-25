import axios from "axios";
import { useState, useEffect } from "react";
import { AiOutlineEye } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Products() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  // 🟩 Fetch Products
  const navigate=useNavigate();
  useEffect(()=>{
      const isLogin=localStorage.getItem('loginData');
      if(!isLogin){
        navigate('/')
      }
  },[navigate])
  useEffect(() => {
    async function fetchProducts() {
      try {
        setLoading(true);
        const response = await axios.get(`${API_BASE_URL}/list/Product-get`);
        const data = response.data?.Products || [];
        setProducts(data);
        setFilteredProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
        setProducts([]);
        setFilteredProducts([]);
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, [API_BASE_URL]);

  // 🔍 Debounced Search Filtering
  useEffect(() => {
    const handler = setTimeout(() => {
      if (!search.trim()) {
        setFilteredProducts(products);
        return;
      }

      const lowerSearch = search.toLowerCase();
      const filtered = products.filter((item) => {
        const name = (item?.ProductName || "").toLowerCase();
        const tag = (item?.Tag || "").toLowerCase();
        return name.includes(lowerSearch) || tag.includes(lowerSearch);
      });

      setFilteredProducts(filtered);
    }, 300); // debounce delay

    return () => clearTimeout(handler);
  }, [search, products]);

  return (
    <>
      {/* Header Section */}
      <div className="flex justify-between items-center px-6 mt-6">
        <h1 className="text-3xl font-bold text-gray-800">🛍️ Apni Dukan Admin</h1>
        <input
          type="text"
          placeholder="Search by name or tag..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 w-72"
          disabled={loading}
        />
      </div>

      {/* Product Table */}
      <div className="mx-6 mt-6 border border-gray-300 rounded-xl shadow-sm bg-white overflow-hidden">
        {/* Table Header */}
        <div className="grid grid-cols-10 bg-gray-100 border-b border-gray-300 text-gray-700 font-semibold text-sm py-3">
          <div className="col-span-1 text-center">No.</div>
          <div className="col-span-4 text-center">Product Name</div>
          <div className="col-span-3 text-center">Tag</div>
          <div className="col-span-2 text-center">Actions</div>
        </div>

        {/* Table Rows */}
        <div className="divide-y divide-gray-200">
          {loading ? (
            <div className="py-10 text-center text-gray-500">Loading products... ⏳</div>
          ) : filteredProducts.length > 0 ? (
            filteredProducts.map((item, index) => (
              <div
                key={item._id}
                className={`grid grid-cols-10 text-sm py-3 items-center hover:bg-gray-50 transition ${
                  index % 2 === 0 ? "bg-white" : "bg-gray-50"
                }`}
              >
                <div className="col-span-1 text-center text-gray-600">{index + 1}</div>
                <div className="col-span-4 text-center text-gray-800 truncate px-2">
                  {item?.ProductName || "—"}
                </div>
                <div className="col-span-3 text-center text-gray-500 truncate px-2">
                  {item?.Tag || "—"}
                </div>
                <div className="col-span-2 flex justify-center">
                  <Link to={`/product-details/${item._id}`}>
                    <button className="flex items-center gap-1 text-blue-600 hover:text-blue-800 transition">
                      <AiOutlineEye className="text-lg" /> View
                    </button>
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <div className="py-10 text-center text-gray-500">
              {search.trim() ? `No products found for "${search}" 😕` : "No products available 😕"}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Products;
