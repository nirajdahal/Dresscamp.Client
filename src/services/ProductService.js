import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
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
                    break;
                case 'storage/canceled':
                    // User canceled the upload
                    throw new Error("User cancelled the upload")
                    break;
                // ...
                case 'storage/unknown':
                    // Unknown error occurred, inspect error.serverResponse
                    throw new Error("Unknown error occurred, inspect error.serverResponse")
                    break;
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