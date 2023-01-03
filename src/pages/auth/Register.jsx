import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { signUpUsingEmailAndPassword } from '../../services/AuthService';
function Register() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const navigate = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault()
        if (password !== confirmPassword) {
            toast.error("Password and Confirm Password doesnot match")
        }
        else {
            try {
                const userCredential = await signUpUsingEmailAndPassword(email, password)
                /* Todo setLoading */
                toast.success("Sucessfully registered")
                navigate("/login")
            } catch (error) {
                //todo- setLoading
                toast.error(error.message)
            }
        }
    }
    return (
        <>
            <div className='card w-96 bg-base-100 shadow-xl'>
                <h1 className='text-center'>Register</h1>
                {/* input */}
                <form onSubmit={handleSubmit}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Enter your email</span>
                        </label>
                        {/* Input for email */}
                        <input value={email} onChange={(e) => setEmail(e.target.value)} required type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                        <label className="label">
                            <span className="label-text-alt">Error Message</span>
                        </label>
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        {/* Input for password */}
                        <input value={password} onChange={(e) => setPassword(e.target.value)} required type="password" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                        <label className="label">
                            <span className="label-text">Confirm Password</span>
                        </label>
                        {/* Input for confirm-password */}
                        <input value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required type="password" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                        <label className="label">
                            <span className="label-text-alt">Error Message</span>
                        </label>
                        <button type="submit" className='btn btn-primary'>Register</button>
                    </div>
                </form>
                <br />
                <div className='form-control w-full max-w-xs'>
                    <p>Do You already have an account?</p>
                    <p className='text-center'><Link to="/login">Login</Link></p>
                    <br />
                    <br />
                </div>
            </div>
        </>
    )
}
export default Register