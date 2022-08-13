import React from 'react'
import SelectLogo from './SelectLogo';
import ImageContext from './GlobalContext';

const WaterMark = () => {
    const [phoneType, setPhoneType] = React.useState('XIAOMI 12S ULTRA');
    const [photoInfo, setPhotoInfo] = React.useState('120mm f/4.1 1/100 ISO90');
    const [photoLocation, setPhotoLocation] = React.useState(`'40°3'13"N  116°19'25"E'`);
    const { lastModifiedDate, setImageDate } = React.useContext(ImageContext);
    return (
        <div className="flex justify-between p-4 md:p-8 leading-none dark:text-white">
            <div className='m-0 md:h-16 h-10'>
                <h3 className="font-medium md:text-lg text-sm">
                    <input type={'text'} className="bg-transparent border-none outline-none text-gray-700 dark:text-white md:h-8 h-5 leading-none" value={phoneType} onChange={(e) => setPhoneType(e.target.value)} />
                </h3>
                <p className="opacity-40 dark:opacity-80 md:text-base text-xs">
                    <input type={'datetime-local'} className="bg-transparent border-none outline-none pb text-gray-700 dark:text-white md:h-8 h-5 leading-none" value={lastModifiedDate} onChange={(e) => setImageDate(e.target.value)} />
                </p>
            </div>
            <div className="flex m-0 md:h-16 h-10">
                <SelectLogo />
                <div className='md:pl-4 pl-2 border-l-2'>
                    <h3 className=" font-medium md:text-lg text-sm">
                        <input type={'text'} className="bg-transparent border-none outline-none text-gray-700 dark:text-white md:h-8 h-5" value={photoInfo} onChange={(e) => setPhotoInfo(e.target.value)} />
                    </h3>
                    <p className="opacity-40 dark:opacity-80 md:text-base text-xs">
                        <input type={'text'} className="bg-transparent border-none outline-none text-gray-700 dark:text-white md:h-8 h-5" value={photoLocation} onChange={(e) => setPhotoLocation(e.target.value)} />
                    </p>
                </div>
            </div>
        </div>
    )
}

export default WaterMark