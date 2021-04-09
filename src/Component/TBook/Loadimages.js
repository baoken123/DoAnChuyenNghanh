import React , { useState } from 'react';

export default function Load() {
    const [baseImage, setBaseImage] = useState("")

    const upLoadImage = async (e) =>{
        const file = e.target.files[0];
        const base64 = await convertBase64(file);
        setBaseImage(base64);
    };

    const convertBase64 = (file) => {
        return new Promise((resolve,reject) => {
            const fileReader  = new FileReader();
            fileReader.readAsDataURL(file);
 
            fileReader.onload = () => {
                resolve(fileReader.result);
            }

            fileReader.onError = (error) => {
                reject(error);
            }
            
        });
    }
    return (
        <div>
            <input type="file"  onChange={(e)=>{
                upLoadImage(e);
            }} />
            <br></br>
            <img src={baseImage} height="400px" />
        </div>
    )
}
