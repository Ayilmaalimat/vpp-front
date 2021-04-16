import React, {useState} from 'react';
import {Modal} from "antd";

const ModalDialog = ({visible,text,onOk,setVisible}) => {
    return (
        <Modal
            title=""
            centered
            visible={visible}
            onOk={() => {
                onOk()
                setVisible(false)
            }}
            onCancel={() => setVisible(false)}
            width={500}
            okText={'Сохранить'}
            cancelText={'Отмена'}
        >
            <p>{text}</p>
        </Modal>
    );
};

export default ModalDialog;