
import {ListGroup,Button,Form,
  Nav,Navbar,NavDropdown,
  InputGroup,Dropdown,Container,
  Row,Col,Spinner
} from 'react-bootstrap';

import'./Header.css'
import { useState , useEffect } from 'react';
import { RiSearchLine } from "react-icons/ri";



const Header = () => {
// console.log(categoryData)
  const [show, setShow] = useState(false);
  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
  const [category , setCategory] = useState([])

  useEffect(() => {
      const fetchData = async () => {
          try{
              const response = await fetch('https://dummyjson.com/products/categories');
              const jsonData = await response.json();
              setCategory( jsonData);
          }
          catch(error){
              console.log(error.message)
              console.log(error.code)
          }  
      }
      fetchData();
  },[])

  return (
    <>
      {/* firstHeadpart */}
      <Container fluid className="bg-body-tertiary">
          <Navbar.Brand href="#" className='firstHeaderCustomClass'>
          <div className="_7ac171fb">
            <div className="ac22b0e1">
              <a href="#" className="_5afdd59e d19dc9be ">
                <svg
                  height={20}
                  viewBox="0 0 36.289 20.768"
                  alt="Logo"
                  className="_10c831ef"
                >
                  <path d="M18.9 20.77V0h4.93v20.77zM0 10.39a8.56 8.56 0 1 1 8.56 8.56A8.56 8.56 0 0 1 0 10.4zm5.97-.01a2.6 2.6 0 1 0 2.6-2.6 2.6 2.6 0 0 0-2.6 2.6zm27 5.2l-1.88-1.87-1.87 1.88H25.9V12.3l1.9-1.9-1.9-1.89V5.18h3.27l1.92 1.92 1.93-1.92h3.27v3.33l-1.9 1.9 1.9 1.9v3.27z" />
                </svg>
              </a>
            </div>
            <a href="#" className="ac22b0e1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="88.9"
                height={33}
                alt="OLX Motors"
                className="_1a6eed8f"
              >
                <defs>
                  <linearGradient
                    id="a"
                    x1=".5"
                    x2=".5"
                    y2={1}
                    gradientUnits="objectBoundingBox"
                  >
                    <stop offset={0} stopColor="#ddd" />
                    <stop offset={1} stopColor="#fff" />
                  </linearGradient>
                </defs>
                <path
                  stroke="rgba(0,0,0,0)"
                  d="M40 20.5h1v-6.2l3 6.2h.6l2.8-6.2v6.2h1v-8.3h-1L44.1 19l-3-6.8H40zm18.3-4.2A4.1 4.1 0 0 0 54 12a4.1 4.1 0 0 0-4.2 4.3 4.1 4.1 0 0 0 4.2 4.3 4.1 4.1 0 0 0 4.2-4.3zm-7.3 0a3 3 0 0 1 3-3.3 3 3 0 0 1 3.2 3.3 3 3 0 0 1-3 3.3 3 3 0 0 1-3.2-3.3zm8.2-3.3h2.3v7.5h1V13H65v-1h-5.7zm15 3.3A4.1 4.1 0 0 0 70 12a4.1 4.1 0 0 0-4.2 4.3 4.1 4.1 0 0 0 4.2 4.3 4.1 4.1 0 0 0 4.2-4.3zm-7.2 0a3 3 0 0 1 3-3.3 3 3 0 0 1 3 3.3 3 3 0 0 1-3 3.3 3 3 0 0 1-3-3.3zm13.2-1.7c0 1-.6 1.6-1.8 1.6h-1.6V13h1.6c1.2 0 1.8.6 1.8 1.6zM75.7 12v8.4h1V17H78l2 3.4h1.3l-2-3.5a2.4 2.4 0 0 0 2-2.4c0-1.4-1-2.5-3-2.5zm12.7 6c0-3-4.5-1.7-4.5-3.8 0-1 .7-1.4 1.6-1.4a1.5 1.5 0 0 1 1.6 1.2h1.2a2.5 2.5 0 0 0-2.7-2.1c-1.7 0-2.8 1-2.8 2.3 0 3 4.5 1.7 4.5 4 0 .7-.6 1.3-1.7 1.3a1.5 1.5 0 0 1-1.7-1.4h-1.2c0 1.4 1.3 2.4 3 2.4a2.5 2.5 0 0 0 2.7-2.4z"
                />
                <path
                  fill="url(#a)"
                  d="M0 16.5a16.5 16.5 0 1 1 33 0 16.5 16.5 0 0 1-33 0z"
                  opacity=".6"
                />
                <path d="M24.7 13.5a1.1 1.1 0 0 0-1.4-.7l-.6.2-1-2.2-.4-.1a16 16 0 0 0-4.8-.7 12 12 0 0 0-4.3.7l-.3.1-1 2.3h-.5a1.1 1.1 0 0 0-.6 2v.2a4 4 0 0 0-.4 1.5v4a2.1 2.1 0 0 0 0 .6.7.7 0 0 0 .8.5h1.6a.7.7 0 0 0 .8-.5 2.1 2.1 0 0 0 0-.7v-.3a47.1 47.1 0 0 0 8.3 0v.3a2.1 2.1 0 0 0 0 .7.7.7 0 0 0 .8.5h1.6a.7.7 0 0 0 .7-.5 2.1 2.1 0 0 0 .1-.7v-4a3.7 3.7 0 0 0-.4-1.5V15h.3a1.1 1.1 0 0 0 .7-1.5zm-12.2-2.1a11.3 11.3 0 0 1 4-.6 15.2 15.2 0 0 1 4.6.6l.9 1.8a17.6 17.6 0 0 1-4.3.4H17a28.2 28.2 0 0 1-5.4-.3zm-.6 9.3a2.2 2.2 0 0 1 0 .4h-1.7a2.2 2.2 0 0 1 0-.4V20a1 1 0 0 0 .3 0l1.4.2v.4zm11.4 0a2.2 2.2 0 0 1 0 .4h-1.6a2.2 2.2 0 0 1 0-.4v-.4H23a1 1 0 0 0 .4-.2zm.5-6.5l-1.2.4.5 1a3 3 0 0 1 .3 1.2V18l-.1.7c0 .3-.2.7-.5.7-3 .3-4.5.5-6 .5s-3-.2-6.2-.5c-.2 0-.3-.3-.4-.6V18a17 17 0 0 1 0-1 3.2 3.2 0 0 1 .3-1.3l.5-1-1-.2a.3.3 0 0 1-.2-.4.3.3 0 0 1 .4-.3l1.1.4a23.6 23.6 0 0 0 5 .3h1.4a17.9 17.9 0 0 0 4.6-.5h.3l1-.4a.3.3 0 0 1 .4.3.3.3 0 0 1-.2.4z" />
                <path d="M12 16a1.2 1.2 0 1 0 1.1 1.2A1.2 1.2 0 0 0 12 16zm0 1.6a.4.4 0 1 1 .3-.4.4.4 0 0 1-.4.4zm9.6-1.6a1.2 1.2 0 1 0 1.2 1.2 1.2 1.2 0 0 0-1.2-1.2zm0 1.6a.4.4 0 1 1 .5-.4.4.4 0 0 1-.5.4zm-7.8.2h6v.8h-6z" />
              </svg>
            </a>
            <a href="#" className="ac22b0e1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="97.25"
                height={33}
                alt="OLX Property"
                className="_1a6eed8f"
              >
                <defs>
                  <linearGradient
                    id="a"
                    x1=".5"
                    x2=".5"
                    y2={1}
                    gradientUnits="objectBoundingBox"
                  >
                    <stop offset={0} stopColor="#ddd" />
                    <stop offset={1} stopColor="#fff" />
                  </linearGradient>
                </defs>
                <path
                  stroke="rgba(0,0,0,0)"
                  d="M41.1 16.64v-3.07h1.6c1.25 0 1.78.58 1.78 1.55 0 .94-.53 1.52-1.78 1.52zm4.5-1.52c0-1.37-.93-2.45-2.9-2.45H40v8.36h1.1v-3.49h1.6c2.08 0 2.9-1.15 2.9-2.42zm5.82.01c0 .94-.54 1.6-1.77 1.6h-1.6v-3.16h1.6c1.25 0 1.77.61 1.77 1.57zm-4.47-2.46v8.36h1.1v-3.42h1.31l2 3.42h1.3l-2.1-3.5a2.36 2.36 0 0 0 2-2.4c0-1.36-.94-2.45-2.9-2.45zm15.3 4.18a4.12 4.12 0 0 0-4.2-4.28 4.13 4.13 0 0 0-4.2 4.28 4.13 4.13 0 0 0 4.2 4.27 4.12 4.12 0 0 0 4.2-4.27zm-7.3 0a3.05 3.05 0 0 1 3.1-3.33 3.05 3.05 0 0 1 3.07 3.33 3.06 3.06 0 0 1-3.08 3.32 3.06 3.06 0 0 1-3.09-3.32zm9.82-.2v-3.08h1.6c1.25 0 1.78.58 1.78 1.55 0 .94-.53 1.52-1.77 1.52zm4.5-1.53c0-1.36-.93-2.44-2.9-2.44h-2.7v8.35h1.1v-3.49h1.6c2.08 0 2.9-1.15 2.9-2.42zm5.85-2.46h-4.5v8.37h4.5v-.9h-3.4v-2.88h3.04v-.9h-3.04v-2.8h3.4zm6.14 2.48c0 .93-.54 1.6-1.78 1.6h-1.6v-3.17h1.6c1.25 0 1.78.61 1.78 1.57zm-4.48-2.47v8.36h1.1v-3.42h1.32l1.98 3.42h1.3l-2.1-3.5a2.36 2.36 0 0 0 2-2.4c0-1.36-.94-2.45-2.9-2.45zm6.78.9h2.29v7.46h1.1v-7.47h2.27v-.89h-5.66zm9.04 4.3v3.16h1.1v-3.15l2.72-5.2h-1.2l-2.07 4.23-2.07-4.24h-1.2z"
                />
                <path
                  fill="url(#a)"
                  d="M0 16.5a16.5 16.5 0 1 1 33 0 16.5 16.5 0 0 1-33 0z"
                  opacity=".57"
                />
                <path d="M25.03 21.92v-9.35l-4.99-1.66v1.05l4 1.33v8.59h-5V7.85h-8.38v14.08h-.4v1h15.17v-1zm-6.98-11.68v11.68h-6.4V8.84h6.4z" />
                <path d="M15.17 10.3h1.61v.8h-1.6zm-2.42 0h1.6v.8h-1.6zm2.42 1.6h1.61v.81h-1.6zm-2.42 0h1.6v.81h-1.6zm2.42 2.42h1.61v.81h-1.6zm-2.42 0h1.6v.81h-1.6zm2.42 1.62h1.61v.8h-1.6zm-2.42 0h1.6v.8h-1.6zm2.42 2.42h1.61v.8h-1.6zm-2.42 0h1.6v.8h-1.6zm8.87-4.04h.8v.81h-.8zm-1.62 0h.8v.81H20zm1.62 1.62h.8v.8h-.8zm-1.62 0h.8v.8H20zm1.62 2.42h.8v.8h-.8zm-1.62 0h.8v.8H20z" />
              </svg>
            </a>
          </div>
          </Navbar.Brand>
      </Container>


      {/* secondHeadPart */}
       <Navbar expand="lg" className="bg-body-tertiary" sticky="top" >
        <Container fluid>

          <Navbar.Brand href="#">
            <div className="OlxLogoContainer">
              <a href="#" className="olxLogo_2">
                <svg
                  height={40}
                  viewBox="0 0 36.289 20.768"
                  alt="Logo"
                  className="b28a1eb6"
                >
                  <path d="M18.9 20.77V0h4.93v20.77zM0 10.39a8.56 8.56 0 1 1 8.56 8.56A8.56 8.56 0 0 1 0 10.4zm5.97-.01a2.6 2.6 0 1 0 2.6-2.6 2.6 2.6 0 0 0-2.6 2.6zm27 5.2l-1.88-1.87-1.87 1.88H25.9V12.3l1.9-1.9-1.9-1.89V5.18h3.27l1.92 1.92 1.93-1.92h3.27v3.33l-1.9 1.9 1.9 1.9v3.27z" />
                </svg>
              </a>
            </div>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbarScroll"className='hambergMenu'/>
          <Navbar.Collapse id="navbarScroll" >
              <ListGroup className='ListGroup'>
                      <ListGroup.Item>Start Selling</ListGroup.Item>
                      <ListGroup.Item>My Adds</ListGroup.Item>
                      <ListGroup.Item>Favourite & Save Searches</ListGroup.Item>
                      <ListGroup.Item>But Bussiness Packages</ListGroup.Item>
                      <ListGroup.Item>Bought Packages & Billing</ListGroup.Item>
                      <ListGroup.Item>Chat</ListGroup.Item>
                      <ListGroup.Item>Notifications</ListGroup.Item>
                      <ListGroup.Item>Help</ListGroup.Item>
                      <ListGroup.Item>Settings</ListGroup.Item>
                      <ListGroup.Item>Logout</ListGroup.Item>
                      
              </ListGroup>

            <Form className="FormCustom d-flex me-3 ">
              
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2 insideForm"
                aria-label="Search"
              />

              <Nav className='dropDownClass'>
                <NavDropdown
                  id="nav-dropdown-dark-example"
                  placeholder="Search"
                  // menuVariant="dark"
                >
                    
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>

              </Nav>
              

            </Form>

          </Navbar.Collapse>

          <InputGroup className="inputSearch">
            
            <Form.Control
              aria-label="Example text with button addon"
              aria-describedby="basic-addon1"
              placeholder='Find Cars , Mobiles , Phones and mores...'
            />
            <Button variant="outline-secondary" id="button-addon1">
              <RiSearchLine className='searchIcon' />
            </Button>
          </InputGroup>

          <div className='linksContainer'>
            <a href="#" className='Link '>Login</a>
            <button type="button" className='saleBtn'>SELL</button>
          </div>

        </Container>
      </Navbar>

      {/* Sub Menu Third part */}
      <Nav defaultActiveKey="/home" as="ul">
        <Nav.Item as="li">
          <Nav.Link href="/home" className='navLinksCustom'>All Categories</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Dropdown>
            <Dropdown.Toggle variant="" id="dropdown-basic">
            </Dropdown.Toggle>

            <Dropdown.Menu className='dropDownMenu'>
                  {category.length > 0 ? (
                     <Container>
                     <Row className='mt-5 mb-6 row'>
                         {category.map((data, index) => (
                             <Col key={index}>
                                 <Dropdown.Item href={`#/action-${index + 1}`}>{data}</Dropdown.Item>
                             </Col>
                         ))}
                     </Row>
                 </Container>
                  ) : (
                   <div className='dropDownLoader'>
                    <Spinner animation="grow" variant="secondary" />
                   </div>


                  )}
            </Dropdown.Menu>
            
          </Dropdown>
        </Nav.Item>



        <Nav.Item as="li">
          <Nav.Link eventKey="link-1" className='navLinksCustom'>Mobile Phones</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link eventKey="link-2" className='navLinksCustom' >Cars</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link eventKey="link-3 " className='navLinksCustom'>Motorcycles
        </Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link eventKey="link-4" className='navLinksCustom'>Houses
        </Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link eventKey="link-5" className='navLinksCustom'>Video-Audios
        </Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link eventKey="link-6" className='navLinksCustom'>Tablets
        </Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link eventKey="link-7" className='navLinksCustom'>Land & Plots
        </Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  )
  
};

export default Header;
