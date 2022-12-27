import React from 'react'
import { Link } from 'react-router-dom'
function ResetPassword() {
    return (
        <>
            <h1>Reset Password</h1>
            <form>
                <input className="input input-bordered w-full max-w-xs" type="text" placeholder="Email" />
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