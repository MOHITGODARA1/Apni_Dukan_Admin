import Navbar from "../Components/navbar"
import Allorders from "../features/AllOrder/Allorder"
function OrderPage(){
  return(
    <>
      <div className="flex">
        <Navbar />
      <div className="ml-45 flex-1 bg-gray-50 min-h-screen">
        <Allorders />
      </div>
    </div>
    </>
  )
}
export default OrderPage