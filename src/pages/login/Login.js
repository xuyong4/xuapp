import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Login.scss'
import { Button, InputItem, Flex, WingBlank, WhiteSpace } from 'antd-mobile'
import { login } from '../../api/apis'


export default class Login extends Component {

  render() {

    let { admin, pwd, error } = this.state

    return (
      <div className='login'>
        <Flex justify='center'>
          <img src={require('../../assets/imgs/logo.jpg')} alt=''></img>
        </Flex>
        <WingBlank size='lg'>
          <InputItem placeholder="请输入手机号" clear onChange={this.adminChange} value={admin}>
            <div style={{ backgroundImage: `url(${require('../../assets/imgs/admin.png')})`, backgroundSize: 'cover', height: '22px', width: '22px' }} />
          </InputItem>

          <InputItem placeholder="请输入密码" clear onChange={this.pwdChange} value={pwd}>
            <div style={{ backgroundImage: `url(${require('../../assets/imgs/pwd.png')})`, backgroundSize: 'cover', height: '25px', width: '25px' }} />
          </InputItem>

          <p style={{ display: error, color: '#f00', textAlign: 'center' }}>用户名或密码错误,请重新输入</p>

          <Button type="primary" style={{ backgroundColor: '#00bc5b' }} onClick={this.clickLogin}>登录</Button>

          <WhiteSpace size="md" />

          <Flex justify='between'>
            <Link to='/reg'>手机快速注册</Link>
            <Link to=''>忘记密码</Link>
          </Flex>
        </WingBlank>

      </div>
    )
  }

  state = {
    admin: '', //用户名
    pwd: '',  //密码
    error: 'none'
  }
  //数据驱动
  adminChange = (val) => {
    this.setState({ admin: val })
  }
  pwdChange = (val) => {
    this.setState({ pwd: val })
  }

  //登录功能
  clickLogin = () => {

    if (this.isClick) return
    console.log('发送请求');
    this.isClick = true

    setTimeout(() => {
      this.isClick = false
    }, 2000)

    login(this.state.admin, this.state.pwd).then((res) => {
      // console.log(res);
      if (res.data === 'ok') {
        window.location.href = '/#/'
      } else {
        this.setState({ error: 'block' })
      }
    })

  }


}
