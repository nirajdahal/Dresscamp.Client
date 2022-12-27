import React from 'react'
import { Link } from 'react-router-dom'
function NotFound() {
    return (
        <div>Sorry Counldnot Find anything that matched your result
            <p>Take me home</p>
            <Link to="/">Home</Link>
        </div>
    )
}
export default NotFound