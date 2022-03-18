import React, { Component } from 'react'
import { Carousel } from 'react-bootstrap'


export default class Slider extends Component {
    render() {
        return (
            <Carousel>
            <Carousel.Item interval={1000}>
              <img
                className="d-block w-100"
                src="./img/slide_1.jpg"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <img
                className="d-block w-100"
                src="./img/slide_2.jpg"
                alt="Second slide"
              />
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <img
                className="d-block w-100"
                src="./img/slide_3.jpg"
                alt="Third slide"
              />
             
            </Carousel.Item>
          </Carousel>

          

        )
    }
}
