import React from 'react';
import { useFilterContext } from '../context/filter_context';
import GridView from './GridView';
import ListView from './ListView';

const ProductList = () => {
  const { filtered_products: products, grid_view } = useFilterContext();
  if (products.length < 1) {
    return (
      <h5 style={{ textTransform: 'none' }}>
        죄송합니다, 당신의 검색 내용과 일치하는 제품이 없습니다.
      </h5>
    );
  }
  if (grid_view === false) {
    return <ListView products={products}>{products}</ListView>;
  }
  return <GridView products={products}>{products}</GridView>;
};

export default ProductList;
