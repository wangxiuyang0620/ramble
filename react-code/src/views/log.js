import React,{useState} from 'react'
import { Input, Button } from 'antd';
import { UserOutlined, KeyOutlined } from '@ant-design/icons';
function Log(props) {
    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    let submit = async (user, pwd) => {
        if (user.trim() === '') {
            alert('用户名不能为空')
            return
        }
        if (pwd.trim() === '') {
            alert('密码不能为空')
            return
        }
        let res = await React.http('post', '/crm/login', { user, pwd })
        if (res.data.code === 200) {
            localStorage.setItem('user', user)
            localStorage.setItem('crmtoken', res.data.data.crmtoken)
            props.history.push('/home')
        }
        alert(res.data.msg)
    }
    return (
        <div className='log'>
            <Input placeholder="用户名" prefix={<UserOutlined />} value={user} className='ipt' onChange={(e) => setUser(e.target.value)} />
            <Input placeholder="密码" prefix={<KeyOutlined />} value={pwd} className='ipt' onChange={(e) => setPwd(e.target.value)} />
            <Button type="primary" className='btn' onClick={() => submit(user,pwd)}>LOGIN</Button>
        </div>
    )
}
// class Log extends React.Component {
//     state = {

//     }
//     render() {
//         return (
//             <div className='log'>
//                 <Input placeholder="用户名" prefix={<UserOutlined />} className='ipt' ref='user' />
//                 <Input placeholder="密码" prefix={<KeyOutlined />} className='ipt' ref='pwd' />
//                 <Button type="primary" className='btn' onClick={() => { this.submit() }}>LOGIN</Button>
//             </div>
//         )
//     }
//     async submit() {
//         let user = this.refs.user.input.value;
//         let pwd = this.refs.pwd.input.value;
//         if (user.trim() === '') {
//             alert('用户名不能为空')
//             return
//         }
//         if (pwd.trim() === '') {
//             alert('密码不能为空')
//             return
//         }
//         let res = await this.$http('post', '/crm/login', { user, pwd })
//         if(res.data.code === 200){
//             localStorage.setItem('user',user)
//             localStorage.setItem('token',res.data.data.token)
//             this.props.history.push('/home')
//         }
//         alert(res.data.msg)
//     }

// }
export default Log