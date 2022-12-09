import React,{useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {Table} from 'react-bootstrap';
import {deletePizza, getAllPizzas} from '../../actions/pizzaAction';
import Loader from '../Loader';
import Error from '../Error';
import {AiFillEdit,AiFillDelete} from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Pizzaslist = () => {
  const dispatch = useDispatch();
  const pizzastate = useSelector(state => state.getAllPizzaReducer);
  const {loading,pizzas,error} = pizzastate;
  useEffect(() => {dispatch(getAllPizzas())}, [dispatch]);
  return (
    <>
      {loading ? (<Loader />) : error ? (<Error>Error while fetching pizzas {error}</Error>) : 
      (<div>
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>Image</th>
          <th>Electronic Name</th>
          <th>Prices</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {
          pizzas && pizzas.map(pizza => (
            <tr key={pizza.name}>
              <td><img src={pizza.image} alt='logo' width='100px' height='100px'/></td>
              <td>{pizza.name}</td>
              <td>{pizza.prices} <br />
              </td>
              <td>
                <Link to={`/admin/editpizza/${pizza._id}`}>
                <AiFillEdit style={{cursor : 'pointer'}}/> 
                </Link>
              &nbsp; <AiFillDelete style={{color : 'red',cursor : 'pointer'}} 
                onClick={() => {dispatch(deletePizza(pizza._id))}}
              /></td>
            </tr>
          ))
        }
      </tbody>
    </Table>
      </div>)
      }
    </>
  )
};

export default Pizzaslist;
