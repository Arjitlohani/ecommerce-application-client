

const LoginForm = () => {
  return (
    <>
   
    <form id="form">
    
  {/* <!-- Email input --> */}
  <div data-mdb-input-init className="form-outline mb-4">
  <label className="form-label" htmlFor="form1Example1">Email address</label>
    <input type="email" id="form1Example1" className="form-control" />
    
  </div>

  {/* <!-- Password input --> */}
  <div data-mdb-input-init className="form-outline mb-4">
  <label className="form-label" htmlFor="form1Example2">Password</label>
    <input type="password" id="form1Example2" className="form-control" />
    
  </div>


  <div className="row mb-4">
    

    <div className="col">
      {/* <!-- Simple link --> */}
      <a href="#!">Forgot password?</a>
    </div>
  </div>

  {/* <!-- Submit button --> */}
  <button data-mdb-ripple-init type="submit" className="btn btn-primary btn-block">Sign in</button>
</form>


    </>
  )
}

export default LoginForm
