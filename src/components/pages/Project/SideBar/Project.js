import React, { Children, useState } from 'react';  
import { useNavigate } from 'react-router-dom';  
import { Button, Layout, Menu, theme } from 'antd';
import { GiHamburgerMenu } from 'react-icons/gi';     
import { FaLink } from 'react-icons/fa6';  
import { FaBookOpenReader } from "react-icons/fa6";
import { BiSolidFileExport } from 'react-icons/bi';  
import { FaProjectDiagram } from "react-icons/fa";
import { MdDeleteSweep } from "react-icons/md";
import { MdRebaseEdit } from "react-icons/md"
import { GrTransaction } from 'react-icons/gr';  
import { Outlet } from 'react-router-dom';  


const { Header, Content, Sider } = Layout;   

const items = [  
  {  
    key: 'createproject',  
    icon: <FaProjectDiagram className='fs-4'/>,  
    label: 'Create Project',  
  },  
  {  
    key: 'readproject',  
    icon: <FaBookOpenReader className='fs-4'/>,  
    label: 'Read Project',  
  },  
  {  
    key: 'editproject',  
    icon: <MdRebaseEdit className='fs-4' />,  
    label: 'Edit Project',
  },  
  {  
    key: 'deleteproject',  
    icon: <MdDeleteSweep  className='fs-4' />,  
    label: 'Delete Project'  
  },    
];


const projectItems = [  
  { key: 'createproject', icon: <FaProjectDiagram className='fs-4' />, label: 'Create Project' },  
  { key: 'readproject', icon: <FaBookOpenReader className='fs-4' />, label: 'Read Project' },  
  {  
      key: 'editproject',  
      icon: <MdRebaseEdit className='fs-4' />,  
      label: 'Edit Project',  
      children: [  
          {  
              key: 'users',  
              icon: <FaProjectDiagram className='fs-4' />,  
              label: 'Users',  
              children: [  
                  { key: 'id', label: 'ID' },  
                  { key: 'name', label: 'Name' },  
                  { key: 'email', label: 'Email' }  
              ]  
          },  
          {  
              key: 'products',  
              icon: <FaProjectDiagram className='fs-4' />,  
              label: 'Products',  
              children: [  
                  { key: 'id', label: 'ID' },  
                  { key: 'title', label: 'Title' },  
                  { key: 'price', label: 'Price' }  
              ]  
          },  
      ]  
  },  
  { key: 'deleteproject', icon: <MdDeleteSweep className='fs-4' />, label: 'Delete Project' }  
];

const Project = () => {  
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(true);  
  const [selectedKey, setSelectedKey] = useState('1'); // Add state for the selected key  
  const {  
    token: { colorBgContainer },  
  } = theme.useToken();  

  const handleMenuClick = (e) => {  
    setSelectedKey(e.key); 
    navigate(e.key);
  }

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
            items={projectItems}  
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

export default Project;