import html2canvas from 'html2canvas';

const $ = document.querySelector.bind(document);

export default function export(selector,name="莱卡水印-by-码中人.png"){
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

function mockDownload(imgsrc, name) {
    const aLink = document.createElement('a');
    aLink.download = name;
    aLink.href = imgsrc;
    aLink.click();
}

