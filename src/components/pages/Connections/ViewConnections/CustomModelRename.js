import React from 'react'
import { Modal } from 'antd'
const CustomModelRename = (props) => {
    const {open,performAction,hideModal,title,data} = props
  return (
    <Modal
        open={open}
        title={title}
        onOk={performAction}
        onCancel={hideModal}
        okText="OK"
        cancelText="CANCEL"
      >
         <div className="form-group">  
                <label htmlFor="">Rename</label>  
                <input  
                    type="text"  
                    className="form-control"  
                    value=''  
                    placeholder='Rename Here'
                    name="password"  
                    onChange={''}  
                />   
            </div>  
      </Modal>
  )
}

export default CustomModelRename