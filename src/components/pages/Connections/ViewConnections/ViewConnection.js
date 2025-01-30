import { SearchOutlined } from '@ant-design/icons';
import React, { useState } from 'react';  
import { Input, Table, Button } from 'antd';  
import CustomModel from './CustomModel';
import { Link } from 'react-router-dom';
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { MdEditNote } from "react-icons/md";
import CustomModelRename from './CustomModelRename';

const ViewConnection = () => {
    const [searchText, setSearchText] = useState('');  
    
    // Example data source  
    const dataSource = [  
        { key: '1', connectionType: 'Oracle', connectionName: 'OracleDB1', username: 'oracle_user1', host: 'oracle_host1', connection_status: 'Active' },  
        { key: '2', connectionType: 'MySQL', connectionName: 'MySQLDB1', username: 'mysql_user1', host: 'mysql_host1', connection_status: 'Inactive' },  
        { key: '3', connectionType: 'ERP', connectionName: 'ERP_DB1', username: 'erp_user1', host: 'erp_host1', connection_status: 'Active' },  
        { key: '4', connectionType: 'HANA', connectionName: 'HANA_DB1', username: 'hana_user1', host: 'hana_host1', connection_status: 'Inactive' },  
        { key: '5', connectionType: 'Oracle', connectionName: 'OracleDB2', username: 'oracle_user2', host: 'oracle_host2', connection_status: 'Active' },  
        { key: '6', connectionType: 'MySQL', connectionName: 'MySQLDB2', username: 'mysql_user2', host: 'mysql_host2', connection_status: 'Active' },  
        { key: '7', connectionType: 'ERP', connectionName: 'ERP_DB2', username: 'erp_user2', host: 'erp_host2', connection_status: 'Inactive' },  
        { key: '8', connectionType: 'HANA', connectionName: 'HANA_DB2', username: 'hana_user2', host: 'hana_host2', connection_status: 'Active' },  
        { key: '9', connectionType: 'Oracle', connectionName: 'OracleDB3', username: 'oracle_user3', host: 'oracle_host3', connection_status: 'Active' },  
        { key: '10', connectionType: 'MySQL', connectionName: 'MySQLDB3', username: 'mysql_user3', host: 'mysql_host3', connection_status: 'Inactive' },  
        { key: '11', connectionType: 'Oracle', connectionName: 'OracleDB1', username: 'oracle_user1', host: 'oracle_host1', connection_status: 'Active' },  
        { key: '12', connectionType: 'MySQL', connectionName: 'MySQLDB1', username: 'mysql_user1', host: 'mysql_host1', connection_status: 'Inactive' },  
        { key: '13', connectionType: 'ERP', connectionName: 'ERP_DB1', username: 'erp_user1', host: 'erp_host1', connection_status: 'Active' },  
        { key: '14', connectionType: 'HANA', connectionName: 'HANA_DB1', username: 'hana_user1', host: 'hana_host1', connection_status: 'Inactive' },  
        { key: '15', connectionType: 'Oracle', connectionName: 'OracleDB2', username: 'oracle_user2', host: 'oracle_host2', connection_status: 'Active' },  
        { key: '16', connectionType: 'MySQL', connectionName: 'MySQLDB2', username: 'mysql_user2', host: 'mysql_host2', connection_status: 'Active' },  
        { key: '17', connectionType: 'ERP', connectionName: 'ERP_DB2', username: 'erp_user2', host: 'erp_host2', connection_status: 'Inactive' },  
        { key: '18', connectionType: 'HANA', connectionName: 'HANA_DB2', username: 'hana_user2', host: 'hana_host2', connection_status: 'Active' },  
        { key: '19', connectionType: 'Oracle', connectionName: 'OracleDB3', username: 'oracle_user3', host: 'oracle_host3', connection_status: 'Active' },  
        { key: '20', connectionType: 'MySQL', connectionName: 'MySQLDB3', username: 'mysql_user3', host: 'mysql_host3', connection_status: 'Inactive' },  
    
    ];  

    const columns = [  
        {  
            title: 'S NO',  
            dataIndex: 'key',  
            key: 'key',  
        },  
        {  
            title: 'Connection Name',  
            dataIndex: 'connection_name',  
            key: 'connection_name',  
        },
        {  
            title: 'Connection Type',  
            dataIndex: 'connection_type',  
            key: 'connection_type',  
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
                <div style={{ display: 'flex', alignItems: 'center', marginLeft:'18px' }}>  
                <span className={`circle ${status === 'Active' ? 'green' : 'red'}`}></span>  
                <p className='mb-2 ml-2'>{status}</p>  
                </div>  
            ), 
        },  
        {  
            title: 'Options',  
            dataIndex: 'delete',  
            key: 'delete',  
        },  
        {  
            title: 'Edit',  
            dataIndex: 'edit',  
            key: 'edit',  
        },  
        {  
            title: 'Test Connection',  
            dataIndex: 'test_connection',  
            key: 'test_connection',  
        }
    ];  

    const [data ,setData] = useState({
        connectionName: undefined
    });


    const connections = dataSource.map(field => ({  
        key:
        <div style={{display:'flex',justifyContent:'center',gap:"3px"}}>
        <span>{field.key}</span>
        </div>,  
        connection_type: field.connectionType,  
        connection_name: 
        <Link>
        {field.connectionName}
        </Link>,  
        username: field.username,  
        host: field.host,  
        connection_status: field.connection_status, 
        edit: <div style={{display:'flex',justifyContent:'center',gap:"3px"}}>
        <Link to={`/connections/${field.connectionType}/${field.connectionName}`}>         
            <Button >Edit
            </Button>
            </Link>
            </div>,
        delete: 
        <div style={{display:'flex',justifyContent:'center',gap:"10px"}}>
        
         <Button 
        onClick={()=>{
            showModal(field)
        }}
        ><MdOutlineDeleteOutline /></Button>
        <Button
       
       onClick={()=>{
           showModal2(field)
       }}
       >
       <FaRegEdit />
       </Button>
        </div>,  
        test_connection: 
        <div style={{display:'flex',justifyContent:'center',gap:"3px"}}>
        <Button>Test</Button>
        </div>
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
    const [open2, setOpen2] = useState(false);


    const showModal = (field) => {
        setOpen(true);
        setData(field);
      };

    const showModal2 = (field) => {
        setOpen2(true);
        setData(field);
      };


      const hideModal = () => {
        setOpen(false);
      };

      const hideModal2 = () => {
        setOpen2(false);
      };

    return (  
        <div className="w-100">     
            {/* Search Input */}  
            <div className="d-flex justify-content-between mb-2"> 
                <div>
                   <Link ><label style={{cursor:'pointer',fontSize:"17px"}}>Connections</label></Link> {`/`}  <Link ><label style={{cursor:'pointer',fontSize:"17px"}}>Tables</label></Link>
                </div> 
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
                    pageSize: 10,  
                }}  
            />  
            <CustomModel
             title={<>Delete { data.connectionName !== undefined ?  <span style={{ color: "red",display:"inline" }}>"{` `} {data.connectionName}{` `} "</span>:''} {` `}Connection</>}
              hideModal={hideModal} 
              open={open}
              data={data}
              performAction = {()=>{}}
            //    performAction={()=>activeState(customerId,customername,customerrole)}
            />

            <CustomModelRename
             title={<>Rename { data.connectionName !== undefined ?  <span style={{ color: "red",display:"inline" }}>"{` `} {data.connectionName}{` `} "</span>:''} {` `}Connection</>}
              hideModal={hideModal2} 
              open={open2}
              data={data}
              performAction = {()=>{}}
            //    performAction={()=>activeState(customerId,customername,customerrole)}
            />
        </div>  
    );  
}

export default ViewConnection