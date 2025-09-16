import Layout from './components/Layout';
import ProductCard from './components/ProductCard';

import productData from './data/productData';

function App() {
  return (
    <Layout>
      <h2>Products List</h2>
      <ul className="product-list" aria-label="Product List">
        {productData.map((item) => (
          <ProductCard productData={item} />
        ))}
      </ul>
    </Layout>
  );
}

export default App;
