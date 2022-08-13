import React from 'react'
import Leica from './Images/leica_logo.png'
import Apple from './Images/apple_logo.png'
import Sony from './Images/sony_logo.png'
import Nikon from './Images/nikon_logo.png'
import Canon from './Images/canon_logo.png'
import Samsung from './Images/samsung_logo.png'
import Mi from './Images/mi_logo.png'
import Huawei from './Images/huawei_logo.png'
import Oppo from './Images/oppo_logo.png'
import Realme from './Images/realme_logo.png'
import Vivo from './Images/vivo_logo.png'

const SelectLogo = () => {
    const logos = [Leica, Apple, Sony, Nikon,Canon,Samsung,Mi,Huawei,Oppo,Realme,Vivo];
    const [logo, setLogo] = React.useState(Leica);
    const changeLogo = (e) => {
        const randomLogo = logos[Math.floor(Math.random() * logos.length)];
        setLogo(randomLogo);
    };
    
    return (
        <div className='md:w-16 md:h-16 w-12 h-12 border-r-2 pr-1 flex justify-items-center'>
            <img src={logo} alt='' className='md:w-14 md:h-14 w-10 h-10 mt-1 object-scale-down cursor-pointer justify-self-center' onClick={changeLogo} />
        </div>
    )
}

export default SelectLogo