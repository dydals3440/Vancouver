import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Navbar, Sidebar } from '../components';
const ErrorPage = () => {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Wrapper className='page-100'>
        <section>
          <h1>404</h1>
          <h3>
            죄송합니다. <br />
            현재 접근이 불가능한 페이지를 요청하셨습니다.
          </h3>
          <Link to='/' className='btn'>
            홈페이지로 돌아가기
          </Link>
        </section>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.main`
  background: var(--clr-primary-10);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  h1 {
    font-size: 10rem;
  }
  h3 {
    text-transform: none;
    margin-bottom: 2rem;
  }
`;

export default ErrorPage;
