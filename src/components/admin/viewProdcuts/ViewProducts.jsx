import { collection, deleteDoc, limit, onSnapshot, orderBy, query } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import { db } from '../../../firebase/config';
import { deleteImageFromDb, deleteProductFromDb, getProductsFromDb } from '../../../services/ProductService';
const ViewProducts = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        console.log("hello")
        getProducts()
    }, [])
    const getProducts = () => {
        try {
            getProductsFromDb((val) => setProducts(val))
        } catch (error) {
            toast.error(error)
        }
    }
    const deleteProduct = async (id, imageUrl) => {
        const deleteConfirmed = window.confirm("Are you sure you want to delete?")
        if (deleteConfirmed) {
            try {
                await deleteProductFromDb(id)
                await deleteImageFromDb(imageUrl)
                toast.success("Product deleted sucessfully")
            } catch (error) {
                toast.error(error)
            }
        }
    }
    return (
        <>
            <div className=" w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {products &&
                            products.map((product) =>
                                <tr key={product.id}>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={product.imageUrl} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{product.name}</div>
                                                <div className="text-sm opacity-50">{product.brand}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {product.category}
                                    </td>
                                    <td>$ {product.price}</td>
                                    <th>
                                        <button className="btn btn-ghost btn-xs">Edit</button>
                                        <button onClick={() => deleteProduct(product.id, product.imageUrl)} className="btn btn-ghost btn-xs">Delete</button>
                                    </th>
                                </tr>
                            )
                        }
                    </tbody>
                    <tfoot>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>category</th>
                            <th>Price</th>
                            <th></th>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </>
    )
}
export default ViewProducts