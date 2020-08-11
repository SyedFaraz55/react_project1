import React from 'react'
import Nav from './nav'


const Login = (props)=> {
    console.log(props)
    return (
     <>
     <Nav />
     	<div className="container">
     	<div style={{marginTop:'40px'}}></div>
     		<form style={{width:"50%"}}>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
  </div>
  <div class="form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div><br/>
  <button type="submit" class="btn btn-secondary">Submit</button>
</form>
     	</div>
     </>
    )
}

export default Login