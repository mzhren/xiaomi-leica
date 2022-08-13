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
        <div className='md:w-16 md:h-16 w-8 h-8 md:mr-3 mr-2'>
            <img src={logo} alt='' className='md:w-16 md:h-16 w-8 h-8 object-cover cursor-pointer justify-self-center' onClick={changeLogo} />
        </div>
    )
}

export default SelectLogo