import React from 'react';
import {Navbar,Nav,Container,Image,NavDropdown} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import {useDispatch,useSelector} from 'react-redux';
import {logoutUser} from '../actions/userAction';

const NavBar = () => {
  const dispatch = useDispatch();
  const cartState = useSelector(state => state.cartReducer);
  const userState = useSelector(state => state.loginUserReducer);
  const {currentUser} = userState;
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className='backg1' variant="light">
      <Container>
        <Navbar.Brand >
            <Image src='../../images/electromoll.png' alt='logo' style={{height : "70px",width:"250px"}}/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto fw-bold">
          {
            currentUser ? (<LinkContainer to='/'>
                {/* <Nav.Link>{currentUser.name}</Nav.Link> */}
                <NavDropdown title={currentUser.name} id="nav-dropdown">
                <LinkContainer to='/orders'>
                <NavDropdown.Item>Order</NavDropdown.Item>
            </LinkContainer>
            {currentUser.isAdmin === true ?
              (<LinkContainer to='/admin'>
                <NavDropdown.Item>Admin</NavDropdown.Item>
            </LinkContainer>) : null
            }
                   
        <NavDropdown.Item onClick={() => {dispatch(logoutUser())}}>Logout</NavDropdown.Item>
      </NavDropdown>
            </LinkContainer>) : (<>
            {" "}
            <LinkContainer to='/login'>
                <Nav.Link>Login</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/register'>
                <Nav.Link>Register</Nav.Link>
            </LinkContainer> {" "}
            </>)
          }
            
            <LinkContainer to='/cart'>
                <Nav.Link>Cart {cartState.cartItems.length}</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
};

export default NavBar;
