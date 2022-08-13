import React from 'react'
import DownloadIcon from './Icons/download.svg'

const Loader = () => {
    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-60 overflow-y-auto h-full w-full text-center grid items-center" id="my-modal">
            <span>
            <img src={DownloadIcon} alt="" className='animate-bounce w-20 h-20 m-auto' />
            正在下载 ...
            </span>
        </div>
    )
}

export default Loader