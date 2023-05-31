import React from 'react';
import styled from 'styled-components';
import { useCartContext } from '../context/cart_context';
import { Link } from 'react-router-dom';
import { CartContent, PageHero } from '../components';

const CartPage = () => {
  const { cart } = useCartContext();
  if (cart.length < 1) {
    return (
      <Wrapper className='page-100'>
        <div className='empty'>
          <h2>장바구니에 어떠한 물품도 존재하지 않습니다.</h2>
          <Link to='/products' className='btn'>
            쇼핑하기
          </Link>
        </div>
      </Wrapper>
    );
  }
  return (
    <main>
      <PageHero title='cart' />
      <Wrapper className='page'>
        <CartContent />
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.main`
  .empty {
    text-align: center;
    h2 {
      margin-bottom: 1rem;
      text-transform: none;
    }
  }
`;

export default CartPage;
