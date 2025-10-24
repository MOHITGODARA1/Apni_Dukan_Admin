import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./Pages/Login.page";
import DashboardPage from "./Pages/Dashbord.page";
import ProductList from "./Pages/ProductList.page";
import OrderPage from "./Pages/Order.page";
import Productitem from "./Pages/Products.page";
import ProductDetailPage from "./Pages/Productdetail.page";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/Dashbord" element={<DashboardPage />} />
        <Route path="/Order" element={<OrderPage />} />
        <Route path="/Product-List" element={<ProductList />} />
        <Route path="/Product-item" element={<Productitem />} />
        <Route path="/product-details/:id" element={<ProductDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}
