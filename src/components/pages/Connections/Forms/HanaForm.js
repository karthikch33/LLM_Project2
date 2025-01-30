import React, { useEffect, useState } from 'react'; 
import { Button} from 'antd';  
import { useFormik } from "formik";
import * as yup from 'yup'
import {useLocation} from 'react-router-dom'
import { Alert } from 'antd';

import 'bootstrap/dist/css/bootstrap.min.css';  


const HanaForm = () => {
    let schema = yup.object().shape({
            address:yup.string().required('Address Required'),
            port:yup.string().required('Port Required'),
            username:yup.string().required('Username Required'),
            password:yup.string().required('Password Required'),
        })

        const location = useLocation()
        const getConnectionId = location.pathname.split('/')[3] || '';
    
        const [alert,setAlert] = useState({
    
        });
        const [status,setStatus] = useState('success');

         useEffect(()=>{
                    if(getConnectionId !== undefined)
                    {
                        formik.values.connectionname = getConnectionId
                    }
                    else{
                    }
                  },[getConnectionId])
    
        const formik = useFormik({
            initialValues:{
                connectionname:getConnectionId || '',
                address:'',
                port:"",
                username:"",
                password:""
            },
            validationSchema:schema,
            onSubmit:async (values)=>{
                setAlert(true);
                setTimeout(()=>setAlert(false),2000);
                try {
                    const response = await fetch('http://127.0.0.1:8000/sapconn/', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(values),
                    });
         
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
         
                    const data = await response;
         
                    console.log('Success:', data);
                    setStatus('success')
                } catch (error) {
                    console.error('Error:', error);
                    setStatus('success')
                }
                
            }
        })
    
    
        return (  
            <>
            <div className="d-flex justify-content-center"> 
            <div className="bg-light border rounded shadow p-4" style={{ width: '400px' }}> 
                <h3 className="text-center mb-4"> HANA Connection</h3>  
                <form onSubmit={formik.handleSubmit} className="form-container">  
                <div className="form-group">  
                <label htmlFor="exampleInputEmail1">Connection_Name </label>
                <input  
                    type="text"  
                    className="form-control"  
                    value={formik.values.connectionname}  
                    name="connectionname"  
                    onChange={formik.handleChange('connectionname')}  
                />   
                <div className="error">  
                    {  
                        formik.touched.connectionname && formik.errors.connectionname  
                    }  
                </div>  
            </div>  
                <div className="form-group">  
                    <label htmlFor="exampleInputEmail1">address</label>  
                    <input  
                        type="text"  
                        className="form-control"  
                        value={formik.values.address}  
                        name="address"  
                        onChange={formik.handleChange('address')}  
                    />   
                    <div className="error">  
                        {  
                            formik.touched.address && formik.errors.address  
                        }  
                    </div>  
                </div>  
                <div className="form-group">  
                    <label htmlFor="exampleInputEmail1">port</label>  
                    <input  
                    type="text"  
                    className="form-control"  
                    value={formik.values.port}  
                    name="port"  
                    onChange={formik.handleChange('port')}   
                    />   
                    <div className="error">  
                        {  
                            formik.touched.port && formik.errors.port  
                        }  
                    </div>  
                </div>   
                <div className="form-group">  
                    <label htmlFor="exampleInputEmail1">username</label>  
                    <input  
                    type="text"  
                    className="form-control"  
                    value={formik.values.username}  
                    name="username"  
                    onChange={formik.handleChange('username')}   
                    />   
                    <div className="error">  
                        {  
                            formik.touched.username && formik.errors.username  
                        }  
                    </div>  
                </div>   
                <div className="form-group">  
                    <label htmlFor="exampleInputEmail1">password</label>  
                    <input  
                        type="password"  
                        className="form-control"  
                        value={formik.values.password}  
                        name="password"  
                        onChange={formik.handleChange('password')}  
                    />   
                    <div className="error">  
                        {  
                            formik.touched.password && formik.errors.password  
                        }  
                    </div>  
                </div>   
                <div className='d-flex justify-content-around w-75 mt-2'>
                <input type="submit" className="btn btn-primary" value={getConnectionId !== '' ? 'Edit' : 'Save'}/>  
                <input type="submit" className="btn btn-danger" value={'Cancel'}/>  
                </div> 
            </form> 
            </div>  
        </div>   
            <div className='w-100 d-flex justify-content-center mt-1'>
                {
                    alert &&  <Alert message="Connection Successfull" type={status || 'success'} showIcon style={{width:"300px"}} />
                }
            </div>
            </>
        );  
    
   
}

export default HanaForm