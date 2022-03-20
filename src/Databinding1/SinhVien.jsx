// binding là đưa dữ liệu biến , tham số , thuộc tính lên giao diện lợi ích ( viết cú pháp dài dòng document.getelementbyId....)


import React, { Component } from 'react'


export default class SinhVien extends Component {

    // tính chất hướng đối tượng là có thuộc tính và phương thức 
    // thuoc tính
    hoTen = 'Nguyễn Văn A';
    Lop = 'Frontend BC17';
    //   tenTrungTam = 'CyberSoft' bên dưới là biến nen không sử dụng cục bộ được nên phải khai báo lên trên như là thuộc tính để sử dụng
    // tenTrungTam = 'CyberSoft' nếu không thích sử dụng tên trung tâm là 1 thuộc tính bên dưới truyền như gọi hàm bình thường
    // ngoài ra các bạn còn có thể biding 1 phương thức trả về nội dung của chúng ta là các tag JSX thì có thể gọi được trên này
    // thuộc tính không có khai báo let 
    renderThongTinSinhVien = (tenTrungTam) => {
        // đây phương thức này mình sẽ trả về 1 cái tag
        return (
            //   {/* cách 2 */}

            <ul>
                <li>Họ Tên :{this.hoTen}</li>
                <li>Lớp :{this.Lop}</li>
                {/* <li>Trung Tâm :{this.tenTrungTam}</li> */}
                <li>Trung Tâm :{tenTrungTam}</li>

            </ul>
        )
    }
    // phương thức render là phương thức thuộc class SinhVien
    render() {
        //   biến của hàm render và phạm vi hoạt động của biến chỉ nằm trong phương thức này thôi vd có phương thức khác sẽ không gọi được 
        const tenTrungTam = 'CyberSoft'

        return (
            <div className='container'>
                {/* <ul> */}
                    {/* để truy suất thuộc tính trong phạm vi class đó thì dùng từ khóa nào  */}
                    {/* giống trimtemplay còn JSX này có thể trèn trưc tiếp vào giá trị mà nó được đặt giưa 2 dấu {} */}
                    {/* cách 1 */}
                    {/* <li>Họ Tên :{this.hoTen}</li>
                    <li>Lớp :{this.Lop}</li>
                    <li>Trung Tâm :{tenTrungTam}</li> */}
                {/* </ul> */}
                {this.renderThongTinSinhVien(tenTrungTam)}
            </div>
        )
    }
}

// ngoài ra các bạn còn có thể biding 1 phương thức trả về nội dung của chúng ta là các tag JSX thì có thể gọi được trên này