// components/Navbar.jsx

import { logout } from "../../Pages/Authentication/services";
import Button from "../common/Button";


const Navbar = ({ toggleSidebar }) => {
  return (

    <nav className="bg-blue-600 p-4 text-white flex justify-between">
      <button onClick={toggleSidebar} className="text-2xl">
        ☰
      </button>
      <h1 className="text-xl">Customer Dashboard</h1>
      <Button onClick={logout} className="btn d-inline ms-auto bg-slate-50 btn-outline-success ml-2" >Logout</Button>

    </nav>
  );
};

export default Navbar;
