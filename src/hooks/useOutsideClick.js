import {useEffect, useRef} from "react";


export default function useOutsideClick(setIsOpen) {

    const popupRef = useRef(null)
    useEffect(() => {
        function handleClickOutside(event) {
            if (popupRef.current && !popupRef.current.contains(event.target)) {
                setIsOpen(false)
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [popupRef]);

    return{
        popupRef
    }
}