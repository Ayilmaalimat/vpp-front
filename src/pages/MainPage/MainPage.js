import React from 'react';
import {withRouter} from "react-router-dom";
import '../../styles/main-page.scss'
const MainPage = ({history}) => {
    const data=[
        {title: 'Араванский район', link: 'aravansk-district'}
    ]
    const elements = data.map(item=><div className={'page-container'} onClick={()=>history.push(item.link)}><span className={'page-container__title'}>{item.title}</span></div>)
    return (
        <>
            {elements}
        </>
    );
};

export default withRouter(MainPage);