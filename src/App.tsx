// import image from '/image.jpg'; // in public folder
import Layout from './components/Layout';
import ProductCard from './components/ProductCard';

import productData from './data/productData';

function App() {
  return (
    <Layout>
      <h2>Products List</h2>
      <ul>
        {productData.map((item) => (
          <ProductCard productData={item} />
        ))}
      </ul>
    </Layout>
  );
}

export default App;
