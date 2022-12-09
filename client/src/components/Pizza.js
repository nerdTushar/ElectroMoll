import React, { useState } from 'react';
import {Card,Button,Row,Col,Modal} from 'react-bootstrap';
import {useDispatch} from 'react-redux';
import {addToCart} from '../actions/cartAction';

const Pizza = ({pizza}) => {
  const [quantity,setQuantity] = useState(1);
  const [show, setShow] = useState(false);

  const dispatch = useDispatch();
  const addToCartHandler = () => {
      dispatch(addToCart(pizza,quantity))
  }

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Card style={{ width: '18rem' , marginTop :'30px', borderColor:"#021a5d"}} className='card cardd border-3'>
      <Card.Img 
            variant="top" 
            src={pizza.image} 
            style={{height : '200px',cursor : 'pointer'}}
            onClick={handleShow} />
      <Card.Body className='background text-light'>
        <Card.Title>{pizza.name}</Card.Title>
        <hr/>
        <Card.Text>
          <Row className='cardbody1 background'>
            <Col md={6} className='varient'>
                <h6>{pizza.tag}</h6>
            </Col>
            <Col md={6} className='quantity'>
                <h6>Quantity</h6>
                <select value={quantity} onChange={e => setQuantity(e.target.value)}>
                  {[...Array(10).keys()].map((i) => (
                    <option key={i} value={i+1}>{i+1} </option>
                  ))}
                </select>
            </Col>
          </Row>
        </Card.Text>
        <Row className='cardbody2 background'>
          <Col md={6} className='price'>Price : {pizza.prices*quantity} /-Rs
          </Col>
          <Col md={6} className='cart'>
            <Button className='backg text-white'
             onClick={addToCartHandler}>Add To Cart</Button>
          </Col>
        </Row>
      </Card.Body>
    </Card>
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{pizza.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div>
        <Card.Img 
            variant="top" 
            src={pizza.image} 
            style={{height : '200px'}} />
        </div>
        <div>
          <h5>Description :</h5>
          <h6>{pizza.description}</h6>
        </div>
        </Modal.Body>
      </Modal>
    </>
  )
};

export default Pizza;
