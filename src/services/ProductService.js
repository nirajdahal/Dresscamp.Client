import { getStorage, ref, uploadBytesResumable, getDownloadURL, deleteObject } from "firebase/storage";
import { collection, addDoc, Timestamp, query, onSnapshot, orderBy, deleteDoc, doc } from "firebase/firestore";
import { db, storage } from "../firebase/config";
export const uploadImageToFirebase = (file, callback, getDownloadUrlCallback) => {
    const storage = getStorage();
    // Upload file and metadata to the object 'images/mountains.jpg'
    const storageRef = ref(storage, `eshop/${Date.now()}${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);
    // Listen for state changes, errors, and completion of the upload.
    uploadTask.on('state_changed',
        (snapshot) => {
            // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');
            callback(progress)
            switch (snapshot.state) {
                case 'paused':
                    console.log("paused")
                    break;
                case 'running':
                    console.log('Upload is running');
                    break;
            }
        },
        (error) => {
            // A full list of error codes is available at
            // https://firebase.google.com/docs/storage/web/handle-errors
            switch (error.code) {
                case 'storage/unauthorized':
                    // User doesn't have permission to access the object
                    throw new Error("Acces denied")
                case 'storage/canceled':
                    // User canceled the upload
                    throw new Error("User cancelled the upload")
                // ...
                case 'storage/unknown':
                    // Unknown error occurred, inspect error.serverResponse
                    throw new Error("Unknown error occurred, inspect error.serverResponse")
                default:
                    throw new Error("Something went wrong")
            }
        },
        () => {
            // Upload completed successfully, now we can get the download URL
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                console.log('File available at', downloadURL);
                getDownloadUrlCallback(downloadURL)
            });
        }
    );
}
export const AddProductToDb = async (product) => {
    try {
        // Add a new document with a generated id.
        await addDoc(collection(db, "products"), {
            name: product.name,
            imageUrl: product.imageUrl,
            price: Number(product.price),
            category: product.category,
            brand: product.brand,
            desc: product.desc,
            createdAt: Timestamp.now().toDate()
        });
    }
    catch (error) {
        throw new Error(error.message)
    }
}
export const getProductsFromDb = (callback) => {
    try {
        const productsRef = collection(db, "products");
        const q = query(productsRef, orderBy("createdAt", "desc"));
        onSnapshot(q, (snapshot) => {
            const products = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            }))
            callback(products)
        })
    } catch (error) {
        throw new Error(error.message)
    }
}
export const deleteProductFromDb = async (id) => {
    try {
        await deleteDoc(doc(db, "products", id));
    } catch (error) {
        throw (error.message)
    }
}
export const deleteImageFromDb = async (imageUrl) => {
    try {
        const storageRef = ref(storage, imageUrl);
        await deleteObject(storageRef)
    } catch (error) {
        throw new Error(error.message)
    }
}
