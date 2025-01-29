import { SearchOutlined } from '@ant-design/icons';
import React, { useState } from 'react';  
import { Input, Table, Button } from 'antd';  
import CustomModel from './CustomModel';
import { Link } from 'react-router-dom';

const ViewConnection = () => {
    const [searchText, setSearchText] = useState('');  
    
    // Example data source  
    const dataSource = [  
        { key: '1', connectionType: 'Alice', connectionName: 34, username: 'alice34', host: 'host1', connection_status: 'Active', test_connection: <Button>Test</Button> },  
        { key: '2', connectionType: 'Bob', connectionName: 45, username: 'bob45', host: 'host2', connection_status: 'Inactive', test_connection: <Button>Test</Button> },  
        { key: '3', connectionType: 'Charlie', connectionName: 29, username: 'charlie29', host: 'host3', connection_status: 'Active', test_connection: <Button>Test</Button> },  
        { key: '4', connectionType: 'David', connectionName: 52, username: 'david52', host: 'host4', connection_status: 'Inactive', test_connection: <Button>Test</Button> },  
        { key: '5', connectionType: 'Eva', connectionName: 22, username: 'eva22', host: 'host5', connection_status: 'Active', test_connection: <Button>Test</Button> },  
        { key: '6', connectionType: 'Frank', connectionName: 37, username: 'frank37', host: 'host6', connection_status: 'Active', test_connection: <Button>Test</Button> },  
        { key: '7', connectionType: 'Grace', connectionName: 41, username: 'grace41', host: 'host7', connection_status: 'Inactive', test_connection: <Button>Test</Button> },  
        { key: '8', connectionType: 'Alice', connectionName: 27, username: 'alice27', host: 'host8', connection_status: 'Active', test_connection: <Button>Test</Button> },  
        { key: '9', connectionType: 'Bob', connectionName: 60, username: 'bob60', host: 'host9', connection_status: 'Inactive', test_connection: <Button>Test</Button> },  
        { key: '10', connectionType: 'Charlie', connectionName: 35, username: 'charlie35', host: 'host10', connection_status: 'Active', test_connection: <Button>Test</Button> },  
        { key: '11', connectionType: 'Alice', connectionName: 34, username: 'alice34', host: 'host1', connection_status: 'Active', test_connection: <Button>Test</Button> },  
        { key: '12', connectionType: 'Bob', connectionName: 45, username: 'bob45', host: 'host2', connection_status: 'Inactive', test_connection: <Button>Test</Button> },  
        { key: '13', connectionType: 'Charlie', connectionName: 29, username: 'charlie29', host: 'host3', connection_status: 'Active', test_connection: <Button>Test</Button> },  
        { key: '14', connectionType: 'David', connectionName: 52, username: 'david52', host: 'host4', connection_status: 'Inactive', test_connection: <Button>Test</Button> },  
        { key: '15', connectionType: 'Eva', connectionName: 22, username: 'eva22', host: 'host5', connection_status: 'Active', test_connection: <Button>Test</Button> },  
        { key: '16', connectionType: 'Frank', connectionName: 37, username: 'frank37', host: 'host6', connection_status: 'Active', test_connection: <Button>Test</Button> },  
        { key: '17', connectionType: 'Grace', connectionName: 41, username: 'grace41', host: 'host7', connection_status: 'Inactive', test_connection: <Button>Test</Button> },  
        { key: '18', connectionType: 'Alice', connectionName: 27, username: 'alice27', host: 'host8', connection_status: 'Active', test_connection: <Button>Test</Button> },  
        { key: '19', connectionType: 'Bob', connectionName: 60, username: 'bob60', host: 'host9', connection_status: 'Inactive', test_connection: <Button>Test</Button> },  
        { key: '20', connectionType: 'Charlie', connectionName: 35, username: 'charlie35', host: 'host10', connection_status: 'Active', test_connection: <Button>Test</Button> },  
    ];  

    const columns = [  
        {  
            title: 'S NO',  
            dataIndex: 'key',  
            key: 'key',  
        },  
        {  
            title: 'Connection Type',  
            dataIndex: 'connection_type',  
            key: 'connection_type',  
        },  
        {  
            title: 'Connection Name',  
            dataIndex: 'connection_name',  
            key: 'connection_name',  
        },  
        {  
            title: 'Username',  
            dataIndex: 'username',  
            key: 'username',  
        },  
        {  
            title: 'Host',  
            dataIndex: 'host',  
            key: 'host',  
        },  
        {  
            title: 'Connection Status',  
            dataIndex: 'connection_status',  
            key: 'connection_status',  
            render: (status) => ( 
                <div style={{ display: 'flex', alignItems: 'center' }}>  
                <span className={`circle ${status === 'Active' ? 'green' : 'red'}`}></span>  
                <p className='mb-2 ml-2'>{status}</p>  
                </div>  
            ), 
        },  
        {  
            title: 'Edit',  
            dataIndex: 'edit',  
            key: 'edit',  
        },  
        {  
            title: 'Delete',  
            dataIndex: 'delete',  
            key: 'delete',  
        },  
        {  
            title: 'Test Connection',  
            dataIndex: 'test_connection',  
            key: 'test_connection',  
        }  
    ];  

    const [data ,setData] = useState();


    const connections = dataSource.map(field => ({  
        key: field.key,  
        connection_type: field.connectionType,  
        connection_name: field.connectionName,  
        username: field.username,  
        host: field.host,  
        connection_status: field.connection_status,  
        edit: 
        <Button
                onClick={()=>{
                    showModal(field)
                }}
            >Edit
            </Button>,
        delete: <Button>Delete</Button>,  
        test_connection: field.test_connection
    }));  


    // Filter data based on search text  
    const filteredData = connections.filter(item => {  
        return (  
            item.connection_type.toLowerCase().includes(searchText.toLowerCase()) ||  
            item.username.toLowerCase().includes(searchText.toLowerCase()) ||  
            item.host.toLowerCase().includes(searchText.toLowerCase()) 
        );  
    });  

    const [open, setOpen] = useState(false);


    const showModal = (field) => {
        setOpen(true);
        setData(field)
      };


      const hideModal = () => {
        setOpen(false);
      };

   

    return (  
        <div className="w-100">  
            {/* Search Input */}  
            <div className="d-flex justify-content-end mb-2">  
                <Input  
                    placeholder="Search by Type, Username or Host"  
                    value={searchText}  
                    onChange={(e) => setSearchText(e.target.value)}  
                    style={{ maxWidth: 300 }} // Optional: Adjust the width as needed  
                />  
            </div>  
            <Table  
                columns={columns}  
                dataSource={filteredData} // Use the filtered data  
                pagination={{  
                    pageSize: 4,  
                }}  
            />  
            <CustomModel
            //  title={ <> Edit { customername !== "No" ? <span style={{ color: "red",display:"inline" }} 
            //  title={ <> Edit { customername !== "No" ? <span style={{ color: "red",display:"inline" }} 
            //  className=''>"  {customername} "  </span>:"" } Status </>}
             title={<>Edit </>}
              hideModal={hideModal} 
              open={open}
              data={data}
              performAction = {()=>{}}
            //    performAction={()=>activeState(customerId,customername,customerrole)}
            />
        </div>  
    );  
}

export default ViewConnection