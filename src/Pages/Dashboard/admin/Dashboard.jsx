import { Link } from "react-router-dom"
import Navbar from "../../../Components/partials/Navbar"
import FloatingCard from "../../../Components/common/floatingcard/FloatingCard"
import './dashboard.css'



const Dashboard = () => {
  const userCard=({
    title:"Total -  User",
    cardName:"Add User"
  }
  )

const productCard=(  {
  title:"Total -  Product",
  cardName:"Add Product"
})

const categoryCard=(
{
  title:"Total - Category",
  cardName:"Add Category"
}
)

const handleAddUser=()=>{
}

const handleSideBar=(e)=>{}
const  openNav =()=> {
   document.getElementById("mySidebar").style.width = "250px";
   document.getElementById("main").style.marginLeft = "250px";
 }
 
 const closeNav=()=> {
   document.getElementById("mySidebar").style.width = "0";
   document.getElementById("main").style.marginLeft= "0";
 }




  return (
    <div>
          <Navbar/>
          <div id="mySidebar" className="sidebar">
  <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>×</a>
  <a href="#">About</a>
  <a href="#">Services</a>
  <a href="#">Clients</a>
  <a href="#">Contact</a>
</div>

<div id="main">
  <button className="openbtn" onClick={openNav}>☰ Open Sidebar</button>  
  
  <div style={{display:"flex",margin:"5px"}} > 
     <Link to={"/adduser"}>
      <FloatingCard card ={userCard}/> 

      
   

         </Link>
        <Link to={"/addproduct"}><FloatingCard card ={productCard}/>
        

       </Link>
        <Link to={"/addcategory"}><FloatingCard card ={categoryCard}/>
                
        </Link>  


        


        



        
      
      
      </div>
</div>



      </div>
   
    
  )
}

export default Dashboard
