import React, { useEffect, useState } from 'react';  
import { Button, Form } from 'antd';  
import { useLocation } from 'react-router-dom';  
import allformdetails from './formDetail';  
import FormItem from './formItems';  
import 'bootstrap/dist/css/bootstrap.min.css';  

const ConnectionForm = () => {  
    const location = useLocation();  
    const [formD, setFormD] = useState(null);  
    const [name,setName] = useState('');
    useEffect(() => {  
        const pathname = location.pathname;  
        const pathArray = pathname.split('/');  
        let databasename = pathArray[pathArray.length - 1];  
        setName(databasename); 
    }, [location]);  


    const [formValues,setFormValues] = useState(

    );


    if (!formD) {  
        return <div>No form details available. Please check the database name.</div>;  
    }  

    const formItemsArray = Object.entries(formD);  

    return (  
        <div className="d-flex justify-content-center"> 
        <div className="bg-light border rounded shadow p-4" style={{ width: '400px' }}> 
            <h3 className="text-center mb-4"> {name} Connection</h3>  
            <Form   
                name="wrap"  
                labelCol={{ span: 8 }}  
                wrapperCol={{ span: 16 }}  
                colon={false}  
            >  
                {formItemsArray.map(([key, formItem]) => (  
                    <FormItem formItem={formItem} key={key} />  
                ))}  
                <Form.Item wrapperCol={{ offset: 0, span: 24 }}>  
                    <Button type="primary" htmlType="submit" className="w-100">Submit</Button>  
                </Form.Item>  
            </Form>  
        </div>  
    </div>   
    );  
}  

export default ConnectionForm;