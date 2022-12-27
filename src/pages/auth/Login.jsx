import React from 'react'
import { Link } from 'react-router-dom'
function Login() {
    return (
        <>
            <div className='card w-96 bg-base-100 shadow-xl'>
                {/* input */}
                <h1 className='text-center'>Login</h1>
                <form>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Enter your email</span>
                        </label>
                        <input required type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                        <label className="label">
                            <span className="label-text-alt">Error Message</span>
                        </label>
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input required type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                        <button className='btn btn-primary'>Login</button>
                    </div>
                </form>
                <br />
                <div className='form-control w-full max-w-xs'>
                    <p><Link to="/reset-password">Forgot Password?</Link></p>
                    <p className='text-center'><b>Or</b></p>
                    <button className='btn btn-primary'>Login With Google</button>
                    <p>Do You already have account with us?</p>
                    <a className='text-center'><Link to="/register">Register</Link></a>
                    <br />
                    <br />
                </div>
            </div>
        </>
    )
}
export default Login