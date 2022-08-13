import { createContext, useState } from "react";
const ImageContext = createContext();
export default ImageContext;

export const ImageProvider = ({ children }) => {
    const [imageName, setImageName] = useState("");
    const isDate = (date) => {
        return Object.prototype.toString.call(date) === "[object Date]";
    };
    const formatYYYYMMDDTHHMMSS = (date) => {
        if (!isDate(date)) {
            date = new Date(date);
        }
        return new Date(date.toString().split('GMT')[0] + ' UTC').toISOString().split('.')[0];
    }
    // const currentDateTime = new Date(new Date().toString().split('GMT')[0]+' UTC').toISOString().split('.')[0]
    const currentDateTime = formatYYYYMMDDTHHMMSS(new Date());
    const [lastModifiedDate, setLastModifiedDate] = useState(currentDateTime);
    const setImageDate = (date) => {
        setLastModifiedDate(formatYYYYMMDDTHHMMSS(date));
    }
    return (
        <ImageContext.Provider value={{ imageName, setImageName, lastModifiedDate, setImageDate }}>
            {children}
        </ImageContext.Provider>
    );
}



