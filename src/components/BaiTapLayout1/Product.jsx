import React, { Component } from 'react'
import { Card } from "react-bootstrap";
import CardGroup from 'react-bootstrap/CardGroup'

export default class Product extends Component {
  render() {
    return (
      // <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3">
      //  <div className="container">
      //     <div className="row">
      //       <div classname="card bg-light col-3" style={{ width: 300 }}>
      //         <img className="card-img-top" src="./img/sp_iphoneX.png" alt="Card image" style={{ maxwidth: "100%", height: 250 }} />
      //         <div className="card-body text-center">
      //           <h4 className="card-title text-center">Iphone X</h4>
      //           <p className="card-text">iphone X features a new all-screen desgin .Face ID , which makes your face you password</p>
      //           <a href="#" className="btn btn-primary">Detail</a>
      //           <a href="#" className="btn btn-danger">Cart</a>
      //         </div>
      //       </div>
      //     </div> 

      //  </div>
      // <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3 ">
      //   <Card className="container " style={{ width: '18rem' }}>
      //     <Card.Img variant="top" src="./img/sp_iphoneX.png" />
      //     <Card.Body className="card-body text-center">
      //       <Card.Title>Card Title</Card.Title>
      //       <Card.Text>
      //         Some quick example text to build on the card title and make up the bulk of
      //         the card's content.
      //       </Card.Text>
      //       <a href="#" className="btn btn-primary">Detail</a>
      //       <a href="#" className="btn btn-danger">Cart</a>
      //     </Card.Body>
      //   </Card>
      // </div>


      <CardGroup className="text-center col-xs-12  ">
        <Card >
          <Card.Img variant="top" src="./img/sp_iphoneX.png" />
          <Card.Body>
            <Card.Title>Iphone X</Card.Title>
            <Card.Text>
              iphone X features a new all-screen desgin .Face ID , which makes your face you password.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <a href="#" className="btn btn-primary">Detail</a>
            <a href="#" className="btn btn-danger">Cart</a>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img className="mt-5"  variant="top" src="./img/sp_note7.png " />
          <Card.Body>
            <Card.Title>Iphone X</Card.Title>
            <Card.Text>
            iphone X features a new all-screen desgin .Face ID , which makes your face you password.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
          <a href="#" className="btn btn-primary">Detail</a>
            <a href="#" className="btn btn-danger">Cart</a>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src="./img/sp_vivo850.png" />
          <Card.Body>
            <Card.Title>Iphone X</Card.Title>
            <Card.Text>
            iphone X features a new all-screen desgin .Face ID , which makes your face you password.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
          <a href="#" className="btn btn-primary">Detail</a>
            <a href="#" className="btn btn-danger">Cart</a>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src="./img/vsphone.jpg" />
          <Card.Body>
            <Card.Title>Iphone X</Card.Title>
            <Card.Text>
            iphone X features a new all-screen desgin .Face ID , which makes your face you password.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
          <a href="#" className="btn btn-primary">Detail</a>
            <a href="#" className="btn btn-danger">Cart</a>
          </Card.Footer>
        </Card>
      </CardGroup>



    )
  }
}
