import React, { useEffect, useState } from 'react'; 
import { Button} from 'antd';  
import { Alert } from 'antd';
import { useFormik } from "formik";
import * as yup from 'yup'
import {useLocation} from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';  


const OracleForm = () => {

    let schema = yup.object().shape({
        dsn:yup.string().required('Dsn Required'),
        username:yup.string().required('Username Required'),
        password:yup.string().required('Password Required'),
    })

    const location = useLocation()
    const getConnectionId = location.pathname.split('/')[3] || '';

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
            dsn:"",
            username:"",
            password:""
        },
        validationSchema:schema,
        onSubmit:async (values)=>{
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
                alert("Connection Successful");
            } catch (error) {
                console.error('Error:', error);
                alert("Connection Failed");
            }
        }
    })


    return (  
        <div className="d-flex justify-content-center"> 
        <div className="bg-light border rounded shadow p-4" style={{ width: '400px' }}> 
            <h3 className="text-center mb-4"> Oracle Connection</h3>  
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
                <label htmlFor="exampleInputEmail1">DSN</label>  
                <input  
                    type="text"  
                    className="form-control"  
                    value={formik.values.dsn}  
                    name="dsn"  
                    onChange={formik.handleChange('dsn')}  
                />   
                <div className="error">  
                    {  
                        formik.touched.dsn && formik.errors.dsn  
                    }  
                </div>  
            </div>  
            <div className="form-group">  
                <label htmlFor="exampleInputEmail1">Username</label>  
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
                <label htmlFor="exampleInputEmail1">Password</label>  
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
    );  
}

export default OracleForm