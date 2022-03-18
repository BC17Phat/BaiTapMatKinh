import React, { Component } from 'react'
import Product from './Product'

export default class ProductList extends Component {
  render() {
    return (
      <div >
        <h3 className="text-center">Best Mart Phone</h3>
        < div >

          <Product />
         
        </div>
      </div>
    )
  }
}
