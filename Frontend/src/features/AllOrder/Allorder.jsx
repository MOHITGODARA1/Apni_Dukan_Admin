function Allorders(){
  return(
    <>
      <div className="mt-6">
        {/* All Orders */}
        <div className="mt-3">
          {/* header */}
          <div className="flex  items-center h-10 ml-14 border-b w-200">
            <div className="h-full  w-40">
              <p className="ml-2.5 mt-2">Order ID</p>
            </div>
            <div className="h-full  w-40">
              <p className="ml-2.5 mt-2">Customer</p>
            </div>
            <div className="h-full  w-40">
              <p className="ml-2.5 mt-2">Date</p>
            </div>
            <div className="h-full  w-40">
              <p className="ml-2.5 mt-2">Status</p>
            </div>
            <div className="h-full  w-40">
              <p className="ml-2.5 mt-2">Total</p>
            </div>
          </div>
          
        </div>
      </div>
    </>
  )
}
export default Allorders