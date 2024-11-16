import { logout } from "../../Pages/Authentication/services"

import { Link } from "react-router-dom"
import Button from "../common/Button"







const Navbar = ({ toggleSidebar }) => {
  return (
    <header className="header flex justify-between gap-4 bg-blue-950">
      <div className="header-left  ">
        <button onClick={toggleSidebar} className="menu-icon bg-slate-50">
          &#9776; 
        </button>
        
      </div>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light w-full">
        
        
  <Link className="navbar-brand" to="/dashboard"><img src="images/navLogo.png" alt="logo" 
  className="img-fluid hidden sm:block " style={{width:"40%", height:"70%"}}/> </Link>
  {/* <form className="bg-slate-100 p-3 rounded-lg flex items-center">
        <input type='text' placeholder='Search...' 
        className="bg-transparent focus:outline-none w-24 sm:w-64" 
       />
       <FaSearch className='text-slate-600'/>
      </form> */}
 
  
  <Link to="/dashboard" className="nav-link" >Dashboard</Link>
  <Link to="/addproduct" className="nav-link" style={{marginLeft:"15px"}}>Product</Link>
  <Link to="/category" className="nav-link" style={{marginLeft:"15px", marginRight:"15px"}}>Category</Link>
  <Link to="/addorder" className="nav-link" style={{marginLeft:"15px", marginRight:"15px"}}>Order</Link>

  
  

  


</nav>
      
    </div>
    <div>
    <Button onClick={logout} className="btn d-inline ms-auto btn-outline-success ml-2 bg-white hover:bg-green-700" style={{color:"black", hover:"green"}} >Logout</Button>
    </div>
      
      
    </header>
  );
};

export default Navbar;

