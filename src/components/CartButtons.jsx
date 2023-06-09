import React from 'react';
import { FaShoppingCart, FaUserMinus, FaUserPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useProductsContext } from '../context/products_context';
import { useCartContext } from '../context/cart_context';
import { useUserContext } from '../context/user_context';

const CartButtons = () => {
  const { closeSidebar } = useProductsContext();
  const { total_items } = useCartContext();
  const { loginWithRedirect, myUser, logout } = useUserContext();
  return (
    <Wrapper className='cart-btn-wrapper'>
      <Link to='/cart' className='cart-btn' onClick={closeSidebar}>
        Cart
        <span className='cart-container'>
          <FaShoppingCart />
          <span className='cart-value'>{total_items}</span>
        </span>
      </Link>
      {!myUser ? (
        <button
          type='button'
          className='auth-btn'
          onClick={() => loginWithRedirect()}
        >
          Login <FaUserPlus />
        </button>
      ) : (
        <div className='user-info'>
          <div className='user-container'>
            <img className='user-img' src={myUser.picture} alt='User' />
            <div className='user-name'>{myUser.name}</div>
          </div>
          <button
            type='button'
            className='auth-btn'
            onClick={() => logout({ returnTo: window.location.origin })}
          >
            Logout <FaUserMinus />
          </button>
        </div>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  width: 400px;

  .cart-btn {
    color: var(--clr-grey-1);
    font-size: 1.5rem;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-1);
    display: flex;

    align-items: center;
  }
  .cart-container {
    display: flex;
    align-items: center;
    position: relative;
    svg {
      height: 1.6rem;
      margin-left: 5px;
    }
  }
  .cart-value {
    position: absolute;
    top: -10px;
    right: -16px;
    background: var(--clr-primary-4);
    width: 16px;
    height: 16px;
    display: flex;
    // 숫자 가운데 정렬
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-size: 0.75rem;
    color: var(--clr-white);
    padding: 12px;
  }
  .auth-btn {
    display: flex;
    align-items: center;
    background: transparent;
    border-color: transparent;
    margin-left: 30px;
    font-size: 1.5rem;
    cursor: pointer;
    color: var(--clr-grey-1);
    letter-spacing: var(--spacing);
    svg {
      margin-left: 5px;
    }
  }

  .user-info {
    display: flex;
    align-items: center;
    flex-direction: row;
  }

  .user-container {
    display: flex;
    flex-direction: row;
    margin: 0 30px;
    align-items: center;
  }
  .user-img {
    width: 40px;
    height: 40px;
    margin-right: 5px;
    border: 1px solid transparent;
    border-radius: 50%;
  }

  .user-name {
    flex-shrink: 0;
    font-size: 1.5rem;
    color: var(--clr-grey-1);
    letter-spacing: var(--spacing);
  }
`;
export default CartButtons;
