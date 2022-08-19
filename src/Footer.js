import React from 'react'
import mzhren_wechat from './Images/mzhren-wxgzh-300x113.png'
import GithubIcon from './Icons/github.svg';
import Bilibili from './Icons/bilibili-line.svg';

const Footer = () => {
    return (
        <div className="mt-10 mb-5 text-center">
            <span className='flex justify-center'>
                <a href="https://github.com/mzhren/xiaomi-leica.git" className='text-sm flex mr-4 hover:text-green-500' target={"_blank"} rel="noreferrer">
                    <img src={GithubIcon} className="w-4 h-4 mr-1" alt='源码下载' />源码下载</a>

                <a href="https://www.bilibili.com/video/BV1Md4y1N7tw" className='text-sm flex  hover:text-green-500' target={"_blank"} rel="noreferrer">
                    <img src={Bilibili} className="w-4 h-4 mr-1  hover:text-green-500" alt='源码解析' />视频演示</a>
            </span>

            <div className="block md:max-w-xs my-5 mx-auto flex justify-center"><a href="http://mp.weixin.qq.com/profile?src=3&timestamp=1660316359&ver=1&signature=XVs6zpberOz8t58nr5RenE9jhxvn7e8ORqJgEU67YYN6t2AyVfyOhicrOZxsWppXZ26cS0cfPWJg3gPkXonv1Q==" target="_blank" rel="noreferrer"><img src={mzhren_wechat} alt="" /></a></div>
            <p className="text-xs text-gray-400"> 免责声明：本网站仅供学习参考，如有侵权，请联系我们删除。请遵守当地法律法规，违者后果自负。 </p>
        </div>
    )
}

export default Footer