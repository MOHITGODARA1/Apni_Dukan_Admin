import Navbar from "../Components/navbar"
import ProductDetail from "../features/Products/ProductDetail"
function ProductDetailPage(){
  return(
    <>
      <div className="flex">
        <Navbar />
      <div className="ml-45 flex-1 bg-gray-50 min-h-screen">
        <ProductDetail />
      </div>
    </div>
    </>
  )
}
export default ProductDetailPage