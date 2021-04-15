import React from 'react';
import {Link, useLocation} from 'react-router-dom'
import {Breadcrumb} from "antd";
import {findRouteName} from "./findRouteName";
import  './breadcrumb.css'
const BreadCrumb = () => {
    const location = useLocation()
    const breadCrumbView = ()=> {
        const {pathname} = location
        const pathnames = pathname.split('/').filter(item => item)
        return (
            <div className={'breadcrumb__container'}>
                <Breadcrumb>
                    {(!pathnames.length || pathnames.length) &&
                        <Breadcrumb.Item>
                            <Link to={'/'}>Главная</Link>
                        </Breadcrumb.Item>
                    }
                    {pathnames.map((name,index)=>{
                        const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
                        const isLast = index === pathnames.length - 1;
                        return isLast ? (
                            <Breadcrumb.Item>{findRouteName(name)}</Breadcrumb.Item>
                        ) : (
                            <Breadcrumb.Item>
                                <Link to={`${routeTo}`}>{findRouteName(name)}</Link>
                            </Breadcrumb.Item>
                        );
                    })}
                </Breadcrumb>
            </div>
        );
    }

    return <>{breadCrumbView()}</>
};

export default BreadCrumb;