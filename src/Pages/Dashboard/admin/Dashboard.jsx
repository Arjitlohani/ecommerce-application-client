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
          <div className="cards-container">
            <div
              className="card"
              style={{ backgroundImage: "url('images/3333.png')" }}
            >
              <Link to={"/addproduct"}>
                <h3>Product</h3>
                <p className="hidden sm:block">Manage your products.</p>
              </Link>
            </div>

            <div
              className="card"
              style={{
                backgroundImage: "url('images/111.png')",
                backgroundSize: "cover",
              }}
            >
              <Link to={"/adduser"}>
                <h3>User</h3>
                <p className="hidden sm:block text-red-600">
                  Manage users and their roles.
                </p>
              </Link>
            </div>

            <div
              className="card"
              style={{ backgroundImage: "url('images/122.png')" }}
            >
              <Link to={"/addorder"}>
                <h3>Order</h3>
                <p className="hidden sm:block text-amber-400">
                  Track orders and payments.
                </p>
              </Link>
            </div>
          </div>
          <h3 className="block sm:hidden text-amber-400">Users Information</h3>
          <ProductTable />
          
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Dashboard;
