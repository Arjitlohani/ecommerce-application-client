import Footer from "../partials/Footer"


const LoginForm = ({loginInfo,setLoginInfo,handleSubmit}) => {
  const handleChange = (e)=>{
    const {name, value} = e.target
    setLoginInfo({...loginInfo, [name]:value})
}
  return (
    <>
    <style>
      
    </style>
    <div className="flex h-screen justify-center items-center">
   
    <form id="form">
    <img src="images/logo1.png" alt="logo" className="img-fluid" />
  {/* <!-- Email input --> */}
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="htmlm-label">Email address</label><br></br>
    <input type="email" name="email" value={loginInfo.email} onChange={handleChange}className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required={true}/>
    
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" name="password" value={loginInfo.password} onChange={handleChange}className="form-control" id="exampleInputPassword1"required={true}/>
  </div>

  


  <div className="row mb-4">
    

    <div className="col">
      {/* <!-- Simple link --> */}
      <a href="#!">Forgot password?</a>
    </div>
  </div>

  {/* <!-- Submit button --> */}
  <button data-mdb-ripple-init type="submit" className="btn btn-primary btn-block" onClick={handleSubmit}>Sign in</button>
</form>
</div>

<Footer/>
    </>
  )
}

export default LoginForm
