import React, { Component } from 'react'
import { TabBar } from 'antd-mobile';
//引入二级页面
import Home from './home/home'
import Chat from './chat/chat'
import Recommend from './recommend/recommend'
import My from './my/my'

export default class Nav extends Component {
  state = {
    selectedTab: 'blueTab',
  }

  render() {
    return (
      <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#00bc5b"
          barTintColor="white"
        >
          <TabBar.Item
            icon={{ uri: require('../../assets/imgs/home.png') }}
            selectedIcon={{ uri: require('../../assets/imgs/home-s.png') }}
            title="首页"
            key="Life"
            selected={this.state.selectedTab === 'blueTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'blueTab',
              });
            }}
            data-seed="logId"
          >
            <Home></Home>
          </TabBar.Item>
          <TabBar.Item
            icon={{ uri: require('../../assets/imgs/lt.png') }}
            selectedIcon={{ uri: require('../../assets/imgs/lt-s.png') }}
            title="微聊"
            key="Koubei"
            selected={this.state.selectedTab === 'redTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'redTab',
              });
            }}
            data-seed="logId1"
          >
            <Chat></Chat>
          </TabBar.Item>
          <TabBar.Item
            icon={{ uri: require('../../assets/imgs/tj.png') }}
            selectedIcon={{ uri: require('../../assets/imgs/tj-s.png') }}
            title="推荐"
            key="Friend"
            selected={this.state.selectedTab === 'greenTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'greenTab',
              });
            }}
          >
            <Recommend></Recommend>
          </TabBar.Item>
          <TabBar.Item
            icon={{ uri: require('../../assets/imgs/my.png') }}
            selectedIcon={{ uri: require('../../assets/imgs/my-s.png') }}
            title="我的"
            key="my"
            selected={this.state.selectedTab === 'yellowTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'yellowTab',
              });
            }}
          >
            <My></My>
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}