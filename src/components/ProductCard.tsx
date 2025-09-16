export default function ProductCard({ productData }) {
  return (
    <div>
      <ul>
        <li>{productData.imgSrc}</li>
        <li>{productData.name}</li>
        <li>{productData.author}</li>
        <li>{productData.description}</li>
        <li>add to cart button</li>
        <li>like button</li>
        <li>- full or empty heart emoji</li>
        <li>product features list</li>
      </ul>
    </div>
  );
}
