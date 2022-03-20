import React, { Component } from 'react'

export default class Event extends Component {
    // 1 nút button và cài đặt sự kiện cho nút btn đó khi nhấn sẽ hiện lên 1 hộp thoại

    // Phương thức xử lý cho nút click
    // handleShowMessage = () => {
    //     alert('Hello Phát Cố lên bạn nhé ');
    // }

    // render() {
    //     return (


    //         <div className='container'>
    //             {/* không phải truyền vào 1 hàm thông thường mà sẽ dùng cú pháp biding của react là dấu ngoặc {}
    //       và có thể xây dựng phương thức sử lý cho nút click trong và ngoài hàm */}
    //             {/* sau khi xây dựng phương thức xử lý muốn sử dụng trong đây thì phải sd con trỏ this.tên phương thức  */}
    //             {/* {this.handleShoMessage còn gọi là truyền giá trị là ko có dấu ()} thì nhấn nó mới chạy 
    //       còn {this.handleShoMessage()} là mở web là no chạy rồi */}
    //             <button onClick={this.handleShowMessage}>ShoMessage </button>
    //         </div>
    //     )
    // }
    //  3 
    // handleShowMessage2 = (message) => {
    //             // 2
    //     alert(message);
    // }
    // render() {
    //     // ví dụ cái text là 1 cái tham số trong 1 hàm

    //     let message = "Hello Phát Cố Lên nhé cách 2 ";
    //     return (


    //     <div className='container'>
    //        {/* function truyền dưới dạng callback không truyền được tham số  */}
    //        {/* muốn truyền gắn bind( tham số 1 this, tham số 2 tham số truyền vào) */}
    //        {/*                                                      1 */}
    //         <button onClick={this.handleShowMessage2.bind(this,message)}>ShoMessage </button>
    //     </div>
    // )
    // }

    // cach3 nhiều ng sử dụng
    handleShowMessage3 = (message) => {
        // 2
        alert(message);
    }
    render() {
        // ví dụ cái text là 1 cái tham số trong 1 hàm

        let message = "Hello Phát Cố Lên nhé cách 3 ";
        return (


            <div className='container'>
                {/* truyền 1 hàm và gọi thẳng luôn trong đó ( hàm nặc danh) */}
                {/*             gọi này                  trả về này*/}
                <button onClick={()=>this.handleShowMessage3(message)}>Show Message </button>
                {/* đây là function có duy nhất 1 hàm return */}
            </div>
        )
    }


}

