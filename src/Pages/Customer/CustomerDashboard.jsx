
import  { useState } from 'react';
import Navbar from '../../Components/Customer/Navbar';
import Sidebar from '../../Components/Customer/Sidebar';
import BannerSlider from '../../Components/Customer/BannerSlider';

import Card from '../../Components/Customer/Card';
import Footer from '../../Components/partials/Footer';



const CustomerDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="relative min-h-screen bg-gray-100">
      {/* Navbar */}
      <Navbar toggleSidebar={toggleSidebar} />

      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Main Content */}
      <div className={`p-4 transition-all duration-300 ${sidebarOpen ? 'ml-64' : ''}`}>
        <BannerSlider />
        
        {/* Product Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          <Card
            image="https://via.placeholder.com/150"
            productName="Product 1"
            description="This is a brief product description."
            price="$29.99"
          />
          <Card
            image="https://via.placeholder.com/150"
            productName="Product 2"
            description="This is a brief product description."
            price="$19.99"
          />
          <Card
            image="https://via.placeholder.com/150"
            productName="Product 3"
            description="This is a brief product description."
            price="$49.99"
          />
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default CustomerDashboard;
