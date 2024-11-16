import { useState } from "react";
import CategoryTable from "../../Components/common/table/CategoryTable";
import { axiosInstance } from "../../utils/config/apiConfig";
import Sidebar from "../../Components/partials/SideBar";
import Navbar from "../../Components/partials/Navbar";
import Footer from "../../Components/partials/Footer";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddCategory = () => {
    const [newCategoryName, setNewCategoryName] = useState('');
    const [refreshTrigger, setRefreshTrigger] = useState(false);
    const [isSidebarVisible, setIsSidebarVisible] = useState(true);

    const toggleSidebar = () => {
        setIsSidebarVisible(!isSidebarVisible);
    };

    const addCategory = async () => {
        try {
            const response = await axiosInstance.post('/category/create', { name: newCategoryName });
            if (response.data.success) {
                setNewCategoryName('');
                toast.success("Category added successfully!");
                setRefreshTrigger((prev) => !prev); 
            } else {
                toast.error("Failed to add category.");
            }
        } catch (error) {
            console.error('Error adding category:', error);
            toast.error("An error occurred while adding the category.");
        }
    };

    return (
        <>
            <div className="dashboard-layout">
                {isSidebarVisible && <Sidebar />}
                <div className="main-content">
                    <Navbar toggleSidebar={toggleSidebar} />
                    <div className="content">
                        <div className="m-4 flex flex-col gap-2">
                            <label><h1>Add Category</h1></label>
                            <input 
                                type="text" 
                                value={newCategoryName}
                                onChange={(e) => setNewCategoryName(e.target.value)}
                                className="bg-gray-50 border border-gray-300 text-gray-900 w-[250px] h-8 text-sm rounded-lg"
                            />
                            <button onClick={addCategory} className="btn btn-primary w-[250px]">Add Category</button>
                        </div>
                        <CategoryTable refreshTrigger={refreshTrigger} />
                    </div>
                    <Footer />
                </div>
            </div>
            <ToastContainer />
        </>
    );
};

export default AddCategory;
