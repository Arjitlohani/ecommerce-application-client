import { useState } from "react";
import Footer from "../../Components/partials/Footer";
import { register } from "../Authentication/services";
import { toast } from "react-toastify";
import {  useNavigate } from "react-router-dom";

const Signup = () => {
  // State for input fields
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    address: "",
  });

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const navigate=useNavigate()

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    
    
    try {
      const signupresponse = await register(formData);

      
        
        if (signupresponse.status === 201) {
          navigate("/")
        } else {
          toast.error("Error Notification !" + e, { position: "bottom-left" });
        }
      
      
    } catch (error) {
      toast.error("Error Notification !" + error, { position: "bottom-left" });
      
    }
  };

  return (
    <>
      <div className="flex h-screen">
        {/* Left Side: Image */}
        <div
          className="w-1/2 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/logo1.png')", height: "34rem" }}
        ></div>

        {/* Right Side: Form */}
        <div className="w-1/2 flex items-center justify-center bg-gray-100">
          <form
            className="w-3/4 max-w-md bg-white shadow-md p-8 rounded"
            onSubmit={handleSubmit}
          >
            <h2 className="text-2xl font-bold mb-6 text-center">Signup</h2>

            {/* Name Input */}
            <div className="mb-4">
              <label htmlFor="name" className="block text-base font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-lg p-2"
                required
              />
            </div>

            {/* Email Input */}
            <div className="mb-4">
              <label htmlFor="email" className="block text-base font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-lg p-2"
                required
              />
            </div>

            {/* Phone Number Input */}
            <div className="mb-4">
              <label htmlFor="phone" className="block text-base font-medium text-gray-700">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-lg p-2"
                required
              />
            </div>

            {/* Password Input */}
            <div className="mb-4">
              <label htmlFor="password" className="block text-base font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-lg p-2"
                required
              />
            </div>

            {/* Address Input */}
            <div className="mb-4">
              <label htmlFor="address" className="block text-base font-medium text-gray-700">
                Address
              </label>
              <input
                id="address"
                name="address"
                rows="3"
                value={formData.address}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-lg p-2"
                required
              ></input>
            </div>

            {/* Submit Button */}
            <div className="mt-6">
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-3 px-4 text-lg rounded-md hover:bg-indigo-700
                 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Signup;
