import React from 'react';
import { Nav, Navbar, Container, NavDropdown } from 'react-bootstrap';
import Cookies from 'universal-cookie';
import routes from "../routes";
import { useNavigate  } from 'react-router-dom'
const NavigationBar = () =>{
  const cookies = new Cookies();
  const navigate = useNavigate();

  const handelLogout = () => {
    cookies.remove('token', { path: '/' });
    navigate(routes.login)
  }

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href={routes.home}>RV Admin Panel</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
              </Nav>
              <Nav>
              <Nav.Link href={routes.my_account}>
                    My Account
                    </Nav.Link>
              <NavDropdown title="Authorize" id="collasible-nav-dropdown">
                  <NavDropdown.Item href={routes.login}>
                    Sign in
                  </NavDropdown.Item>
                  <NavDropdown.Item href={routes.register}>
                    Sign up
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item onClick={handelLogout}>
                    Log out
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
}
export default NavigationBar;