import React from 'react';
import BaseProductPage from '../../components/shared/BaseProductPage';

const NetballDressPage: React.FC = () => (
  <BaseProductPage
    title="Netball Dresses"
    description="Professional netball dresses designed for maximum comfort and mobility"
    heroImage="https://images.pexels.com/photos/8007513/pexels-photo-8007513.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2"
    fabricSpecs={[
      'Durable performance blend',
      'Lightweight & breathable',
      'Reinforced seams for durability',
      'Sweat-resistant finish',
      'Designed for active use'
    ]}
    sizes={{
      youth: ['6-8', '10-12', '14-16'],
      adult: ['XS - XL', '2XL - 3XL', '4XL - 5XL']
    }}
    colors={[
      { name: 'navy', hex: '#000080' },
      { name: 'black', hex: '#000000' },
      { name: 'white', hex: '#FFFFFF' },
      { name: 'red', hex: '#FF0000' },
      { name: 'green', hex: '#008000' },
      { name: 'royal', hex: '#4169E1' }
    ]}
  />
);

export default NetballDressPage;