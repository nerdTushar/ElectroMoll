import React,{useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {Container,Row,Col} from 'react-bootstrap';
import Pizza from '../components/Pizza';
import {getAllPizzas} from '../actions/pizzaAction';
import Loader from '../components/Loader';
import Error from '../components/Error';
import Filters from '../components/Filters';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const pizzastate = useSelector(state => state.getAllPizzaReducer);
  const {loading,pizzas,error} = pizzastate;
  useEffect(() => {dispatch(getAllPizzas())}, [dispatch]);
  return (
    <>
      <>
      {loading ? (<Loader />) : error ? (<Error>Error while fetching pizzas {error}</Error>) : 
      
      (<Container>

        <Filters/>
        <Row style={{marginTop:"20px"}}>
            {pizzas.map(pizza => (
                <Col md={4} key={pizza.name}>
                    <Pizza pizza={pizza}/>
                </Col>
            ))}
        </Row>
      </Container>)
      }
        
      </>
    </>
  )
};

export default HomeScreen;
