import React, {useEffect, useState} from 'react'
import {withRouter} from "react-router-dom";
import Former from "./Former";
import Preloader from "../Preloader/Preloader";
import '../../styles/form.scss'


const FormContainer = ({
                           createReq,
                           updReq,
                           match,
                           isLoading,
                           ...props})=>{
    useEffect(()=>{
        if(props.arrayOfgetSelectorDataFuncs) {
            props.arrayOfgetSelectorDataFuncs.map(item=>item()) //вызов масива функций get запросов для полей-селекторов
        }
        // if(match.params?.id )  {
        //     props.getByIdFunc(match.params.id)
        // }
    },[])
    useEffect(()=>{
        if(match.params?.id) {
            props.getFormTitleFromId(match.params.id)
        }
    },[])
    const handleSubmit = async values=>{
        if(match.params?.id){ //если имеется id параметр в роуте, то запрос на изменение
            await updReq(match.params.id,values)
        }else { // иначе на создание
            await  createReq(values)
        }
    }



    return(
        !isLoading
            ?
            <Former handleSubmit={handleSubmit}  {...props}/>
            : <Preloader />

    )
}

export default withRouter(FormContainer)