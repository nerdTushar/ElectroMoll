import React,{useState,useEffect} from 'react';
import {Form,Row,Col,Button,Container} from 'react-bootstrap';
// import { useParams } from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux';
import {getPizzaById,updatePizza} from '../../actions/pizzaAction';
import Loader from '../Loader';
import Error from '../Error';
import Success from '../Success';

const EditPizza = ({match}) => {
  // const params = useParams();
  const [name,setName] = useState('');
  const [price,setPrice] = useState();
  const [tag,setTag] = useState();
  const [image,setImage] = useState('');
  const [description,setDescription] = useState('');
  const dispatch = useDispatch();
  const getPizzaByState = useSelector(state => state.getPizzaByIdReducer);
  const {pizza} = getPizzaByState;
  const updatePizzaState = useSelector(state => state.updatePizzaByIdReducer);
  const {updateloading,updateerror,updatesuccess} = updatePizzaState;

  useEffect(() => {
    if(pizza){
      if(pizza._id === match.params.pizzaId){
        setName(pizza.name);
        setDescription(pizza.description);
        setImage(pizza.image);
        setPrice(pizza.prices);
        setTag(pizza.tag);
    }else{
      dispatch(getPizzaById(match.params.pizzaId));
    } 
    }else{
      dispatch(getPizzaById(match.params.pizzaId));
    }
    
  },[pizza,dispatch,match.params.pizzaId]);

  const submitForm = (e) => {
    e.preventDefault();
    const updatedpizza = {
      _id : match.params.pizzaId,
      name,image,description,tag,
      prices : price
    }
    dispatch(updatePizza(updatedpizza));
  };

  return (
    <>
      {updateloading && (<Loader />)}
    {updateerror && (<Error error='Update Electronic Error'/>)}
    {updatesuccess && (<Success success='Electronic Updated Successfully'/>)}
    <Container style={{marginTop : '5px'}}>
      <Form onSubmit={submitForm} className='bg-light p-4'>
      <Row className="mb-3">
      
        <Form.Group as={Col} controlId="formGridEmail" >
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" value={name} 
          onChange={e => setName(e.target.value)} placeholder="Enter name" />
        </Form.Group>

        
        
        <Row className="mb-0" style={{marginTop : '18px'}}>
        
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>Tag</Form.Label>
          <Form.Control type="text" value={tag} 
          onChange={e => setTag(e.target.value)} placeholder="Enter tag"/>
        </Form.Group>
      </Row>
        <Row className="mb-3" style={{marginTop : '18px'}}>
        
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>Price</Form.Label>
          <Form.Control type="text" value={price} 
          onChange={e => setPrice(e.target.value)} placeholder="Enter price"/>
        </Form.Group>
      </Row>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Image</Form.Label>
          <Form.Control type="text" value={image} 
          onChange={e => setImage(e.target.value)} placeholder="Add image URL" />
        </Form.Group>
      
        </Row> 
      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Description</Form.Label>
        <Form.Control type="text" value={description} 
          onChange={e => setDescription(e.target.value)} placeholder="Enter description" />
      </Form.Group>
      
      <Button variant="primary" type='submit'>
        Update Electronic
      </Button>
    </Form>
    </Container>
    </>
  )
};

export default EditPizza;
