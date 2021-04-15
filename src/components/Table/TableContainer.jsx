import React from 'react'
import { Table } from 'antd';
import 'antd/dist/antd.css';
const TableContainer = ({editing=true,...props})=>{

    return(
        <Table
            tableLayout={'fixed'}
            pagination={{ position:'BottomCenter' }}
            columns={props.columns}
            dataSource={  props.data  }
        />
    )
}


export default TableContainer








