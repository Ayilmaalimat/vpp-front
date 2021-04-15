import React, {useCallback} from "react";
import {Link} from "react-router-dom";
import {writeFormTitle} from "../../store/reducers/formReducer";
import {store} from "../../store/store";

export const aravanskTableConfig  =[
    {
        title:'ID',
        dataIndex: 'key',
        key:'key',
        render: (value)=><span style={{color: '#1E90FF'}}>{value}</span>
    },
    {
        title: "Товар",
        dataIndex: 'product',
        key: 'product',
    },
    {
        title: 'Действие',
        dataIndex: '',
        key: 'x',
        render: (value) => {
            return(
                <Link to={`/aravansk-district/${value.key}`}>Изменить</Link>
            )
        },
    },
]