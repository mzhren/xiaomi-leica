import html2canvas from 'html2canvas';

const $ = document.querySelector.bind(document);

export default function exportImg(selector,name="莱卡水印-by-码中人.png"){
    const img = $('#selected-image');
    const width = img.width;
    const naturalWidth = img.naturalWidth;
    const scale = naturalWidth / width;
    html2canvas(document.querySelector(selector), { // 转换为图片
        useCORS: true, // 解决资源跨域问题
        dpi: window.devicePixelRatio * 2, // 设置dpi
        scale: scale // 设置图片倍数
    }).then(canvas => {
        let imgUrl = canvas.toDataURL('image/png');
        downloadIamge(imgUrl, name)
    })
}

function downloadIamge(imgsrc, name) {
    let image = new Image();
    image.setAttribute("crossOrigin", "anonymous");
    image.onload = function () {
        let canvas = document.createElement("canvas");
        canvas.width = image.width;
        canvas.height = image.height;
        let context = canvas.getContext("2d");
        context.drawImage(image, 0, 0, image.width, image.height);
        let url = canvas.toDataURL("image/png"); //得到图片的base64编码数据
        let a = document.createElement("a"); // 生成一个a元素
        let event = new MouseEvent("click"); // 创建一个单击事件
        a.download = name || "photo"; // 设置图片名称
        a.href = url; // 将生成的URL设置为a.href属性
        a.dispatchEvent(event); // 触发a的单击事件
    };
    image.src = imgsrc;
}

