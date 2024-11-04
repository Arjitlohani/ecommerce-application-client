

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <aside className={`rounded fixed top-0 left-0 w-64 bg-blue-500 h-full z-50 transform ${isOpen ?
     'translate-x-0' : '-translate-x-full'} transition-transform duration-300`}>
      <div className="text-white p-4">
        <button onClick={toggleSidebar} className="mb-4">Close X</button>
        <ul>
          <li className="mb-2"><a href="#" className="text-white shadow">Dashboard</a></li>
          <li className="mb-2"><a href="#" className="text-white shadow">Category</a></li>
          <li className="mb-2"><a href="#" className="text-white shadow ">Product</a></li>
          <li className="mb-2"><a href="#" className="text-white shadow">Orders</a></li>
          <li className="mb-2"><a href="#" className="text-white shadow">Settings</a></li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
