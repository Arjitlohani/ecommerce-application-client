import { useEffect, useState } from "react";
import { axiosInstance } from "../../../utils/config/apiConfig";
import Sidebar from "../../partials/SideBar";
import Navbar from "../../partials/Navbar";
import './table.css';


const CategoryTable = () => {
    const [categories, setCategories] = useState([]);
    const [error, setError] = useState(null);
    const [isSidebarVisible, setIsSidebarVisible] = useState(true);
    const [newCategoryName, setNewCategoryName] = useState('');
    const toggleSidebar = () => {
      setIsSidebarVisible(!isSidebarVisible);
    };

    const addCategory = async () => {
        try {
            const response = await axiosInstance.post('/category/create', {
                name: newCategoryName,
            });
            console.log('Response data:', response.data);
            if (response.data.success) {
                setCategories([...categories, response.data.categories]); // update to response.data.category
            } else {
                setError('Failed to add category.');
            }
            
        } catch (error) {
            console.error('Error adding category:', error);
            setError('Failed to add category.');
        
            
        }

    }

    useEffect(()=>{
        const fetchCategories = async () => {
            try {
                const response = await axiosInstance.get('/category', {
                    headers: {
                      'Cache-Control': 'no-cache', // Adding cache control to the request
                    },
                  });
                console.log('Response data:', response.data);
                if (response.data.success) {
                    setCategories(response.data.categories); // update to response.data.categories
                } else {
                    setError('Failed to fetch categories.');
                }
            } catch (error) {
                console.error('Error fetching categories:', error);
                setError('Failed to fetch categories.');
            }
        };
    
        fetchCategories();
    }, []);

    return (
        <div className="dashboard-layout">
          {isSidebarVisible && <Sidebar />}
          <div className="main-content">
            <Navbar toggleSidebar={toggleSidebar} />
            <div className="m-4 flex flex-col gap-2">
            <label><h1>Add category</h1></label>
            <input 
    type="text" 
    id="default-input" 
    value={newCategoryName}
    onChange={(e) => setNewCategoryName(e.target.value)} // Update state on change
    className="bg-gray-50 border border-gray-300 text-gray-900 w-[250px] text-sm rounded-lg"
/>

              <button onClick={addCategory} className="btn btn-primary w-[250px]">Add Category</button>
      
            </div> 
            <div className=" justify-center align-middle">
            <h2>Category List</h2>
      {error && <p className="error">{error}</p>}
              <table id="category-table" className=" w-full border-black ">
                <thead>
                  <tr>
                    <th>S.N</th>
                    <th>Category Name</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
          {categories.length > 0 ? (
            categories.map((categories, index) => (
              <tr key={categories._id}> 
              <td>{index + 1}</td>
                <td>{categories.name}</td>
                
                
                <td>Edit</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="2">No category available</td>
            </tr>
          )}
        </tbody>
              </table>
            </div>
            
          
            <footer className="bg-white  dark:bg-gray-900 m-4">
        <div className="w-full max-w-screen-xl mx-auto p-2 md:py-3">
          
            <hr className=" border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-3" />
            <span className="block text-sm text-gray-500 text-center dark:text-gray-400">
            © 2024 <u><strong>MeroDookan</strong></u> All Rights Reserved.</span>
        </div>
    </footer>
            </div>
           
          </div>
        
      );
}

export default CategoryTable
