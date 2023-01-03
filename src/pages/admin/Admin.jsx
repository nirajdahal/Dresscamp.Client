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
                <aside className="w-44 fixed text-left  h-screen bg-slate-700 p-10">
                    <Sidebar />
                </aside>
                <main className="flex-1  text-center">
                    <Routes>
                        <Route path="/home" element={<Home />} ></Route>
                        <Route path="/view-products" element={<ViewProducts />} ></Route>
                        <Route path="/add-product" element={<AddProduct />} ></Route>
                        <Route path="/orders" element={<Orders />} ></Route>
                        <Route path="/*" element={<NotFound />} ></Route>
                    </Routes>
                </main>
            </div>
        </>
    )
}
export default Admin