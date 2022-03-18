import React, { Component } from 'react';
// Kết nối với redux
import { connect } from 'react-redux';

class GioHangRedux extends Component {

    render() {
        console.log('props', this.props);
        return (
            <table className='table'>
                <thead>
                    <tr>
                        <th>Mã sản phẩm</th>
                        <th>Tên Sản Phẩm</th>
                        <th>Hình Ảnh</th>
                        <th>Giá bán</th>
                        <th>Số lượng</th>
                        <th>Tổng tiền</th>
                        <th>Thao Tác</th>
                    </tr>
                </thead>
                <tbody>
                {/* <tr >
                        <td>1</td>
                        <td>Iphone</td>
                        <td><img src='https://i.pravatar.cc?u=1' alt='...' width={50} /></td>
                        <td>1000</td>
                        <td>2</td>
                        <td>2000</td>
                        <td><button className='btn btn-danger '>Xóa</button></td>
                    </tr> */}
                    {this.props.gioHang.map((spGH,index)=>{
                        return <tr key={index}>
                        <td>{spGH.maSP}</td>
                        <td>{spGH.tenSP}</td>
                        <td><img src={spGH.hinhAnh} alt='...' width={50} /></td>
                        <td>{spGH.giaBan}</td>
                        <td>{spGH.soLuong}</td>
                        <td>{spGH.giaBan*spGH.soLuong}</td>
                        <td><button className='btn btn-danger 'onClick={()=>{
                            this.props.xoaGioHang(spGH.maSP)
                        }
                        }>Xóa</button></td>
                    </tr>
                    }
                    )}

                </tbody>
            </table>
        )
    }

}

// định nghĩa hàm để lấy dữ liệu từ redux về component này
const mapStateToProps = (rootReducer) => {
    // rootReducer: là state tổng của ứng dụng 
    // hàm này sẽ tạo ra 1 props cho component ở lệnh return
    return {
        gioHang: rootReducer.gioHangReducer,
        number:rootReducer.numberReducer
    }
}
// này tạm hiểu là cú pháp redux

// connect()(GioHangRedux)
// khi connect được gọi sẽ trả về 1 component đã được kết nối với redux store , và mình exprot default component đó ra luôn
// const ComponentRedux = connect()(GioHangRedux);

export default connect(mapStateToProps)(GioHangRedux);

