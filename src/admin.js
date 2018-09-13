import React, { Component } from 'react'
import {Row,Col} from 'antd'
import './style/common.css'
import NavLeft from './components/navLeft'
import Header from './components/header'
import Footer from './components/footer'


export default class Admin extends Component {


  render() {
    return (
      <Row className='container'>
          <Col span='3' className='nav-left'>
            <NavLeft />
          </Col>
          <Col span='21' className='main'>
            <Header/>
              <Row className='content'>
              content
                  {/* {this.props.children} */}
              </Row>
            <Footer />
          </Col>
      </Row>
    )
  }
}
