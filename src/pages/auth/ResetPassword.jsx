import { useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';
import { resetPasswordWithEmail } from '../../services/AuthService'
function ResetPassword() {
    const [email, setEmail] = useState('')
    const handleResetPassword = async (e) => {
        e.preventDefault()
        try {
            await resetPasswordWithEmail(email)
            toast.success("Check your email for further instructions")
        } catch (error) {
            toast.error(error.message)
        }
    }
    return (
        <>
            <h1>Reset Password</h1>
            <form onSubmit={handleResetPassword}>
                <input value={email} onChange={(e) => setEmail(e.target.value)} className="input input-bordered w-full max-w-xs" type="text" placeholder="Email" />
                <br />
                <button className='btn btn-primary'>Reset </button>
                <br />
                <Link to='/login'>Go To Login</Link>
                <br />
                <Link to='/register'>Go To Register</Link>
            </form>
        </>
    )
}
export default ResetPassword