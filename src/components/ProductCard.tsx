import React, { useState } from 'react';
import _ from 'lodash';

type Props = {
  productData: any;
};

export default function ProductCard({ productData }: Props) {
  const [liked, setLiked] = useState(false);

  function handleClick() {
    setLiked(!liked);
    console.log('clicked');
  }

  return (
    <div className="product-card" onClick={handleClick}>
      <img src={productData.imgSrc} />
      <h2>{productData.name}</h2>
      <h5>{productData.author}</h5>
      <p>{productData.description}</p>
      <ul className="aligned-list">
        {productData.features.map((f: any, i: number) => (
          <li key={i}>{f}</li>
        ))}
      </ul>
      <button onClick={() => alert('Added to cart!')}>Add</button>
      <div>{liked ? '❤️' : '♡'}</div>
    </div>
  );
}
