import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectEmail } from '../../../redux/slice/authSlice'
const Sidebar = () => {
    const userEmail = useSelector(selectEmail)
    return (<>
        <p ><button disabled><small>{userEmail}</small></button></p>
        <br />
        <br />
        <Link to="/admin/home" className="btn btn-ghost normal-case text-xl">Dashboard </Link>
        <Link to="/admin/view-products" className="btn btn-ghost normal-case text-xl">View </Link>
        <Link to="/admin/add-product" className="btn btn-ghost normal-case text-xl">Add</Link>
        <Link to="/admin/orders" className="btn btn-ghost normal-case text-xl">Orders</Link>
    </>
    )
}
export default Sidebar