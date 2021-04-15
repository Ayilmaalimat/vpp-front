import React, {useEffect} from 'react';
import {aravanskTableConfig} from "./aravanskTableConfig";
import PageContainer from "../../components/PageRenderer/PageContainer";
import {formFieldsConfig} from "./formFieldsConfig";
import {tableData} from "./tableData";

const AravanskPage = () => {
    return (
        <div>
            <PageContainer
                updaterInitialFormValues={{
                    cost: 0,
                    produced: 0,
                    stocks_by_population: 0,
                    stocks_by_trading: 0,
                    price: 0
                }}
                formInputsConfig={formFieldsConfig}
                tableColumnsConfig={aravanskTableConfig}
                tableData={tableData}
                pageUrl={'aravansk-district'}
                updaterTitle={'Араванский район'}
            />

        </div>
    );
};

export default AravanskPage;