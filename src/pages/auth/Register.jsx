import React from 'react'
import { Link } from 'react-router-dom'
function Register() {
    return (
        <>
            <div className='card w-96 bg-base-100 shadow-xl'>
                <h1 className='text-center'>Register</h1>
                {/* input */}
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
                        <label className="label">
                            <span className="label-text">Confirm Password</span>
                        </label>
                        <input required type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                        <label className="label">
                            <span className="label-text-alt">Error Message</span>
                        </label>
                        <button className='btn btn-primary'>Register</button>
                    </div>
                </form>
                <br />
                <div className='form-control w-full max-w-xs'>
                    <p>Do You already have an account?</p>
                    <a className='text-center'><Link to="/login">Login</Link></a>
                    <br />
                    <br />
                </div>
            </div>
        </>
    )
}
export default Register