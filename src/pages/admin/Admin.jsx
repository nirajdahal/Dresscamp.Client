import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Sidebar, { } from '../../components/admin/sidebar/Sidebar'
import Home from '../../components/admin/home/Home'
import ViewProducts from '../../components/admin/viewProdcuts/ViewProducts'
import AddProduct from '../../components/admin/addProduct/AddProduct'
import Orders from '../../components/admin/orders/Orders'
import NotFound from '../notFound/NotFound'
function Admin() {
    return (
        <>
            <div className="flex">
                <div className="flex-none text-center  h-screen bg-slate-700 p-10">
                    <Sidebar />
                </div>
                <div className="flex-auto  text-center">
                    <Routes>
                        <Route path="/home" element={<Home />} ></Route>
                        <Route path="/view-products" element={<ViewProducts />} ></Route>
                        <Route path="/add-product" element={<AddProduct />} ></Route>
                        <Route path="/orders" element={<Orders />} ></Route>
                        <Route path="/*" element={<NotFound />} ></Route>
                    </Routes>
                </div>
            </div>
        </>
    )
}
export default Admin