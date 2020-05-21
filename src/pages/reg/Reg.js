import React, { Component } from 'react'
import './Reg.scss'
import {Button,InputItem,Flex,WingBlank,WhiteSpace,Toast} from 'antd-mobile'
import {Link} from 'react-router-dom'
import {code,reg} from '../../api/apis'



export default class Reg extends Component {
    render() {

        let {btnText,btnBool,phone,pwd,code,yzm} =this.state

        return (
            <div className='reg'>
                <WingBlank size='lg'>
                    <InputItem placeholder="请输入手机" value={phone} onChange={this.phoneChange}/> 

                    <WhiteSpace size="md" />
                    <InputItem placeholder="请输入密码" value={pwd} onChange={this.pwdChange}/>

                    <WhiteSpace size="md" />
                    <Flex justify='between'>
                        <InputItem placeholder="请输入验证码" value={code} onChange={this.codeChange}/>
                        <button onClick={this.SendCode.bind(this)} disabled={btnBool} >{btnText}</button>
                    </Flex>
                    <p style={{color:"#f00"}}>{this.state.error}</p>
                    <WhiteSpace size="md" />
                    <Button type="primary" style={{backgroundColor:'#00bc5b'}} onClick={this.register.bind(this)}>注册</Button>
                    <WhiteSpace size="md" />
                    <Link to='/login'>已有账号</Link>
                    <h1>{yzm}</h1>
                </WingBlank>
            </div>
        )
    }

    state={
        btnText:'获取验证码',
        btnBool:false,
        phone:'',
        pwd:'',
        code:'',
        yzm:null,
        error:null,
    }
    phoneChange=(val)=>{
        this.setState({phone:val})
    }
    pwdChange=(val)=>{
        this.setState({pwd:val})
    }
    codeChange=(val)=>{
        this.setState({code:val})
    }
    //验证码请求
    SendCode(){
        let maxTime  = 60
        //验证码
        code().then((res)=>{
            this.setState({yzm:res.data})
        })

        this.timer=setInterval(() => {
            if (maxTime > 0) {
              --maxTime
              this.setState({
                btnText: '重新获取' + maxTime,
                btnBool: true
              })
            }else {
                clearInterval(this.timer)
                this.setState({
                btnText: '发送验证码',
                btnBool: false
              })
            }
          }, 1000)
    }

    //注册请求
    register(){
        if(this.state.yzm==this.state.code){
            //注册
            reg(this.state.phone,this.state.pwd).then((res)=>{
                //倒数跳转
                let time = 3
                this.timer2=setInterval(()=>{
                    if(time>0){
                        time--
                        Toast.success('恭喜您，注册成功'+time+'秒后自动为您跳转', 3);
                    }else{
                        clearInterval(this.timer2)
                        time=3
                    }
                },1000)

                setInterval(()=>{
                    window.location.href='/'
                },3000)
            })
        }else{
            this.setState({error:'请输入正确的验证码'})
        }
    }



}
