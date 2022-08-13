import React from 'react'
import Sun from './Icons/sun.svg'
import Moon from './Icons/moon.svg'
import useDarkMode from './UseDarkMode'

const ThemeSwitch = () => {
    const [theme, toggleTheme] = useDarkMode();
    return (
        <div>
            <img src={theme === 'dark' ? Moon : Sun} alt='' className='w-6 h-6 mt-2 object-cover cursor-pointer' onClick={toggleTheme} />
        </div>
    )
}

export default ThemeSwitch