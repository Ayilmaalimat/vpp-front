import React, {useEffect} from 'react'
import { Route, Switch} from "react-router-dom";
import FormContainer from "../FormGenerator/FormContainer";
import TableContainer from "../Table/TableContainer";
import '../../styles/page-renderer.scss'


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


                      })=>{
    return(
        <>
            <Switch>
                        <Route exact path={`/${pageUrl}`}>
                            { pageTitle && <div className='page-renderer__title'>{pageTitle}</div>}
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
                            />
                        </Route>

                    </Switch>

        </>
    )
}

export default PageContainer
