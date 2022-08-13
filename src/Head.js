import React from 'react'
import ThemeSwitch from './ThemeSwitch'

const Head = () => {
    return (
        <header className='flex justify-between items-center'>
            <h2 className="text-xl font-bold hover:text-green-500">莱卡水印生成器<a href='https://blog.mzh.ren/zh/' className='text-xs hover:text-gray-500'> by 码中人 </a></h2>

            <div className="text-gray-300">
                <ThemeSwitch />
            </div>
        </header>
    )
}

export default Head