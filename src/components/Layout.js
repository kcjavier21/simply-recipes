import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import 'normalize.css';
import '../assets/css/main.css';
import '../assets/css/all.min.css';
import '../assets/css/fontawesome.min.css';

const Layout = (props) => {
    return (
        <>
            <Navbar/>    
                {props.children} {/*<-- Contents of the page that are wrapped */}
            <Footer/>
        </>
    )
}

export default Layout
