import React, {useEffect} from 'react';
import {aravanskTableConfig} from "./aravanskTableConfig";
import PageContainer from "../../components/PageRenderer/PageContainer";
import {formFieldsConfig} from "./formFieldsConfig";
import {tableData} from "./tableData";
import {costGetById, costsUpdate} from "../../store/reducers/costsReducer";
import {connect, useSelector} from "react-redux";

const AravanskPage = props => {
    const costById = useSelector(state=>state.costs.costById)
    const costsFetchLoader = useSelector(state=>state.costs.costsFetchLoader)
    console.log(costById)
    return (
            <PageContainer
                updaterInitialFormValues={{
                    consumption_rate: costById?.consumption_rate,
                    produced: costById?.produced,
                    stock_by_population: costById?.stock_by_population,
                    outlet_stock: costById?.outlet_stock,
                    price: costById?.price
                }}
                formInputsConfig={formFieldsConfig}
                tableColumnsConfig={aravanskTableConfig}
                tableData={tableData}
                pageUrl={'aravansk-district'}
                updaterTitle={`Араванский район. ${costById?.product || '' }`}
                pageTitle={'Араванский район'}
                updateFunc={props.costsUpdate}
                getByIdFunc={props.costGetById}
                isLoading={costsFetchLoader}
            />
    );
};

export default connect(null,{costsUpdate,costGetById})(AravanskPage);