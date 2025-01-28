// file: formItems.js  
import React from 'react';  
import { Form, Input } from 'antd';  

const FormItem = ({ formItem }) => {  
    const { label, name, rules, type } = formItem;  
  
    return (  
        <Form.Item  
            label={label}  
            name={name}  
            rules={rules}  
        >  
            <Input type={type} />  
        </Form.Item>  
    );  
};  

export default FormItem;