import React, {memo} from 'react';
import Header from "../../components/header/header";
import CarouselOwl from "../../components/carouselOwl/CarouselOwl";
import DownloadApp from "../../components/downloadApp/DownloadApp";
import Footer from "../../components/footer/Footer";
import './likes.css'
import {useSelector} from "react-redux";
import {removeLikes, setBasket} from "../../redux/actions/doing";

const Likes = () => {
    const InitialState=useSelector(state=>state.reducer)
    console.log(InitialState?.products)
    return (
        <>
            <Header/>
            <div className="container my-5">
                <div className="row">
                    <div className="col-12">
                        <h2 style={{fontSize:'28px'}}>Избранное</h2>
                    </div>
                    <div className="col-lg-12">
                        <div className="row">
                            {
                                InitialState?.products?.map((item, index)=>(
                                    item.isLike===true?
                                    <div key={index} className="col-lg-12 d-flex justify-content-between mb-4" style={{boxShadow: '0 1px 5px rgb(0, 0, 0,9%)',padding:'12px',borderRadius:'15px',background:'#fff'}}>
                                        <div className="d-flex gap-5">
                                            <div className="img" style={{padding:'10px',boxShadow: '0 10px 30px rgb(209, 213, 223 , 50%)',borderRadius:'15px'}}>
                                                <img width={100} height={100} src={item.image} alt=""/>
                                            </div>
                                            <div className="info">
                                                <h3 style={{fontSize:'20px'}}>{item.name}</h3>
                                            </div>
                                        </div>
                                        <div className="d-flex gap-5">
                                            <div className="price">
                                                <p className={'fw-bold m-0'} style={{fontSize:'18px'}}>{item.price} сум</p>
                                                <span className={'fw-bold'} style={{fontSize:'14px',color: 'rgba(0,0,0,.7)'}}>{item.twelveMonths} сум / 12 мес</span>
                                            </div>
                                            <div className="btns">
                                                <button className={'btn d-block default-btn position-relative mb-3'} style={{textAlign:'center',width:'100%',background:'#008dff',borderRadius:'10px',color:'white'}} onClick={()=>setBasket(item)}><span>Добавить в корзину</span></button>
                                                <button className={'btn d-block default-btn position-relative'} style={{textAlign:'center',width:'100%',background:'#fe7300',borderRadius:'10px',color:'white'}} onClick={()=>removeLikes(item.id)}><span>Удалить</span></button>
                                            </div>
                                        </div>
                                    </div>:''
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
            <CarouselOwl/>
            <DownloadApp/>
            <Footer/>

        </>
    );
};

export default memo(Likes);