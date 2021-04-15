import React, {useEffect, useState} from 'react';
import BackgroundColor from "./BackgroundColor";
import './backgoundSelector.css'
import settingsSVG from './settings.svg'
import useOutsideClick from "../../hooks/useOutsideClick";
const BackgroundSelector = () => {
    const colors = [
        {
            name: 'Темный',
            color: '#333333'
        },
        {
            name: 'Светлый',
            color: '#f5e8e8'
        },
        {
            name: 'Серый',
            color: '#8a94a1'
        },
        {
            name: 'Оранжевый',
            color: '#ffbd7a'
        },

    ]
    useEffect(()=>{
        document.body.style = `background: ${localStorage.getItem('bgColor')};`
    },[])
    const changeBackgroundColor = (color)=>{
        document.body.style = `background: ${color};`
        return localStorage.setItem('bgColor',color)
    }
    const [isOpen,setIsOpen]= useState(false)
    const {popupRef} = useOutsideClick(setIsOpen)
    const elements = colors.map((item,index)=><BackgroundColor key={index} {...item} handleClick={changeBackgroundColor}  />)
    return (
        <div className={'background-selector__wrapper'}>
            <div className={'background-selector'} style={isOpen ? {width: '180px'} : {width: 0}}  ref={popupRef}>
                <div className={'background-selector__btn'} onClick={()=>setIsOpen(!isOpen)}><img src={settingsSVG} alt=""/></div>
                {elements}
            </div>
        </div>

    );
};

export default BackgroundSelector;