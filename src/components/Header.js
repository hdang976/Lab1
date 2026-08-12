import { Container, Row, Col, Navbar } from 'react-bootstrap';
import { CgShoppingCart } from 'react-icons/cg';

export function Header() {
    return (
    <div className="App">
      <Navbar className='navbar fixed-top bg-white'>
        <Container>
          <Row>
            <Col md={3}>
              <div className='navbar-left'>
                <img style={{ width: '70%' }} className='logo' src="/images/logo.jpg"></img>
              </div>
            </Col>

            <Col md={6}>
              <div className='navbar-center'>
                <a href='#Home'>Home</a>
                <a href='#Products'>Products</a>
                <a href='#Men'>Men</a>
                <a href='#Women'>Women</a>
                <a href='#Contact'>Contact</a>
              </div>
            </Col>

            <Col md={3}>
              <div className='navbar-right'>
                <div className='cart-icon'>
                    <CgShoppingCart></CgShoppingCart>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Navbar>
    </div>
  );
}