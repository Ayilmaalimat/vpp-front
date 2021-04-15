import React from 'react'
import { Form, Formik} from "formik";
import * as Yup from "yup";
import FormInput from "./FormInput";
import {validationGenerator} from "./validationGenerator";
import {Button} from "react-bootstrap";
import { useSelector} from "react-redux";




const Former = (props)=>{
    const inputs = ()=>{
        let result=[]
        const initValsKeys =  Object.keys(props.initialVals)
        for(let i=0;i<initValsKeys.length;i++){
            for(let j=0;j<props.inputConfig.length;j++){
                if(initValsKeys[i]===props.inputConfig[j]?.key){
                    result.push(
                        <FormInput
                        key={initValsKeys[i]}
                        name={initValsKeys[i]}
                        placeholder={props.inputConfig[j]?.placeholder}
                        label={props.inputConfig[j]?.label}
                        labelObject={props.inputConfig[j]?.labelObject}
                        radioLabel={props.inputConfig[j]?.radioLabel}
                        type={props.inputConfig[j]?.type}
                        imageCount={props.inputConfig[j]?.imageCount}
                        additionally={props.inputConfig[j]?.additionally}
                        iconInput={props.inputConfig[j]?.iconInput}
                        required={props.inputConfig[j]?.required}
                        selectInputData={props.inputConfig[j]?.selectInputData}
                        options={props.optionsForSelector}
                        selectorProperty={props.inputConfig[j]?.selectorProperty}
                        styles={props.inputConfig[j]?.fieldStyles}
                        objectTemplate={props.inputConfig[j]?.objectTemplate}
                        objectTemplateStyles={props.inputConfig[j]?.objectTemplateStyles}
                        fileTypes={props.inputConfig[j]?.fileTypes}
                    />)
                }
            }
        }
        return result
    }
    const styledInputs = (inputs)=>{
        let result = []
        for (let i=0;i<inputs.length; i++){
            let inp=[]
            if(props.inputConfig[i]?.parentBlock === 'open') {
                for (let j=i;j<inputs.length;j++) {
                    inp.push(inputs[j])
                     if(props.inputConfig[j]?.parentBlock === 'close'){
                         i=j
                        break
                    }
                }
               result.push(<div className={'former__block'} style={props.inputConfig[i]?.blockStyles}>{inp}</div>)
            }else {result.push(inputs[i])}
        }
        return result
    }
    const array= Object.keys(props.initialVals)
    const schema = validationGenerator(array,props.inputConfig)
    const formTitle = useSelector(state=>state.form.formTitle)
    return(
        <>
        <div className='former__container'>
            {props.formTitle && <div className={'former__title'}>
                <h2>{props.formTitle}. {formTitle}</h2>
            </div>}
            <Formik
                initialValues={props.initialVals}
                validationSchema={Yup.object(schema)}
                onSubmit={ async (values,e)=>{
                    await props.handleSubmit(values)
                }}
            >
                {({handleSubmit,errors,values}) =>{
                    return (
                        <Form>
                            <div className={"former__fields"}>
                                {styledInputs(inputs())}

                            </div>
                        <div className="former__btns">
                            <Button variant="success">Сохранить</Button>
                            <Button variant="danger">Отмена</Button>
                        </div>

                        </Form>
                    )}}

            </Formik>
        </div>
            </>
    )
}
export default Former