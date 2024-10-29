import { useState } from "react";
import Navbar from "../../Components/partials/Navbar"
import ProductTable from "../../Components/common/table/Tables";


const Products = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };
  return (
    <>


<Navbar toggleSidebar={toggleSidebar} />

<div className="flex items-center justify-center h-screen ">
  <form className="w-full max-w-lg bg-slate-300 mb-[80px] rounded p-2">
    <div className="form-row gap-3">
      <div className=" flex flex-col form-group col-md-6 gap-3">
      <div><label htmlFor="inputEmail4">Category Name</label>
      <input type="email" className="form-control" id="inputEmail4" placeholder="Category Name"/>
      </div>
      <div><label htmlFor="inputEmail4">Product Name</label>
      <input type="Category" className="form-control" id="Category" placeholder="Product Name"/>
      </div>
      <div>
        <label htmlFor="inputEmail4">Product Description</label>
        <input type="Description" className="form-control" id="Description" placeholder="Product Description"/>
      </div>
      <div>
        <label htmlFor="inputEmail4">Product Price</label>
        <input type="Price" className="form-control" id="Price" placeholder="Product Price"/>
      </div>
      <div>
      <label htmlFor="inputEmail4">Product Quantity</label>
      <input type="Quantity" className="form-control" id="Quantity" placeholder="Product Quantity"/>
      </div>
        
      </div>
    </div>
    <button type="submit" className="btn btn-primary m-3">Add Product</button>
  </form>
</div>
<div>
  <ProductTable/>
</div>



    


    </>
  )
}

export default Products
