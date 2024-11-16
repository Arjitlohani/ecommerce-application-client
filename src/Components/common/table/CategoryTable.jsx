import { useEffect, useState } from "react";
import './table.css';
import { axiosInstance } from "../../../utils/config/apiConfig";

const CategoryTable = ({ refreshTrigger }) => {
    const [categories, setCategories] = useState([]);
    const [error, setError] = useState(null);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);

    const fetchCategories = async (reset = false) => {
        try {
            const response = await axiosInstance.get(`/category?page=${page}&limit=10`);
            if (response.data.success) {
                setCategories((prev) => reset ? response.data.categories : [...prev, ...response.data.categories]);
                setHasMore(response.data.categories.length === 10); 
            } else {
                setError("Failed to fetch categories.");
            }
        } catch (error) {
            console.error("Error fetching categories:", error);
            setError("Failed to fetch categories.");
        }
    };

    useEffect(() => {
        fetchCategories(true); 
    }, [refreshTrigger]);

    useEffect(() => {
        if (page > 1) fetchCategories();
    }, [page]);

    const loadMore = () => {
        if (hasMore) setPage((prev) => prev + 1);
    };

    return (
        <div>
            <h2>Category List</h2>
            {error && <p className="error">{error}</p>}
            <table id="category-table" className="w-full border-black">
                <thead>
                    <tr>
                        <th>S.N</th>
                        <th>Category Name</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {categories.length > 0 ? (
                        categories.map((category, index) => (
                            <tr key={category._id}>
                                <td>{index + 1}</td>
                                <td>{category.name}</td>
                                <td>Edit</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="3">No category available</td>
                        </tr>
                    )}
                </tbody>
            </table>
            {hasMore && (
                <button onClick={loadMore} className="btn btn-secondary mt-4">Load More</button>
            )}
        </div>
    );
};

export default CategoryTable;
