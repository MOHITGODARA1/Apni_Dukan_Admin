import Navbar from "../Components/navbar";
import DashboardCount from "../features/Dashboard/DashbordCount";
import RecentOrder from "../features/Dashboard/resecntorder";
function DashboardPage() {
  return (
    <div className="flex">
      <Navbar />
      <div className="ml-45 flex-1 bg-gray-50 min-h-screen">
        <DashboardCount />
        <RecentOrder />
      </div>
    </div>
  );
}

export default DashboardPage;
