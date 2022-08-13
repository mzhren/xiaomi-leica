import React,{useContext} from 'react'
import exportImg from './util';
import ImageContext from './ImageContext';

const Download = () => {
    const {imageName} = useContext(ImageContext);
    return (
        imageName && (
        <div className="text-center my-5"><button className="bg-green-500 text-white block py-2 w-full rounded-full" onClick={() => exportImg('#camMaker', imageName)}> 下载图片 </button></div>
        )
    )
}

export default Download