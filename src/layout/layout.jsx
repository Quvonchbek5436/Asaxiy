import React from 'react';
import About from '../components/about/About';
import CarouselOwl from '../components/carouselOwl/CarouselOwl';
import DownloadApp from '../components/downloadApp/DownloadApp';
import Footer from '../components/footer/Footer';
import Header from "../components/header/header";
import Main from '../components/main/Main';
import FirstPage from "../components/firsPageCarosel/firstPage";

const Layout = () => {
    return (
        <>
            <Header />
            <FirstPage/>
            {/*main qismi*/}
            <Main />

            <About />
            <CarouselOwl />
            <DownloadApp />
            <Footer />
        </>
    );
};

export default Layout;