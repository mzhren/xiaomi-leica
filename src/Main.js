import React from 'react'
import SelectImage from './SelectImage'
import WaterMark from './WaterMark'

const Content = () => {
    return (
        <div id="camMaker">
            <div className="bg-white dark:bg-black shadow-sm">
                <SelectImage />
                <WaterMark />
            </div>
        </div>
    )
}

export default Content