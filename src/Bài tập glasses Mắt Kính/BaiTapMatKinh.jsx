import React, { Component } from 'react'
import dataGlasses from '../Data/dataGlasses.json'

export default class BaiTapMatKinh extends Component {
    //  mỗi khi tương tác giao diện thay đổi thì phải đặt trong state
    state = {
        glassesCurrent: {
            "id": 2,
            "price": 50,
            "name": "GUCCI G8759H",
            "url": "./glassesImage/v2.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        }
    }


    renderGlassesList = () => {
        return dataGlasses.map((glassesItem, index) => {
            return <img onClick={() => {this.changeGlasses(glassesItem) }} className='ml-2 p-2 border border-width-1' style={{ width: '110px', cursor: 'pointer' }} key={index} src={glassesItem.url} />
        })
    }

    changeGlasses = (newGlasses) => {
        this.setState({
            glassesCurrent: newGlasses
        })
    }


    render() {

        const styleGlasses = {
            width: '150px',
            top: '75px',
            right: '72px',
            opacity: '0.8',
        }

        const infoGlasses = {
            width: '250px',
            top: '200px',
            left: '273px',
            backgroundColor: 'rgba(225,127,0,0.5)',
            textAlign: 'left',
            height: '105px',

        }
        return (
            <div style={{ backgroundImage: 'url(./img/backgroundGlass.jpg)', minHeight: '1000px', backgroundSize: '1000px' }}>
                <div style={{ backgroundColor: 'rgba(0,0,0,.8)', minHeight: '2000px' }}>
                    <h3 className='text-center text-light' style={{ backgroundColor: 'rgba(0,0,0,.3)' }}>Try Glass App Online</h3>
                    <div className='container'>
                        <div className='row mt-5 text-center'>
                            <div className='col-6'>
                                <div className='position-relative'>
                                    <img className='position-absolute' style={{ width: '250px' }} src="./img/model.jpg" alt='model.jpg' />
                                    <img style={styleGlasses} className='position-absolute' src={this.state.glassesCurrent.url} alt='model.jpg' />
                                    <div style={infoGlasses} className="position-relative ">
                                        <span style={{ color: '	#3399FF' }} className="font-weight-bold">{this.state.glassesCurrent.name}</span>
                                        <br />
                                        <span style={{ fontSize: '14px ' }} className="font-weight-bold mr-1">{this.state.glassesCurrent.desc}</span>
                                    </div>
                                </div>
                            </div>
                            <div className='col-6'>

                                <img style={{ width: '250px' }} src="./img/model.jpg" alt='model.jpg' />
                            </div>
                        </div>
                    </div>
                    {/* div chứa các kính được chọn */}
                    <div className="bg-light container text-center mt-5 d-flex justify-content-center" >
                        {this.renderGlassesList()}
                    </div>
                </div>


            </div>
        )
    }
}
