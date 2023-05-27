import React from 'react';
import { Navbar, Sidebar, Footer } from './components';
import { Outlet } from 'react-router-dom';

// index.jsx를 통해 파일을 조금 더 깔끔하게 관리함, 직접 컴포넌트 파일로 바로 연결안해도됨.(인덱스
function App() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
