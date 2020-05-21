import React, { Component } from 'react'
import './my.scss'
import { Flex, List } from 'antd-mobile'

export default class my extends Component {
  render() {
    const Item = List.Item;
    return (
      <div className='my'>
        <div className='header'>
          <Flex justify='between'>
            <img src={require('../../../assets/imgs/tx.png')} alt="" style={{ width: '20%' }} />
            <div style={{ flexGrow: '2' }}>
              <p style={{ fontSize: '19px' }}>登录/注册</p>
              <p>可以与经纪人发起聊天</p>
            </div>
            <p> 设置图标 </p>
          </Flex>
          <Flex className='text'>
            <Flex.Item>
              <div className='line'>
                <p>0</p>
                <p>钱包</p>
              </div>
            </Flex.Item>
            <Flex.Item>
              <div className='line'>
                <p>0</p>
                <p>优惠</p>
              </div>
            </Flex.Item>
            <Flex.Item>
              <div>
                <p>0</p>
                <p>积分</p>
              </div>
            </Flex.Item>
          </Flex>
        </div>
        <div className='list'>
          <List className='listbox'>
            <Item thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png" arrow="horizontal" onClick={() => { }} > 我的积分</Item>
            <Item thumb="https://zos.alipayobjects.com/rmsportal/UmbJMbWOejVOpxe.png" onClick={() => { }} arrow="horizontal" > 我的订阅 </Item>
            <Item thumb="https://zos.alipayobjects.com/rmsportal/UmbJMbWOejVOpxe.png" onClick={() => { }} arrow="horizontal" > 微聊联系人 </Item>
          </List>
          <List className='listbox'>
            <Item thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png" arrow="horizontal" onClick={() => { }} > 房贷计算器</Item>
            <Item thumb="https://zos.alipayobjects.com/rmsportal/UmbJMbWOejVOpxe.png" onClick={() => { }} arrow="horizontal" > 我的房子 </Item>
          </List>
          <List className='listbox'>
            <Item thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png" arrow="horizontal" onClick={() => { }} > 我的看房记录</Item>
            <Item thumb="https://zos.alipayobjects.com/rmsportal/UmbJMbWOejVOpxe.png" onClick={() => { }} arrow="horizontal" > 我的问答 </Item>
          </List>
          <List className='listbox'>
            <Item thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png" arrow="horizontal" onClick={() => { }} > 设置</Item>
            <Item thumb="https://zos.alipayobjects.com/rmsportal/UmbJMbWOejVOpxe.png" onClick={() => { }} arrow="horizontal" > 意见反馈 </Item>
          </List>
        </div>
      </div>
    )
  }
}
