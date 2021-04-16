import React, {useState} from 'react'
import { Form, Formik} from "formik";
import * as Yup from "yup";
import FormInput from "./FormInput";
import {validationGenerator} from "./validationGenerator";
import {Button} from "react-bootstrap";
import ModalDialog from './ModalDialog'
import Preloader from "../Preloader/Preloader";
import { useHistory } from "react-router-dom";



const Former = (props)=>{
    const [visibleModal,setVisibleModal] = useState(false)
    let history = useHistory();
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
    return(
        <>
        <div className='former__container'>
            {props.formTitle && <div className={'former__title'}>
                <h2>{props.formTitle}</h2>
            </div>}
            <Formik
                initialValues={props.initialVals}
                validationSchema={Yup.object(schema)}
                onSubmit={ async (values,e)=>props.handleSubmit(values)}
            >
                {({handleSubmit,errors,values}) =>{
                    return (
                        <Form>
                            <ModalDialog
                                visible={visibleModal}
                                onOk={handleSubmit}
                                setVisible={setVisibleModal}
                                text={'Сохранить изменения?'}
                            />
                            <div className={"former__fields"}>
                                {styledInputs(inputs())}

                            </div>
                        <div className="former__btns">
                            <Button variant="success"
                            onClick={()=>setVisibleModal(true)}
                            >Сохранить</Button>
                            <Button variant="danger" onClick={()=>history.push(props.urlToTable)}>Отмена</Button>
                        </div>

                        </Form>
                    )}}

            </Formik>
        </div>
            </>
    )
}
export default Former