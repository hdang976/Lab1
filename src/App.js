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
      <HeroBanner></HeroBanner>
        <div>
          <div className="container">
            {product.map((product, index) => (
              <ProductCard key={index} product={product}></ProductCard>
            ))}
          </div>
        </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
