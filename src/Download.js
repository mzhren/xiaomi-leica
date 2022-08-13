import React, { useContext } from 'react'
// import exportImg from './util';
import GlobalContext from './GlobalContext';
import html2canvas from 'html2canvas';

const $ = document.querySelector.bind(document);

const Download = () => {
    const { imageName, setLoading } = useContext(GlobalContext);

    const downloadImage = (selector, name = "莱卡水印-by-码中人.png") => {
        const img = $('#selected-image');
        const width = img.width;
        const naturalWidth = img.naturalWidth;
        const scale = naturalWidth / width;
        html2canvas(document.querySelector(selector), { // 转换为图片
            useCORS: true, // 解决资源跨域问题
            dpi: window.devicePixelRatio * 2, // 设置dpi
            scale: scale // 设置图片放大倍数
        }).then(canvas => {
            let imgUrl = canvas.toDataURL('image/png');
            mockDownload(imgUrl, name)
        })
    }

    const mockDownload = (imgsrc, name) => {
        const aLink = document.createElement('a');
        aLink.download = name;
        aLink.href = imgsrc;
        aLink.click();
        setTimeout(() => {
            setLoading(false)
        }, 1000);
    }


    const download = () => {
        setLoading(true);
        downloadImage('#camMaker', imageName);
    }

    return (
        imageName && (
            <div className="text-center my-5 mx-5 md:mx-0"><button className="bg-green-500 text-white block py-2 w-full rounded-full" onClick={download}> 下载图片 </button></div>
        )
    )
}

export default Download