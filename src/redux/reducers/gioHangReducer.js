
let stateGioHangDefault = [
    { maSP: 1, tenSP: "VinSmart Live", soLuong: 2, giaBan: 5700000, hinhAnh: "./img/vsphone.jpg" }
]



export const gioHangReducer = (state = stateGioHangDefault, action) => {


    switch (action.type) {
        case 'THEM_GIO_HANG': {
            let gioHang = [...state];
            // let gioHang = state;
            // Tu sản phẩm được click thông qua redux gửi lên => tạo ra 1 sản phẩm có thuộc tính số lượng
            let spGH = {...action.sanPhamClick,soLuong:1};
            // kiem tra sam oham gui len da co  trong gio hang hay chua
            let sp = gioHang.find(spGH => spGH.maSP === action.sanPhamClick.maSP);
            if(sp){
                sp.soLuong +=1;
            }else{
                gioHang.push(spGH);
            }
            console.log('giohang',gioHang);
             // immutable : tính chất bất biến 
            return gioHang;
        }
    }

    return state;
}

