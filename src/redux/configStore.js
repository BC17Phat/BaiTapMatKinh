import { combineReducers, createStore } from 'redux';
import { gioHangReducer } from './reducers/gioHangReducer';


let stateGioHangDefault = [
    { maSP: 1, tenSP: "VinSmart Live",soLuong: 2, giaBan: 5700000, hinhAnh: "./img/vsphone.jpg" }
]
// rootReducer xem như state tổng của ứng dụng
const rootReducer = combineReducers({
    // Nơi chứa các state của ứng dụng
     gioHangReducer ,
    numberReducer: (state=1,action)=>{
        return state;
    }
    //
});

export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());