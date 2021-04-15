import React, {useEffect} from 'react'
import { Route, Switch} from "react-router-dom";
import FormContainer from "../FormGenerator/FormContainer";
import TableContainer from "../Table/TableContainer";
import {writeFormTitle} from "../../store/reducers/formReducer";
import {store} from '../../store/store'
import {useDispatch} from "react-redux";



const PageContainer = ({

    pageUrl,
    pageTitle,

    tableData,
    tableColumnsConfig,

    updaterTitle,
    formInputsConfig,
    loadSelectorData,
    optionsForSelectorData,
    updaterInitialFormValues,

    getDataFunc,
    valueById,
    getByIdFunc,
    updateFunc,
    clearFunc,

    isLoading,

    editing=true,

    title=false,

                      })=>{
    const dispatch = useDispatch()

    const getFormTitleFromId = id => {
        const title = tableData.find(item=> item.key==id)
        dispatch(writeFormTitle(title?.product))
    }
    return(
        <>
            {title &&<span className='page-content__title'>{pageTitle}</span>}
            <Switch>
                        <Route exact path={`/${pageUrl}`}>
                            <span className='page-content__title'>{pageTitle}</span>
                            <TableContainer
                                isLoading={isLoading}
                                getDataFunc={getDataFunc}
                                data={tableData}
                                columns={tableColumnsConfig}
                                urlToUpd={`/${pageUrl}`}
                            />
                        </Route>

                        <Route exact path={`/${pageUrl}/:id`}>
                            <FormContainer
                                loadSelectorData={loadSelectorData}
                                getByIdFunc={getByIdFunc}
                                valueById={valueById}
                                urlToTable={`/${pageUrl}`}
                                initialVals={updaterInitialFormValues}
                                updReq={updateFunc}
                                formTitle={updaterTitle}
                                inputConfig={formInputsConfig}
                                optionsForSelector={optionsForSelectorData}
                                isLoading={isLoading}
                                clearFunc = {clearFunc}
                                getFormTitleFromId = {getFormTitleFromId}
                            />
                        </Route>

                    </Switch>

        </>
    )
}

export default PageContainer
