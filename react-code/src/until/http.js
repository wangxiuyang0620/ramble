import axios from 'axios';
export default function(method,url,data=[]){
    let configData={};
    configData.method=method;
    configData.url=url;
    let type= method === 'get' ? 'params' :'data';
    configData[type] = data;
    configData.headers={
        versions:'1.0.0',
        source:'crm'
    }
    return axios(configData).catch(error=>{
        if(error.response.status === 404) return alert('接口问题')
        if(error.response.status === 500) return alert('服务问题')
    })
}