import React, { Component } from 'react'
import Footer from './Footer'
import Header from './Header'
import Product from './Product'
import ProductList from './ProductList'
import Slider from './Slider'

export default class BaiTapLayOut1 extends Component {
  render() {
    return (
      <div>
          <Header/>
          <Slider/>
          <ProductList/>
         
          <Footer/>
      </div>
    )
  }
}

