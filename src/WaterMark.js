import React from 'react'
import SelectLogo from './SelectLogo';
import ImageContext from './ImageContext';

const WaterMark = () => {
    const [phoneType, setPhoneType] = React.useState('XIAOMI 12S ULTRA');
    const [photoInfo, setPhotoInfo] = React.useState('120mm f/4.1 1/100 ISO90');
    const [photoLocation, setPhotoLocation] = React.useState(`'40°3'13"N  116°19'25"E'`);
    const { lastModifiedDate, setImageDate } = React.useContext(ImageContext);
    return (
        <div className="flex justify-between p-4 md:p-8 leading-none dark:text-white">
            <div className='m-0 h-16'>
                <h3 className="font-medium text-xs md:text-[22px] mb-1 md:mb-3">
                    <input type={'text'} className="bg-transparent border-none outline-none text-gray-700 dark:text-white h-6" value={phoneType} onChange={(e) => setPhoneType(e.target.value)} />
                </h3>
                <p className="opacity-40 dark:opacity-80 text-[8px] md:text-base">
                    <input type={'datetime-local'} className="bg-transparent border-none outline-none pb text-gray-700 dark:text-white h-6 md:w-60 xs:w-20" value={lastModifiedDate} onChange={(e) => setImageDate(e.target.value)} />
                </p>
            </div>
            <div className="flex gap-3 m-0 h-16">
                <SelectLogo />
                <div>
                    <h3 className=" font-medium text-xs md:text-[22px] mb-1 flex gap-[6px] md:gap-3 md:mb-3">
                        <input type={'text'} className="bg-transparent xl:w-72 border-none outline-none text-gray-700 dark:text-white h-6" value={photoInfo} onChange={(e) => setPhotoInfo(e.target.value)} />
                    </h3>
                    <p className=" opacity-40 dark:opacity-80 text-[8px] md:text-base flex gap-[6px] md:gap-3">
                        <input type={'text'} className="bg-transparent xl:w-72 border-none outline-none text-gray-700 dark:text-white h-6" value={photoLocation} onChange={(e) => setPhotoLocation(e.target.value)} />
                    </p>
                </div>
            </div>
        </div>
    )
}

export default WaterMark