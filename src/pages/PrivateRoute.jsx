import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
// will remove later
// import { useUserContext } from '../context/user_context';

// 위에께 rest operator, 아래께 spreadOperator
// ...rest(index.js에서 정의한 reaquireAdmin: true가 나옴)
const PrivateRoute = ({ children, ...rest }) => {
  const { user } = useAuth0();
  console.log(user);
  if (!user) {
    // replace는 뒤로가기를 하더라도, 방금의 페이지로 못돌아오게 함.
    return <Navigate to='/' replace={true} />;
  }
  return children;
};
export default PrivateRoute;
