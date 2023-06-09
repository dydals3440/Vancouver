import React from 'react';
import styled from 'styled-components';
import { useCartContext } from '../context/cart_context';
import { useUserContext } from '../context/user_context';
import { formatPrice } from '../utils/helpers';
import { Link } from 'react-router-dom';

const CartTotals = () => {
  const { total_amount, shipping_fee } = useCartContext();
  // User login여부, 또한, 사용자가 없다면 바로 로그인 옵션으로 리다이렉트 시킬것이기 때문에 loginWithRedirect 함수도 필요!
  const { myUser, loginWithRedirect } = useUserContext();
  return (
    <Wrapper>
      <div>
        <article>
          <h5>
            합계 : <span>{formatPrice(total_amount)}</span>
          </h5>
          <p>
            배송비 : <span>{formatPrice(shipping_fee)}</span>
          </p>
          <h4>
            총 금액 : <span>{formatPrice(total_amount + shipping_fee)}</span>
          </h4>
        </article>
        {myUser ? (
          <Link to='/checkout' className='btn'>
            결제하로 가기
          </Link>
        ) : (
          <button type='button' className='btn' onClick={loginWithRedirect}>
            로그인
          </button>
        )}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-top: 3rem;
  display: flex;
  justify-content: center;
  article {
    border: 1px solid var(--clr-grey-8);
    border-radius: var(--radius);
    padding: 1.5rem 3rem;
  }
  h4,
  h5,
  p {
    display: grid;
    grid-template-columns: 200px 1fr;
  }
  p {
    text-transform: capitalize;
  }
  h4 {
    margin-top: 2rem;
  }
  @media (min-width: 776px) {
    justify-content: flex-end;
  }
  .btn {
    width: 100%;
    margin-top: 1rem;
    text-align: center;
    font-weight: 700;
  }
`;

export default CartTotals;
