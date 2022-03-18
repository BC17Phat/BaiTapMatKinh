import React, { Component } from 'react'

export default class ChildComponent extends Component {
// this.Props là thuộc tính có sẵn của react class component dùng để
// truyền dữ liệu Component cha sang component con
// this.props là thuộc tính readonly: không thể gán ljai được giá trị khác

// ví dụ 
// this.props.tenSanPham = 'abc'; 
// nó sẽ bị lỗi ngay
    render() {
        let {maSanPham,tenSanPham,gia,hinhAnh}=this.props.product;
        return (
            <div className='card'>
                {/* cách 1 */}
                {/* <img src={this.props.product.hinhAnh} alt='...' /> */}
                <img src={hinhAnh} alt='...' />
                <div className='card-body'>
                    {/* <p>ten san pham : {this.props.product.tenSanPham}</p> */}
                    <p>ten san pham : {tenSanPham}</p>
                    {/* <p>gia : {this.props.product.gia}</p> */}
                    <p>gia : {gia}</p>
                </div>
            </div>
        )
    }
}
