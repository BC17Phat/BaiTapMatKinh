import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

export default class DemoProps extends Component {
    
    
    render() {
        let productA = {
            maSanPham:1,
            tenSanPham:'Iphone',
            gia:1000,
            hinhAnh:'https://picsum.photos/id/1/200/300'
        }
        
        let productB = {
            maSanPham:2,
            tenSanPham:'Iphone 13',
            gia:2000,
            hinhAnh:'https://picsum.photos/id/2/200/300'
        }
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-4'>
                        {/* cách 1 */}
                        {/* <ChildComponent tenSanPham='Iphone' gia={1000}/> */}
                        {/* cách 2 */}
                        <ChildComponent product={productA}/>
                    </div>
                    <div className='col-4'>
                        {/* <ChildComponent tenSanPham='Iphone 13' gia={2000} />*/}
                        <ChildComponent product={productB}/>

                    </div>
                </div>
               
            </div>
        )
    }
}
