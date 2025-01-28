import React, { useEffect, useState } from 'react'; 
import { Button} from 'antd';  
import { useFormik } from "formik";
import * as yup from 'yup'

import 'bootstrap/dist/css/bootstrap.min.css';  


const HanaForm = () => {

    let schema = yup.object().shape({
        ashost:yup.string().required('host Required'),
        sysnr:yup.string().required('sysnr Required'),
        client:yup.string().required('client Required'),
        username:yup.string().required('Username Required'),
        password:yup.string().required('Password Required'),
    })

    const formik = useFormik({
        initialValues:{
            ashost:"",
            sysnr:"",
            client:"",
            username:"",
            password:""
        },
        validationSchema:schema,
        onSubmit:async (values)=>{
            // console.log(values);
           
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
                // Optionally handle success (e.g., show a message or redirect)
                alert("Connection Successful");
            } catch (error) {
                console.error('Error:', error);
                alert("Connection Failed");
                // Optionally handle error (e.g., show an error message)
            }
        }
    })


    return (  
        <div className="d-flex justify-content-center"> 
        <div className="bg-light border rounded shadow p-4" style={{ width: '400px' }}> 
            <h3 className="text-center mb-4"> Hana Connection</h3>  
            <form onSubmit={formik.handleSubmit} className="form-container">  
            <div className="form-group">  
                <label htmlFor="exampleInputEmail1">Host</label>  
                <input  
                    type="text"  
                    className="form-control"  
                    value={formik.values.ashost}  
                    name="ashost"  
                    onChange={formik.handleChange('ashost')}  
                />   
                <div className="error">  
                    {  
                        formik.touched.ashost && formik.errors.ashost  
                    }  
                </div>  
            </div>  
            <div className="form-group">  
                <label htmlFor="exampleInputEmail1">sysnr</label>  
                <input  
                type="text"  
                className="form-control"  
                value={formik.values.sysnr}  
                name="sysnr"  
                onChange={formik.handleChange('sysnr')}   
                />   
                <div className="error">  
                    {  
                        formik.touched.sysnr && formik.errors.sysnr  
                    }  
                </div>  
            </div>   
            <div className="form-group">  
                <label htmlFor="exampleInputEmail1">client</label>  
                <input  
                    type="password"  
                    className="form-control"  
                    value={formik.values.client}  
                    name="client"  
                    onChange={formik.handleChange('client')}  
                />   
                <div className="error">  
                    {  
                        formik.touched.client && formik.errors.client  
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
            <input type="submit" className="btn btn-primary" value={'Submit'}/>  
        </form> 
        </div>  
    </div>   
    );  
}

export default HanaForm