import { logout } from "../../Pages/Authentication/services"

import { Link } from "react-router-dom"
import Button from "../common/Button"


const Navbar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <Link className="navbar-brand" to="/dashboard"><img src="images/navLogo.png" alt="logo" className="img-fluid" style={{width:"40%", height:"70%",marginLeft:"15px"}}/> </Link>
 
  
  <Link to="/dashboard" className="nav-link" >Dashboard</Link>
  <Link to="/favorites" className="nav-link" style={{marginLeft:"15px"}}>Favorites</Link>
  
  
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    
    
    
    
    <Button onClick={logout} className="btn d-inline ms-auto btn-outline-success" >Logout</Button>
  </div>
</nav>
      
    </div>
  )
}

export default Navbar
