import Navbar from "../Components/navbar"
import ProductListForm from "../features/Listing/ProductListFrom"
function ProductList(){
  return(
    <div className="flex">
        <Navbar />
      <div className="ml-45 flex-1 bg-gray-50 min-h-screen">
        <ProductListForm />
      </div>
    </div>
  )
}
export default ProductList