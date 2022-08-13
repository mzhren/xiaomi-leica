import React,{useState,useContext} from 'react'
import AddImage from './Icons/add_image.svg';
import ImageContext from './ImageContext';

const SelectImage = () => {
    const [imgSrc, setImgSrc] = useState('')
    const {setImageName,setImageDate} = useContext(ImageContext);
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        console.log(file);
        setImageName(file.name);
        setImageDate(file.lastModifiedDate);
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = (e) => {
            setImgSrc(e.target.result)
        }
    }

    const triggerFileInput = () => {
        const fileInput = document.getElementById('select-image');
        fileInput.click();
    }

    const resetImage = () => {
        setImgSrc('');
        setImageName('');
    }

    return (
        <>
            { !imgSrc &&
                <div className="w-full h-60 md:h-80 cursor-pointer relative">
                    <div className="absolute left-4 top-4 right-4 bottom-4 md:left-8 md:top-8 md:right-8 md:bottom-8 border-2 border-dashed border-gray-200 hover:border-gray-400 transition-all rounded-lg text-gray-400 text-xl items-center flex justify-center" onClick={triggerFileInput}><span className='flex justify-items-center h-6'><img src={ AddImage } alt=""  className='w-6 h-6 mr-2' /> 上传图片</span>
                    </div>
                </div>
            }

            {imgSrc &&
            <div className='relative'>
                <button onClick={resetImage} className="absolute top-5 right-5 bg-white py-1 px-3 rounded-full transition-all md:opacity-0 group-hover:md:opacity-100">重新上传</button>
                <img id='selected-image' src={imgSrc} className="block align-top w-full" alt='' />
            </div>
            }

            <input type="file" accept="image/*" className="hidden" id='select-image' onChange={handleFileChange}></input>
        </>
    )
}

export default SelectImage