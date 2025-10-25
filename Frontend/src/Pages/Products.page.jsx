import Navbar from "../Components/navbar"
import Products from "../features/Products/Products"
function Productitem(){
  return(
    <div className="flex">
        <Navbar />
      <div className="ml-45 flex-1 bg-gray-50 min-h-screen">
        <Products />
      </div>
    </div>
  )
}
export default Productitem