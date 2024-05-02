// layout.js
import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Routers from '../routes/Routers.jsx';  // Make sure this path is correct

const Layout = () => {
  return (
    <div>
      <Header/>
      <main>
        <Routers/>
      </main>
      <Footer/>
    </div>
  )
}

export default Layout;
