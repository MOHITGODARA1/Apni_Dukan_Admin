import { useNavigate } from "react-router-dom"
function Navbar(){
  const navigate=useNavigate();
  return(
    <>
      <div className="h-screen w-45 fixed border-r border-gray-200">
        <div className="flex justify-center items-center">
          <img src="./logo.png" alt="" className="h-20" />
        </div>
        <div className="h-[1px] bg-gray-300"></div>
        <div>
            <div className="cursor-pointer mt-1.5 border border-black h-8 flex justify-center items-center w-[90%] ml-[5%] rounded-lg" onClick={()=>navigate('/Dashbord')}>
              <p >
                Dashboard
              </p>
            </div>
            <div   className="cursor-pointer mt-1.5 border border-black h-8 flex justify-center items-center w-[90%] ml-[5%] rounded-lg" onClick={()=>navigate('/Order')}>
              <p>
                Order
              </p>
            </div>
            <div   className="cursor-pointer mt-1.5 border border-black h-8 flex justify-center items-center w-[90%] ml-[5%] rounded-lg" onClick={()=>navigate('/Product-List')}>
              <p>
                Product List
              </p>
            </div>
            <div   className="cursor-pointer mt-1.5 border border-black h-8 flex justify-center items-center w-[90%] ml-[5%] rounded-lg" onClick={()=>navigate('/Product-item')}>
              <p>
                Products
              </p>
            </div>
            <div   className="cursor-pointer mt-1.5 border border-black h-8 flex justify-center items-center w-[90%] ml-[5%] rounded-lg"
            onClick={()=>{
              localStorage.removeItem("loginData");
              navigate('/');
            }}>
              <p>
                Logout
              </p>
            </div>
        </div>
      </div>
    </>
  )
}
export default Navbar