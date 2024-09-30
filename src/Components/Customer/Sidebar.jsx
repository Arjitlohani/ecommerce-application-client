

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <aside className={`fixed top-0 left-0 w-64 bg-gray-800 h-full z-50 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300`}>
      <div className="text-white p-4">
        <button onClick={toggleSidebar} className="mb-4">Close X</button>
        <ul>
          <li className="mb-2"><a href="#" className="text-white">Dashboard</a></li>
          <li className="mb-2"><a href="#" className="text-white">Orders</a></li>
          <li className="mb-2"><a href="#" className="text-white">Settings</a></li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
