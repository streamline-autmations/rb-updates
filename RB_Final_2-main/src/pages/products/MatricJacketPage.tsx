import React from 'react';
import BaseProductPage from '../../components/shared/BaseProductPage';

const MatricJacketPage: React.FC = () => (
  <BaseProductPage
    title="Matric Jackets"
    description="Premium matric jackets designed to celebrate your achievements in style"
    heroImage="https://images.pexels.com/photos/8112199/pexels-photo-8112199.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2"
    fabricSpecs={[
      'Durable performance blend',
      'Lightweight & breathable',
      'Reinforced seams for durability',
      'Sweat-resistant finish',
      'Designed for active use'
    ]}
    sizes={{
      regular: ['XS - XL', '2XL - 3XL', '4XL - 5XL'],
      slim: ['XS - XL', '2XL - 3XL']
    }}
    colors={[
      { name: 'navy', hex: '#000080' },
      { name: 'black', hex: '#000000' },
      { name: 'maroon', hex: '#800000' },
      { name: 'forest', hex: '#228B22' },
      { name: 'royal', hex: '#4169E1' },
      { name: 'purple', hex: '#800080' }
    ]}
  />
);

export default MatricJacketPage;