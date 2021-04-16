import React, {useEffect, useState} from 'react'
import {withRouter} from "react-router-dom";
import Former from "./Former";
import Preloader from "../Preloader/Preloader";
import '../../styles/form.scss'
import FormPreloader from "./FormPreloader";


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
        if(match.params?.id )  {
            props.getByIdFunc(match.params.id)
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
           :
    <FormPreloader />

    )
}

export default withRouter(FormContainer)