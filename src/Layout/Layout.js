import React from 'react'
import Header from './Header';
import Footer from './footer';
import{Helmet} from "react-helmet";

const Layout = ({children,title}) => {
  return (
    <div>
      <Helmet>
  <meta charSet='utf8'/>
  <title>{title}</title>
</Helmet>
        <Header/>
        <main style={{minHeight:"100vh"}}>
       
        {children}
        </main>
        <Footer/>
    </div>
  );
};

export default Layout;