import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Container, Row, Col, Navbar } from 'react-bootstrap';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HeroBanner } from './components/HeroBanner';
import { ProductCard } from './components/ProductCard';
import { product } from './data';

function App() {
  return (
    <div>
      <Header></Header>
      
      <div className='content'>
        <HeroBanner></HeroBanner>
        <div className='body'>
          <Row>
            {product.map((item, index) => (
              <Col md={4} key={index}>
                <ProductCard product={item} />
              </Col>
            ))}
          </Row>
        </div>

        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
