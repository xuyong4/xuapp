import React, { Component } from 'react'
import { Link } from 'react-router-dom'
//引入home.css
import './home.scss'
//引入antd design 组件
import { WingBlank, SearchBar, Flex, Carousel, Grid } from 'antd-mobile'
//引入apis
import { like } from '../../../api/apis'

export default class home extends Component {
  state = {
    data: ['1', '2', '3', '4'],
    imgHeight: 176,
    navId: [1, 2, 3, 4, 5, 6, 7, 8],
    navText: ['新房', '租房', '二手房', '商铺写字楼', '卖房', '海外房产', '小区房价', '问答'],
    nav2Id: [9, 10, 11, 12],
    nav2Text: ['我要贷款', '房贷计算', '知识', '扫一扫'],
    like: []
  }
  render() {
    let { navId, navText, nav2Id, nav2Text, like } = this.state

    const nav_ui = Array.from(new Array(8)).map((_val, i) => ({
      icon: require(`../../../assets/imgs/ui-${navId[i]}.png`),
      text: `${navText[i]}`,
    }));
    const nav2_ui = Array.from(new Array(4)).map((_val, i) => ({
      icon: require(`../../../assets/imgs/ui-${nav2Id[i]}.png`),
      text: `${nav2Text[i]}`,
    }));

    return (
      <div className='home'>
        <div className='header'>
          <WingBlank size='md' >
            <Flex justify='between'>
              <Flex.Item><Link to='/city'>城市</Link></Flex.Item>
              <Flex.Item style={{ flex: '7' }}><SearchBar placeholder="Search" style={{ backgroundColor: '#00bc5b', height: '40px' }} /></Flex.Item>
              <Flex.Item><img src={require('../../../assets/imgs/GPS.png')} style={{ width: '22px', verticalAlign: 'middle', }} /></Flex.Item>
            </Flex>
          </WingBlank>
        </div>
        <div className='banner'>
          <Carousel autoplay infinite style={{ height: '180px' }}>
            {this.state.data.map(val => (
              <a key={val} href="/" style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }} >
                <img src={require(`../../../assets/imgs/banner-${val}.jpg`)} alt="" style={{ width: '100%', height: '180px', verticalAlign: 'top' }}
                  onLoad={() => {
                    // fire window resize event to change height
                    window.dispatchEvent(new Event('resize'));
                    this.setState({ imgHeight: 'auto' });
                  }}
                />
              </a>
            ))}
          </Carousel>
        </div>
        <div className='nav'>
          <Grid data={nav_ui} columnNum={4} hasLine={false} />
        </div>
        <div className='nav2'>
          <span style={{ color: '#00bc5b', font: 'bold 18px 微软雅黑', paddingRight: '10px' }}>房产全百科</span>
          <span>专业的买房攻略</span>
          <Grid data={nav2_ui} columnNum={4} hasLine={false} />
        </div>
        <div className='like'>
          <span style={{ color: '#00bc5b', font: 'bold 18px 微软雅黑', paddingRight: '10px' }}>猜你喜欢</span>
          {like.map((obj, i) => {
            return <div key={i}>
              <Flex align='start'>
                <Flex.Item style={{ flex: '3' }}><img src={`http://129.211.169.131:33833/imgs/${i + 1}.jpg`} style={{ width: '100%', height: '110px' }}></img></Flex.Item>
                <Flex.Item style={{ flex: '5' }}>
                  <h2>{obj.name}</h2>
                  <p>{obj.area} {obj.range}</p>
                  <p>{obj.type} {obj.point}²</p>
                </Flex.Item>
                <Flex.Item style={{ flex: '2' }}><span style={{color:'#f00'}}>{obj.price}/平</span></Flex.Item>
              </Flex>
            </div>
          })}
        </div>
      </div>
    )
  }

  componentDidMount() {
    like().then((res) => {
      this.setState({ like: res.data })
      console.log(this.state.like)
    })
  }

}
