import React, {memo, useState} from 'react';
import Header from "../../components/header/header";
import CarouselOwl from "../../components/carouselOwl/CarouselOwl";
import DownloadApp from "../../components/downloadApp/DownloadApp";
import Footer from "../../components/footer/Footer";
import './payment.css'

const Payment = () => {
    const [open, setOpen] = useState(false)
    const onchangeFunc = (e) => {
        console.log(e.target.value)
        if (e.target.value === '') {
            setOpen(true)
        }
    }
    return (
        <>
            <Header/>
            {/*<FirstPage/>*/}
            {/*main qismi*/}
            {/*<Main />*/}
            <div className="container my-4 ">
                <div className="row d-flex justify-content-center">
                    <div className="card col-lg-4 col-md-8 col-sm-12  mb-3 shadow" style={{padding: '30px'}}>
                        <h1>Оплата заказа</h1>
                        <p>Внимательно введите номер вашего заказа</p>
                        <p>Номер заказа*</p>
                        <input type="text" className={`form form-control mb-3 ${open? 'border-danger':''} shadow-none`} onMouseOut={(e) => onchangeFunc(e)}/>
                        {open ? <span className={'mb-3 text-danger'}>Необходимо заполнить «Номер заказа».</span> : ''}
                        <div className="row ">
                            <div className="col-lg-4">
                                <button className={'btn  position-relative btnCard'}><span>Подтвердить</span></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/*<About />*/}
            <CarouselOwl/>
            <DownloadApp/>
            <Footer/>
        </>
    );
};

export default memo(Payment);