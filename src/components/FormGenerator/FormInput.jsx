import React, {useEffect} from 'react'
import {ErrorMessage, Field, FieldArray, Form, useField} from "formik";
import ArrayField from "../Fields/ArrayField/ArrayField";
import RadioGroup from "../Fields/RadioGroup/RadioGroup";




const FormInput = ({
                       name,
                       label,
                       labelObject,
                       placeholder,
                       type='',
                       imageCount,
                       styles,
                       selectInputData=[],
                       selectorProperty='',
                       additionally,
                       iconInput,
                       radioLabel,
                       required,
                       options=[],
                       objectTemplate,
                       objectTemplateStyles
                   })=>{
    const [field, meta] = useField({name,placeholder});

    return(
        <div className="former__field" style={styles ? styles : undefined} >
            {additionally &&   <span className={'formTitle'}>{additionally}</span>}
            <label htmlFor={name}>{label} {required && <span style={{color: '#c82333'}}>*</span>}</label>

            { type === 'array' ?
                    <FieldArray
                    name={name}>
                        { (arrayHelpers) => <ArrayField
                            placeholder={placeholder}
                            name={name}
                            arrayHelpers={arrayHelpers}
                            labelObject={labelObject}
                            objectTemplate={objectTemplate}
                            objectTemplateStyles={objectTemplateStyles}
                        />}
                    </FieldArray>
                : type === 'check' ?
                        <input name={name} type='checkbox'  {...field}/>
            : type === 'radio' ?
                    <RadioGroup {...field}
                                label={radioLabel}
                    />
                    : type==='textarea' ?
                            <input type="textarea" {...field} />
                : type==='selector' ?
                <Field name={name} as={'select'} placeholder={placeholder} >
                {options[selectorProperty].map(item=> {
                    return (
                        <option key={item.id} value={item.id}>{item?.name ? item.name : item.fullName}</option>
                    )})
                }
                </Field>
                :
                <Field name={name} placeholder={placeholder}/>

            }
            <span  className='formErrorMessage'><ErrorMessage name={name}/></span>
        </div>
    )
}

export default FormInput
