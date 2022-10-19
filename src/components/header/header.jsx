import React, {memo, useEffect, useRef, useState} from 'react';
import {BsCreditCard, BsSuitHeart} from "react-icons/bs";
import {TbTruckDelivery} from "react-icons/tb";
import {SlBasketLoaded} from "react-icons/sl";
import {RiEarthFill} from "react-icons/ri";
import {FiMenu, FiSearch} from "react-icons/fi";
import {AiOutlineClose, AiOutlineUser} from "react-icons/ai";
import {GrClose} from "react-icons/gr";
import './header.css'
import {useSelector} from "react-redux";
import {removeBasket} from "../../redux/actions/doing";
import {useNavigate} from "react-router-dom";
import Books from "./books/Books";
import Phones from "./phones/Phones";

let data = [
    {
        imgSrc: "https://assets.asaxiy.uz/category//5e0158017e038.png",
        title: "Книги"
    },
    {
        imgSrc: "https://assets.asaxiy.uz/category//5e0153249b10a.png",
        title: "Телефоны и гаджеты"
    },
    {
        imgSrc: "https://assets.asaxiy.uz/category/air-conditioner.png",
        title: "Кондиционеры"
    },
    {
        imgSrc: "https://assets.asaxiy.uz/category//5e01560bef0bb.png",
        title: "Компьютеры и оргтехника"
    },
    {
        imgSrc: "https://assets.asaxiy.uz/category//5fd9fbdaec848.png",
        title: "Для геймеров"
    },
    {
        imgSrc: "https://assets.asaxiy.uz/category//5e0154abcfc0e.png",
        title: "Бытовая техника"
    },
    {
        imgSrc: "https://assets.asaxiy.uz/category//5e015729184f2.png",
        title: "Телевизоры, видео и аудио"
    },
    {
        imgSrc: "https://assets.asaxiy.uz/category//kitchen2.png",
        title: "Посуда"
    },
    {
        imgSrc: "https://assets.asaxiy.uz/category/wardrobe.png",
        title: "Мебель"
    },
    {
        imgSrc: "https://assets.asaxiy.uz/category//62be096a99c6d.jpeg",
        title: "Спорт и отдых"
    },
    {
        imgSrc: "https://assets.asaxiy.uz/category//5e0157aa83115.jpg",
        title: "Для дома и офиса"
    },
    {
        imgSrc: "https://assets.asaxiy.uz/category//5e01568229ad0.png",
        title: "Инструменты и автотовары"
    },
    {
        imgSrc: "https://assets.asaxiy.uz/category//5fb29e5f8b8a8.png",
        title: "Игрушки, подарки и аксессуары "
    },
    {
        imgSrc: "https://assets.asaxiy.uz/category//609532076b3e6.png",
        title: "Одежда, обувь и аксессуары"
    },
    {
        imgSrc: "https://assets.asaxiy.uz/category//611662dbc91da.png",
        title: "Детские товары "
    },
    {
        imgSrc: "https://assets.asaxiy.uz/category//62c55b4f2bbf2.png",
        title: "Красота и здоровье"
    },
];
const Header = () => {
    const InitialState = useSelector(state => state.reducer)
    const [openMenu, setOpenMenu] = useState(false)
    const [isLikeCount, setIsLikeCount] = useState(0)
    const [isBasketCount, setIsBasketCount] = useState(0)
    const [allPrice, setAllPrice] = useState(0)
    const keyListItems = useRef([]);

    const navigate = useNavigate()

    useEffect(() => {
        let arr = [], basketArr = [];
        InitialState.products.forEach((d) => {
            if (d.isLike === true) {
                arr.push(d)
            }
        })
        InitialState.leftProducts.forEach((d) => {
            if (d.isLike === true) {
                arr.push(d)
            }
        })
        let sum = 0;
        InitialState.basket.forEach((d) => {
            sum += parseInt(d.price.split(" ").join("")) * d.count;
            basketArr.push(d)
        })
        setAllPrice(sum)
        setIsBasketCount(InitialState.basket.length)
        setIsLikeCount(arr.length)
    }, [InitialState]);

    let clearFunction = (header_containers) => {
        header_containers.forEach(head => {
            if (head.classList.contains('show')) {
                head.classList.remove('show');
            }
        })
    }

    // hover <li> elements
    useEffect(() => {
        let header_containers = document.querySelectorAll('.header_container');
        keyListItems.current.forEach((li, index) => {
            li.addEventListener('mouseover', () => {
                clearFunction(header_containers);
                if (!header_containers[index].classList.contains('show'))
                    header_containers[index].classList.add('show');
            })
        })

    }, [InitialState])

    return (
        <header className={'position-relative '}>
            <div className="container d-flex justify-content-between align-items-center top gap-1">
                <div className="d-flex" style={{width: 'calc(100% - 512px)'}}>
                    <div className="logo me-2" onClick={() => navigate('/')}>
                        <img src="https://asaxiy.uz/custom-assets/images/logos/asaxiy-logo.svg" alt=""/>
                    </div>
                    <div className="search w-100">
                        <div className="button-box d-flex iconStyle justify-content-center p-0">
                            <input type="text"
                                   placeholder={'Qidirish...'}/>
                            <button type={'button'}><FiSearch/> Искать</button>
                        </div>
                    </div>
                </div>
                <div className="d-flex align-items-center gap-2 right" style={{width: '512px'}}>
                    <div className="payment d-flex  ms-2 justify-content-center">
                        <div className="cards iconStyle" onClick={() => navigate('/payment')} title={'Оплатить'}>
                            <span><BsCreditCard/></span>
                            <span>Оплатить</span>
                        </div>
                        <div className="trek iconStyle" title={'Отследить заказ'}>
                            <span> <TbTruckDelivery/></span>
                            <span>Отследить</span>
                        </div>
                    </div>
                    <div className="other d-flex ">
                        <div className="lenguag iconStyle">
                            <span><RiEarthFill/></span>
                            <span>Русский</span>
                        </div>
                        <div className="basket iconStyle hover-open ">
                            <span className={'position-relative'}><SlBasketLoaded/><span
                                className={'countingBasket1'}>{isBasketCount}</span></span>
                            <span><span>Карзинка </span>
                        <div className="hover-box shadow">
                          <div className={' color-black bg-white p-3 pb-4 '}>
                             {
                                 InitialState.basket.map((item, index) => (
                                     <div key={index}
                                          className={'basketIn d-flex justify-content-between align-items-center  shadow mb-2 p-2'}>
                                         <div className="d-flex gap-2 align-items-center ">
                                             <img width={40} height={40}
                                                  src={item.image}
                                                  alt=""/>
                                             <p className={'elleps'}
                                                style={{fontSize: '12px', width: '200px'}}>
                                                 {item.name} {`(${item.count}x)`}
                                             </p>

                                         </div>
                                         <div className="info d-flex justify-content-center align-items-center ">
                                             <div className="d-flex align-items-center">
                                                 <p style={{fontSize: '12px',}} className={'pt-3'}>{item.price} сум</p>
                                                 <div className={''} style={{
                                                     fontSize: '15px',
                                                     padding: '10px',
                                                     fontWeight: 'bold',
                                                     cursor: 'pointer'
                                                 }}
                                                      onClick={() => removeBasket(item.id)}
                                                 ><GrClose/></div>
                                             </div>
                                         </div>
                                     </div>
                                 ))
                             }

                          </div>
                           <div className="buttonOut p-3">
                                <div className={'d-flex justify-content-between'}>
                                  <p>Сумма</p>
                                <p>{allPrice} cум</p>
                              </div>
                               <div className="buttons ">
                                    <button className={'btn position-relative mb-2'}
                                            style={{
                                                background: ' #008dff',
                                                color: 'white'
                                            }}><span>ОФОРМИТЬ ПОКУПКУ</span></button>
                                    <button
                                        className={'btn position-relative hoverColor'}><span>ПЕРЕЙТИ В КОРЗИНКУ</span></button>
                               </div>
                           </div>
                        </div></span>
                        </div>
                        <div className="lovely iconStyle " onClick={() => navigate('/save/favourites')}>
                            <span className={'position-relative'}><BsSuitHeart/><span
                                className={'countingBasket2'}>{isLikeCount}</span></span>
                            <span><span>Избранное</span></span>
                        </div>
                        <div className="login iconStyle">
                            <span><AiOutlineUser/></span>
                            <span>Кабинет</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hr"></div>
            {/*<hr/>*/}
            <div className="bottom container fw-bold">
                <div className="d-flex  justify-content-between align-items-center">
                    <div className={'hover-menu d-flex align-items-center gap-2'}
                         onClick={() => setOpenMenu(!openMenu)}><span
                        style={{color: '#008dff', fontSize: '20px', marginBottom: '5px', transition: '.3s'}}>{openMenu ?
                        <AiOutlineClose/> : <FiMenu/>}</span> <span>Все категории</span></div>

                    <div className={'hover-menu'}>Новости</div>
                    <div className={'hover-menu'}>Новинки</div>
                    <div className={'hover-menu'}>Скидки</div>
                    <div className={'hover-menu'}>Книги</div>
                    <div className={'hover-menu'}>Мебель</div>
                    <div className={'hover-menu'}>Телефоны и гаджеты</div>
                    <div className={'hover-menu'}>Кондиционеры</div>
                </div>
            </div>
            <div style={{
                display: openMenu ? "flex" : "none",
                position: "absolute",
                top: '140px',
                left: 0,
                right: 0,
                background: 'white',
                height: '550px',
                zIndex: 999,
                animation: "scale .4s"
            }}>
                <div className={'keys'}>
                    <ul className='keys_list'>
                        {data?.length > 0 && data.map((dat, index) => (
                            <li key={index} className="keys_list_item"
                                ref={(element) => keyListItems.current[index] = element}>
                                <a href="#1">
                                    <img src={dat.imgSrc} alt=""/>
                                    <span>{dat.title}</span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="values">
                    {/* Книги */}
                    <Books/>

                    {/* phones */}
                    <Phones/>
                </div>
            </div>

        </header>
    );
};

export default memo(Header);