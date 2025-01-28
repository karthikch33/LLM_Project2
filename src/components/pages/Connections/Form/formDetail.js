const MySqlFormDetails = {
    host:{
        type: 'text',
        label:'Host',
        name:'Host',
        rules:[{required:true,message:'Please input the host'}]
    },
    username:{
        type:"text",
        label:'Username',
        name:'Username',
        rules:[{required:true,message:'Please input the Useaname'}]
    },
    password:{
        type:"password",
        label:'Password',
        name:'Password',
        rules:[{required:true,message:'Please input the Password'}]
    },
    database:{
        type:"text",
        label:'Database',
        name:'Database',
        rules:[{required:true,message:'Please input the Database'}]
    }
}

const OracleFormDetails = {
    username:{
        type:"text",
        label:'Username',
        name:'Username',
        rules:[{required:true,message:'Please input the Username'}]
    },
    password:{
        type:"password",
        label:'Password',
        name:'Password',
        rules:[{required:true,message:'Please input the Password'}]
    },
    dsn:{
        type:"text",
        label:'DSN',
        name:'DSN',
        rules:[{required:true,message:'Please input the Database'}]
    }
}

const ERPFormDetails = {
    address:{
        type:"text",
        label:'Address',
        name:'Address',
        rules:[{required:true,message:'Please input the Address'}]
    },
    port:{
        type: 'text',
        label:'Port',
        name:'Port',
        rules:[{required:true,message:'Please input the Port'}]
    },
    username:{
        type:"text",
        label:'Username',
        name:'Username',
        rules:[{required:true,message:'Please input the Useaname'}]
    },
    password:{
        type:"password",
        label:'Password',
        name:'Password',
        rules:[{required:true,message:'Please input the Password'}]
    }
}

const allformdetails = { MySqlFormDetails, OracleFormDetails, ERPFormDetails };

export default allformdetails;