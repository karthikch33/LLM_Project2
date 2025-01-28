import React, { useState } from 'react';  
import { useNavigate } from 'react-router-dom';  
import { Button, Layout, Menu, theme } from 'antd';
import { GiHamburgerMenu } from 'react-icons/gi';    
import { HiDatabase  } from "react-icons/hi";     
import { SiCrehana } from "react-icons/si";
import { Outlet } from 'react-router-dom';  
import { SiMysql } from "react-icons/si";
import { MdInsertDriveFile   } from "react-icons/md";
import { SiOracle } from "react-icons/si";


const { Header, Content, Sider } = Layout;   

const items = [  
  {  
    key: 'Erp',  
    icon: <SiCrehana  className='fs-4'/>,  
    label: 'ERP',  
  },  
  {  
    key: 'Hana',  
    icon: <SiCrehana  className='fs-4'/>,  
    label: 'Hana',  
  },  
  {  
    key: 'extractions',  
    icon: <HiDatabase  className='fs-4' />,  
    label: 'DATABASE',
    children:[
      {
        key: 'MySql',
        icon: <SiMysql className='fs-4' />,  
        label: 'MySql'
      },
      {
        key: 'Oracle',
        icon: <SiOracle className='fs-4' />,  
        label: 'Oracle'
      }
    ]  
  },  
  {  
    key: 'flatfile',  
    icon: <MdInsertDriveFile  className='fs-4' />,  
    label: 'FLATFILE'  
  },    
];

const Connections = () => {  
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(true);  
  const [selectedKey, setSelectedKey] = useState('1'); // Add state for the selected key  
  const {  
    token: { colorBgContainer },  
  } = theme.useToken();  

  const handleMenuClick = (e) => {  
    setSelectedKey(e.key); 
    navigate(e.key);
  };  

  const returnHome = () => {
    navigate('/');
  }

  return (  
    <>  
      <Layout hasSider>  
        <Sider trigger={null} collapsible collapsed={collapsed}>  
          <div className="fixed logo d-flex align-items-center justify-content-center">  
            <h3 className='text-center text-white fs-5 mb-0 '>  
              <span className='sm-logo' onClick={returnHome} style={{cursor:'pointer'}}>LLM</span>  
              <span className='lg-logo' onClick={returnHome} style={{cursor:'pointer'}}>Large Language Model</span>  
            </h3>  
          </div>  
          <Menu  
            theme="dark"  
            mode="inline"  
            selectedKeys={[selectedKey]}
            onClick={handleMenuClick} 
            items={items}  
          />  
        </Sider>  
        <Layout>  
          <Header style={{ padding: 0, background: colorBgContainer }} className='d-flex justify-content-between ps-3 pe-5'>  
            <Button  
              type="text"  
              icon={collapsed ? <GiHamburgerMenu /> : <GiHamburgerMenu />}  
              onClick={() => setCollapsed(!collapsed)}  
              style={{  
                fontSize: '16px', 
               
                width: 64,  
                height: 64,  
              }}  
            />  
          </Header>  
          <Content  
            style={{  
              margin: '24px 16px',  
              padding: 24,  
              minHeight: 280,  
              background: colorBgContainer,  
            }}  
          >  
            <Outlet />  
          </Content>  
        </Layout>  
      </Layout>  
    </>     
  )
};  

export default Connections;