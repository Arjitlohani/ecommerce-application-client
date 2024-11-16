import { useState } from "react";
import Sidebar from "../../../Components/partials/SideBar";
import Navbar from "../../../Components/partials/Navbar";
import { Link } from "react-router-dom";
import Footer from "../../../Components/partials/Footer";
import ProductTable from "../../../Components/common/table/Tables";

const Dashboard = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <div className="dashboard-layout">
      {isSidebarVisible && <Sidebar />}
      <div className="main-content">
        <Navbar toggleSidebar={toggleSidebar} />
        <div className="content">
          
          

    

        
          
          <main className="flex-grow">
        <div className="container mx-auto p-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all">
            <div className="flex items-center justify-center text-blue-600 text-4xl mb-4">
              <i className="fas fa-cogs"></i>
            </div>
            <h2 className="text-xl font-semibold text-center mb-2">Products</h2>
            <p className="text-center mb-4">Add products to our collection.</p>
            <Link
              to="/addproduct"
              className="block bg-blue-600 text-white text-center py-2 px-4 rounded-lg hover:bg-blue-700 transition-all"
            >
              Shop Now
            </Link>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all">
            <div className="flex items-center justify-center text-green-600 text-4xl mb-4">
              <i className="fas fa-th-large"></i>
            </div>
            <h2 className="text-xl font-semibold text-center mb-2">Categories</h2>
            <p className="text-center mb-4">Explore various categories of products .</p>
            <Link
              to="/addcategory"
              className="block bg-green-600 text-white text-center py-2 px-4 rounded-lg hover:bg-green-700 transition-all"
            >
              View Categories
            </Link>
          </div>
      
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all">
            <div className="flex items-center justify-center text-yellow-600 text-4xl mb-4">
              <i className="fas fa-box"></i>
            </div>
            <h2 className="text-xl font-semibold text-center mb-2">Orders</h2>
            <p className="text-center mb-4">Manage orders with ease.</p>
            <Link
              to="/addorder"
              className="block bg-yellow-600 text-white text-center py-2 px-4 rounded-lg hover:bg-yellow-700 transition-all"
            >
              Manage Orders
            </Link>
          </div>
        </div>
      </main>
          <ProductTable/>
          
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Dashboard;
