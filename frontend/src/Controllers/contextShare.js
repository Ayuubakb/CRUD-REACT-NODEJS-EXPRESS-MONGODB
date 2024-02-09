import { createContext } from "react";

const contextShare=createContext({
    inf:{
        username:null,
        firstName:null,
        lastName:null,
        pic:null,
        email:null
    },
    setFlag:()=>{}
})

export default contextShare