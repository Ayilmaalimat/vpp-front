import React, {useState} from 'react'
import {Field} from "formik";import './ArrayField.css'




const ArrayField = ({arrayHelpers,placeholder,name,labelObject={},objectTemplate,objectTemplateStyles={}})=>{
    return(
        <div className={'arrayField__container'}>
            {arrayHelpers.form.values[name] &&
            arrayHelpers.form.values[name].length > 0 && (
                arrayHelpers.form.values[name].map((item, index) => {
                    let result =[]
                    if(typeof item ==='object'){
                        for (let k in item) {
                            for (let objectKey in objectTemplate) {
                                if(objectKey===k) {
                                    result.push(
                                        <div key={`${name}.${index}.${k}`} className={'arrayField__item'}>
                                            <label htmlFor={`${name}.${index}.${k}`}>{labelObject[k]}</label>
                                            <Field name={`${name}.${index}.${k}`} style={objectTemplateStyles[k]}/>
                                            {index === (arrayHelpers.form.values[name].length-1) && (
                                                <>
                                                <div
                                                className={'arrayField__removeItemBtn'}
                                                onClick={() => arrayHelpers.remove(index)} // remove a friend from the list
                                            >
                                                <img  alt=""/>
                                            </div>
                                                <div
                                                className={'arrayField__plusItemBtn'}
                                                onClick={() => arrayHelpers.insert(index+1,objectTemplate)} // remove a friend from the list
                                                >
                                                <img  alt=""/>
                                                </div>
                                                </>
                                            )
                                            }
                                        </div>)
                                }}
                        }
                        return result
                    }
                    return(

                        <div key={`${name}.${index}`} className={'arrayField__item'}>
                            <Field name={`${name}.${index}`}/>
                            {index === (arrayHelpers.form.values[name].length-1) && (
                                <>
                            <div
                                className={'arrayField__removeItemBtn'}
                                onClick={() => arrayHelpers.remove(index)}>
                                <img  alt=""/>
                            </div>
                            <div
                                className={'arrayField__plusItemBtn'}
                                onClick={() => arrayHelpers.insert(index+1,objectTemplate)}>
                                <img  alt=""/>
                            </div>
                               </>
                            )}
                        </div>
                    )})
            )
            }
            {(arrayHelpers.form.values[name]?.length=== 0) &&
            <div className={'arrayField__addItemBtn'} onClick={() => arrayHelpers.push(objectTemplate)}>
                {placeholder}
            </div>
            }
        </div>
    )
}
export default ArrayField

