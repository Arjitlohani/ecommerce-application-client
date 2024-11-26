import { useState } from "react";


const ForgetPassword = () => {
    const [email, setEmail] = useState("");
    const handleChange = (e)=>{
        setEmail(e.target.value)
    }
  return (
    <div>
    <input type="email" value={email} onChange={handleChange} className="form-control rounded-xl" placeholder="Enter your email" required={true} />
      
    </div>
  )
}

export default ForgetPassword
