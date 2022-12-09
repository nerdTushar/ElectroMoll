import React,{useState} from 'react';
import {useDispatch} from 'react-redux';
import {Form,Row,Col,Button,Container} from 'react-bootstrap';
import {filterPizza} from '../actions/pizzaAction';

const Filters = () => {
    const dispatch = useDispatch();
    const [searchKey,setSearchKey] = useState('');
    const [category,setCategory] = useState('all');
  return (
    <>
    {/* <Container className='p-4 background mt-4 filter'>
    <Form style={{marginLeft : '230px'}}>
    <Row >
        <Col md={8} className='searchkey'>
        
          <Form.Control  placeholder="Search Electronic Products" 
            value={searchKey}
            onChange={(e) => setSearchKey(e.target.value)  }
          />
        </Col>
        <Col md={4} className='search'>
            <Button onClick={() => {dispatch(filterPizza(searchKey,category))}} style={{backgroundColor:"#00c2cb"}}>Search</Button>
        </Col>
      </Row>
    </Form>
    </Container> */}

    <div className='container p-3 background mt-4 filter rounded-3'>
           <form>
               <div className='d-flex justify-content-center align-items-center gap-4 wid'>
                  <div style={{width:"500px"}} >
                     <input className='form-control text-info fs-5 fw-bold' placeholder="Search Electronic Products" 
                            value={searchKey}
                            onChange={(e) => setSearchKey(e.target.value)  }
                            
                      />
                  </div>
                  <div>
                  <Button onClick={() => {dispatch(filterPizza(searchKey,category))}} className="backg text-white fs-5">Search</Button>
                  </div>
               </div>
           </form>
        </div>
    </>
  )
};

export default Filters;
