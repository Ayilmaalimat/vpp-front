import React from 'react';

const BackgroundColor = ({name,color,handleClick}) => {
    return (
        <div onClick={()=>handleClick(color)} className={'background-selector__item'}><div style={{borderRadius: '50%',background:color,width: '25px',height: '25px' }}></div>{name}</div>
    );
};

export default BackgroundColor;