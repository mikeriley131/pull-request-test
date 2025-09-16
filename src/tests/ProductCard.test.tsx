import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import ProductCard from '../components/ProductCard';

describe('ProductCard', () => {
  it('renders', () => {
    render(
      <ProductCard
        productData={{
          name: 'Test Product',
          description: 'This is a test product',
          author: 'Some Author',
          imgSrc: '/test.png',
          features: ['one', 'two', 'three'],
        }}
      />,
    );

    expect(screen.getByText('Test Product')).toBeTruthy();

    expect(document.body.innerHTML).toMatchSnapshot();
  });

  it('likes product when clicked', () => {
    render(
      <ProductCard
        productData={{
          name: 'Another Product',
          description: 'Desc',
          imgSrc: '/test2.png',
          features: ['x'],
          author: 'Some Author',
        }}
      />,
    );

    fireEvent.click(screen.getByText('Another Product'));
    expect(screen.getByText('❤️')).toBeTruthy();
  });

  it('adds to cart', async () => {
    render(
      <ProductCard
        productData={{
          name: 'Cart Product',
          author: 'Some Author',
          description: 'Cart Desc',
          imgSrc: '/cart.png',
          features: [],
        }}
      />,
    );

    fireEvent.click(screen.getByText('Add'));
  });

  it('renders three features for each card', () => {
    const product = {
      name: 'Feature Product',
      author: 'Some Author',
      description: 'Desc',
      imgSrc: '/feature.png',
      features: ['feature1', 'feature2', 'feature3'],
    };

    render(<ProductCard productData={product} />);

    expect(screen.getByText('feature2')).toBeTruthy();
  });
});
