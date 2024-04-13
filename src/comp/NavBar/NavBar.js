import React, { useState } from 'react';
import './NavBar.css'

import { Navbar, Nav, Container, Button, Offcanvas, NavDropdown } from 'react-bootstrap';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';



const AppNavbar = () => {
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  return (
    <>
      {/* Large Screen Navbar */}
      <Navbar expand="lg" className="d-none d-lg-block" >
        <Container>
          <Navbar.Brand href="#">N T</Navbar.Brand>

          

          <Navbar.Toggle aria-controls="navbar-nav" />
          <div className="search-bar">
      <input
        type="text"
        placeholder="Search..."
       
        className="search-input"
      />
      <button  className="search-button">
        <FontAwesomeIcon icon={faSearch} className="search-icon" />
      </button>
    </div>

          

          <Navbar.Collapse id="navbar-nav" >



            <Nav className="ms-auto">
              
            <NavDropdown title="Language" id="basic-nav-dropdown">
                <NavDropdown.Item href="#">English</NavDropdown.Item>
                <NavDropdown.Item href="#">Malayalam</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Country" id="basic-nav-dropdown">
                <NavDropdown.Item href="#">India</NavDropdown.Item>
                <NavDropdown.Item href="#">USA</NavDropdown.Item>
                <NavDropdown.Item href="#">German</NavDropdown.Item>
                <NavDropdown.Item href="#">UK</NavDropdown.Item>
                <NavDropdown.Item href="#">Italiy</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Date" id="basic-nav-dropdown">
                <NavDropdown.Item href="#">Yesterday</NavDropdown.Item>
                <NavDropdown.Item href="#">Choose Date</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="User" id="basic-nav-dropdown">
                <NavDropdown.Item href="#">Sign-up</NavDropdown.Item>
                <hr></hr>
                <NavDropdown.Item href="#">Sign-in</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Mobile Screen Offcanvas Navbar */}
      <Navbar  className="d-lg-none" >
        <Container>
          <Navbar.Brand href="#">N T</Navbar.Brand>

          <div className="search-bar">
      <input
        type="text"
        placeholder="Search..."
       
        className="search-input"
      />
      <button  className="search-button">
        <FontAwesomeIcon icon={faSearch} className="search-icon" />
      </button>
    </div>


          <Button variant="outline-dark" onClick={() => setShowOffcanvas(!showOffcanvas)}>
            ☰
          </Button>
        </Container>
        <Offcanvas show={showOffcanvas} onHide={() => setShowOffcanvas(false)} backdropTransition={false}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Menu</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="flex-column">

              <NavDropdown title="Language" id="mobile-login-dropdown">
                <NavDropdown.Item href="#" onClick={() => setShowOffcanvas(false)}>
                  English
                </NavDropdown.Item>
                <NavDropdown.Item href="#" onClick={() => setShowOffcanvas(false)}>
                  Malayalam
                </NavDropdown.Item>
              </NavDropdown>

            <NavDropdown title="Country" id="mobile-login-dropdown">
                <NavDropdown.Item href="#" onClick={() => setShowOffcanvas(false)}>
                  India
                </NavDropdown.Item>
                <NavDropdown.Item href="#" onClick={() => setShowOffcanvas(false)}>
                  USA
                </NavDropdown.Item>
                <NavDropdown.Item href="#" onClick={() => setShowOffcanvas(false)}>
                  Geman
                </NavDropdown.Item>
                <NavDropdown.Item href="#" onClick={() => setShowOffcanvas(false)}>
                  UK
                </NavDropdown.Item>
                <NavDropdown.Item href="#" onClick={() => setShowOffcanvas(false)}>
                  Italiy
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Date" id="mobile-login-dropdown">
                <NavDropdown.Item href="#" onClick={() => setShowOffcanvas(false)}>
                  Yesterday
                </NavDropdown.Item>
                <NavDropdown.Item href="#" onClick={() => setShowOffcanvas(false)}>
                  Choose Date
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="User" id="mobile-login-dropdown">
                <NavDropdown.Item href="#" onClick={() => setShowOffcanvas(false)}>
                  Sign-up
                </NavDropdown.Item>
                <NavDropdown.Item href="#" onClick={() => setShowOffcanvas(false)}>
                 Sign-in
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Offcanvas.Body>
        </Offcanvas>
      </Navbar>


{/*catgory */}

<Container className="cat" >
     
<Nav fill variant="tabs" defaultActiveKey="/" className="mx-auto" style={{ backgroundColor: '' ,color:"red"}}>
      <Nav.Item>
        <Nav.Link href="/home" style={{ color: 'green' }} active>Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1" style={{ color: 'green' }}>Business</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2" style={{ color: 'green' }}>Health</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-3" style={{ color: 'green' }}>
          More
        </Nav.Link>
      </Nav.Item>
    </Nav>
    </Container>

    </>
  );
};

export default AppNavbar;
