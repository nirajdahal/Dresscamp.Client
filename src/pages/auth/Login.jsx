import { useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import { signInUsingEmailAndPassword, signWithGoogle } from '../../services/AuthService'
import { useNavigate } from 'react-router-dom';
import { GoogleAuthProvider } from "firebase/auth"
function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    const hangleSignInWithGoogle = async () => {
        try {
            const result = await signWithGoogle()
            console.log(result)
        }
        catch (error) {
            toast.error(error.message)
            console.log(error.message)
        }
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const userCredential = await signInUsingEmailAndPassword(email, password)
            console.log("userCredentials from login component", userCredential)
            toast.success("Sucessfully logged in")
            navigate("/")
        }
        catch (error) {
            toast.error(error.message)
        }
    }
    return (
        <>
            <div className='card w-96 bg-base-100 shadow-xl'>
                {/* input */}
                <h1 className='text-center'>Login</h1>
                <form onSubmit={handleSubmit}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Enter your email</span>
                        </label>
                        {/* Input for email */}
                        <input onChange={(e) => setEmail(e.target.value)} required type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                        <label className="label">
                            <span className="label-text-alt">Error Message</span>
                        </label>
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        {/* Input for password */}
                        <input onChange={(e) => setPassword(e.target.value)} required type="password" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                        <button type="submit" className='btn btn-primary'>Login</button>
                    </div>
                </form>
                <br />
                <div className='form-control w-full max-w-xs'>
                    <p><Link to="/reset-password">Forgot Password?</Link></p>
                    <p className='text-center'><b>Or</b></p>
                    <button onClick={hangleSignInWithGoogle} className='btn btn-primary'>Login With Google</button>
                    <p>Do You already have account with us?</p>
                    <p className='text-center'><Link to="/register">Register</Link></p>
                    <br />
                    <br />
                </div>
            </div>
        </>
    )
}
export default Login