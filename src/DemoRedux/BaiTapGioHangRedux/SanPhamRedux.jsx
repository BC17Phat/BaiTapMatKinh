import React, { Component } from 'react'
// kết nối với redux
import { connect } from 'react-redux';

class SanPhamRedux extends Component {
    render() {
        let { sanPham } = this.props;
        return (
            // cách 1 
            <div className='card'>
                <img src={sanPham.hinhAnh} alt='...' className='w-100' />
                <div className='card-body bg-dark text-white'>
                    {/* <p>Tên sản phẩm</p>
                <p>10000</p> */}
                    <p>{sanPham.tenSP}</p>
                    {/* <p>{sanPham.giaBan.toLocalString()}</p> tại sao không được  */}
                    <p>{sanPham.giaBan.toLocaleString()}</p>
                    <button className='btn btn-danger' onClick={() => {
                        this.props.themGioHang(sanPham);
                    }}>Thêm giỏ hàng</button>
                </div>
            </div>
        )
    }

}

    // const mapDispatchToProps = (dispatch) => {

    //     return {
    //         themGioHang: (sanPhamClick) => {
    //             // console.log(sanPhamClick)
    //             const action = {
    //                 type: 'THEM_GIO_HANG',// thuộc tính bắt buộc của redux
    //                 sanPhamClick
    //             };
    //             //Gửi dữ liệu lên redux
    //             dispatch(action)
    //         }
    //     }
    // }

const mapStateToProps = (rootReducer) => {

    return {
        gioHang: rootReducer.gioHangReducer,
        number: rootReducer.numBerReducer
    }
}

const mapDispatchToProps = (dispatch) => {

    return {
        xoaGioHang: (maSPXoa) => {
            // console.log(sanPhamClick)
            alert(maSPXoa)
        }
    }
}
    export default connect(mapStateToProps, mapDispatchToProps)(SanPhamRedux);