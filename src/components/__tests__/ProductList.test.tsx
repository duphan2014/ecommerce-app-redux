import { render, screen } from '@testing-library/react';
import ProductList from '../ProductList';
import React from 'react';

describe('ProductList tests', () =>{
    test('display list of products', () => {
        render(<ProductList />);
        const productNames = screen.getAllByRole('heading', { level: 2});
        expect(productNames).toHaveLength(3);
    });
})
