import React from 'react'
import { useState } from 'react'
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { toast } from 'react-toastify';
import { uploadImageToFirebase } from '../../../services/ProductService';
const categories = [{
    id: 1,
    name: "Laptop"
},
{
    id: 2,
    name: "Mobile"
},
{
    id: 3,
    name: "Watch"
}]
const AddProduct = () => {
    const [product, setProducts] = useState({
        name: "",
        imageUrl: "",
        price: 0,
        category: "",
        brand: "",
        desc: ""
    })
    const [progress, setProgress] = useState(0)
    const storage = getStorage()
    const handleInputChange = (e) => {
        const { name, value } = e.target
        setProducts({ ...product, [name]: value })
    }
    const handleImageChange = (e) => {
        const selectedImage = e.target.files[0]
        // const storageRef = ref(storage, `eshop/${Date.now()}${selectedImage.name}`);
        // const uploadTask = uploadBytesResumable(storageRef, selectedImage);
        // uploadTask.on('state_changed',
        //     (snapshot) => {
        //         const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        //         console.log('Upload is ' + progress + '% done');
        //         switch (snapshot.state) {
        //             case 'paused':
        //                 console.log('Upload is paused');
        //                 break;
        //             case 'running':
        //                 console.log('Upload is running');
        //                 break;
        //         }
        //     },
        //     (error) => {
        //         toast.error(error.message)
        //     },
        //     () => {
        //         getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        //             console.log('File available at', downloadURL);
        //         });
        //     }
        // );
        try {
            uploadImageToFirebase(selectedImage,
                (progressVal) => setProgress(progressVal),
                (url) => {
                    setProducts({ ...product, imageUrl: url })
                    if (url) {
                        toast.success("Image uploaded sucessfully")
                    }
                })
        }
        catch (error) {
            toast.error(error)
        }
    }
    const handleSave = (e) => {
        e.preventDefault()
        console.log(product)
    }
    return (
        <div>
            <form onSubmit={handleSave}>
                <label>Name</label>
                <input
                    required
                    defaultValue={product.name}
                    type="text"
                    name="name"
                    onChange={(e) => handleInputChange(e)}
                    placeholder="Product Name"
                    className="input input-bordered input-primary w-full max-w-xs"
                />
                <br />
                <label>Image</label>
                {progress && <progress className="progress progress-success w-56" value={progress} max="100"></progress>}
                <br /><input
                    required
                    type="file"
                    accept='image/*'
                    name="image"
                    onChange={(e) => handleImageChange(e)}
                    className="input input-bordered input-primary w-full max-w-xs"
                />
                <br />
                {product.imageUrl &&
                    <input
                        className='input-lg w-full max-w-xs'
                        type="text"
                        required
                        disabled
                        name="imageUrl"
                        value={product.imageUrl}
                    />
                }
                <br />
                <label>Price</label>
                <input
                    required
                    type="number"
                    defaultValue={product.price}
                    name="price"
                    onChange={(e) => handleInputChange(e)}
                    placeholder="Product price"
                    className="input input-bordered input-primary w-full max-w-xs"
                />
                <br />
                <label>Category</label>
                <select
                    required
                    name="category"
                    value={product.category}
                    onChange={e => handleInputChange(e)}
                    className="select select-bordered select-primary w-full max-w-xs">
                    <option disabled>Pick a category</option>
                    {categories.map((category) => {
                        return <option value={category.name} key={`${category.id}`}>{category.name}</option>
                    })}
                </select>
                <br />
                <label>Brand</label>
                <input
                    required
                    defaultValue={product.brand}
                    type="text"
                    name="brand"
                    onChange={(e) => handleInputChange(e)}
                    placeholder="Product Brand"
                    className="input input-bordered input-primary w-full max-w-xs"
                />
                <br />
                <label>Product Description</label>
                <textarea
                    required
                    name="desc"
                    type="text"
                    onChange={(e) => handleInputChange(e)}
                    className="textarea textarea-bordered" placeholder="Bio">
                </textarea>
                <br />
                <button type="submit" className='btn-primary'>Save</button>
            </form>
        </div>
    )
}
export default AddProduct