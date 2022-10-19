import React, {memo, useState} from 'react'
import {
    AiFillHeart,
    AiFillStar,
    AiOutlineComment,
    AiOutlineHeart,
    AiOutlineShoppingCart,
    AiOutlineStar
} from 'react-icons/ai'
import {Link} from 'react-router-dom'
import {useSelector} from "react-redux";
import "./main.css"
import {setBasket, setBasketLeft, setLike} from "../../redux/actions/doing";

const  Main=()=> {
    const InitialState = useSelector(state => state.reducer)
    const [sectionNames] = useState(["Cнова в школу", "Популярные товары", "Новые скидки", "Новинки", "Компьютеры и ноутбуки"])


    const StarComp = (star) => {
        let starData = [<AiOutlineStar color='#008dff'/>, <AiOutlineStar color='#008dff'/>,
            <AiOutlineStar color='#008dff'/>, <AiOutlineStar color='#008dff'/>, <AiOutlineStar color='#008dff'/>]
        for (let i = 0; i < Number(star.star); i++) {
            starData[i] = <AiFillStar color='#008dff'/>
        }

        return (
            <div className="star">
                {
                    starData.map(item => {
                        return (
                            item
                        )
                    })
                }
            </div>
        )
    }


    const likeLeftFunc = (id) => {
        // setLike(id)
        // setLeftData(newData)
    }


    return (
        <main className="main container">
            <div className="row">
                <div className="col-md-12 d-lg-none d-block">
                    <div className="row">
                        <div className="col-md-4 col-sm-6 mb-4">
                            <div className="cards" style={{cursor: 'pointer'}}>
                                <div className="img d-flex justify-content-center align-items-center"
                                     style={{padding: '20px', background: 'white', borderRadius: '20px'}}>
                                    <img src="https://asaxiy.uz/custom-assets/images/icons/c_tv.svg" alt=""/>
                                </div>
                                <h4 style={{fontSize: '16px', textAlign: 'center', marginTop: '10px'}}>Телевизоры, видео
                                    и аудио</h4>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 mb-4">
                            <div className="cards" style={{cursor: 'pointer'}}>
                                <div className="img d-flex justify-content-center align-items-center"
                                     style={{padding: '20px', background: 'white', borderRadius: '20px'}}>
                                    <img src="https://asaxiy.uz/custom-assets/images/icons/c_pc.svg" alt=""/>
                                </div>
                                <h4 style={{fontSize: '16px', textAlign: 'center', marginTop: '10px'}}>Компьютеры и
                                    оргтехника</h4>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 mb-4">
                            <div className="cards" style={{cursor: 'pointer'}}>
                                <div className="img d-flex justify-content-center align-items-center"
                                     style={{padding: '20px', background: 'white', borderRadius: '20px'}}>
                                    <img src="https://asaxiy.uz/custom-assets/images/icons/c_book.svg" alt=""/>
                                </div>
                                <h4 style={{fontSize: '16px', textAlign: 'center', marginTop: '10px'}}>Книги</h4>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 mb-4">
                            <div className="cards" style={{cursor: 'pointer'}}>
                                <div className="https://asaxiy.uz/custom-assets/images/icons/c_mach.svg" style={{
                                    padding: '20px',
                                    background: 'white',
                                    borderRadius: '20px',
                                    textAlign: 'center'
                                }}>
                                    <img src="https://asaxiy.uz/custom-assets/images/icons/c_mach.svg" alt=""/>
                                </div>
                                <h4 style={{fontSize: '16px', textAlign: 'center', marginTop: '10px'}}>Бытовая
                                    техника</h4>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 mb-4">
                            <div className="cards" style={{cursor: 'pointer'}}>
                                <div className="img d-flex justify-content-center align-items-center"
                                     style={{padding: '20px', background: 'white', borderRadius: '20px'}}>
                                    <img src="https://asaxiy.uz/custom-assets/images/icons/c_ph.svg" alt=""/>
                                </div>
                                <h4 style={{fontSize: '16px', textAlign: 'center', marginTop: '10px'}}>Телефоны и
                                    гаджеты</h4>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 mb-4">
                            <div className="cards" style={{cursor: 'pointer'}}>
                                <div className="img d-flex justify-content-center align-items-center"
                                     style={{padding: '20px', background: 'white', borderRadius: '20px'}}>
                                    <img src="https://asaxiy.uz/custom-assets/images/icons/c_kitch.svg" alt=""/>
                                </div>
                                <h4 style={{fontSize: '16px', textAlign: 'center', marginTop: '10px'}}>Посуда</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-12">
                    <div className="item" style={{background: '#fff', borderRadius: '20px', paddingTop: '20px'}}>
                        <div className="head d-flex align-items-center justify-content-between px-3">
                            <h5 style={{color: '#858997', fontSize: '16px'}}>Книги</h5>
                            <img height={18} src="https://assets.asaxiy.uz/uploads//5f46535c8c1c3.png" alt=""/>
                        </div>
                        <div className="body">
                            <div className="d-flex align-items-center gap-2 justify-content-start "
                                 style={{padding: '16px 20px', cursor: 'pointer'}}>
                                <img width={80} height={80}
                                     src="https://assets.asaxiy.uz/product/main_image/mobile//62696262ae51d.jpg.webp"
                                     alt=""/>
                                <div>
                                    <p className={'fw-bold m-0 w-100 elleps'}>Дарон Ажемўғли, Жеймс А.
                                        Робинсон: Мамлакатлар таназзули сабаблари: қудрат, фаровонлик ва камбағаллик
                                        манбалари (қаттиқ муқова)</p>
                                    <p style={{fontSize: '14px', color: '#858997'}}>Asaxiy Books китоблари</p>
                                </div>
                            </div>
                            <div className="d-flex align-items-center gap-2 justify-content-start "
                                 style={{padding: '16px 20px', cursor: 'pointer'}}>
                                <img width={80} height={80}
                                     src="https://assets.asaxiy.uz/product/main_image/mobile//6267dd64951ea.jpg.webp"
                                     alt=""/>
                                <div>
                                    <p className={'fw-bold m-0 w-100 elleps'}>Рэй Брэдбери: Фаренгейт бўйича 451º</p>
                                    <p style={{fontSize: '14px', color: '#858997'}}>Asaxiy Books китоблари</p>
                                </div>
                            </div>
                            <div className="d-flex align-items-center gap-2 justify-content-start "
                                 style={{padding: '16px 20px', cursor: 'pointer'}}>
                                <img width={80} height={80}
                                     src="https://assets.asaxiy.uz/product/main_image/mobile//629999705fc48.png.webp"
                                     alt=""/>
                                <div>
                                    <p className={'fw-bold m-0 w-100 elleps'}>Супер чегирма. Элликта машҳур китоб - 999
                                        000 Сўм</p>
                                    <p style={{fontSize: '14px', color: '#858997'}}>Сборники бестселлеров</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {
                        InitialState.leftProducts?.map((item) => {
                            return (
                                <div className="item px-0 my-4" key={item.id}>
                                    <div className="product">
                                        <div className='basket' onClick={()=>setBasketLeft(item)}>
                                            <AiOutlineShoppingCart/>
                                        </div>

                                        <div>
                                            {item.isLike ?
                                                <AiFillHeart onClick={() => likeLeftFunc(item.id)} color='red'
                                                             className='heart'/> :
                                                <AiOutlineHeart onClick={() => likeLeftFunc(item.id)}
                                                                className='heart'/>}
                                        </div>

                                        {item?.discount && <div className="discount">
                                            СКИДКА
                                        </div>}

                                        {item?.isNew && <div className="new">
                                            НОВИНКА
                                        </div>}

                                        <div className="product-image">
                                            <img className='img-fluid' src={item.image} alt=""/>
                                        </div>

                                        <div className="product-info">
                                            <Link className='product-name' to={"/"}>{item.name}</Link>

                                            <div className="rating">
                                                <StarComp star={item?.star}/>


                                                <div className="comments">
                                                    <AiOutlineComment color='#c2c6d1'/>
                                                    <span className='comment'>{item.commentNumber} отзывов</span>
                                                </div>
                                            </div>

                                            <div className="product-item-price">
                                                {item.discount &&
                                                    <span className='product-oldPrice'>{item.oldPrice} сум</span>}
                                                <span className="product-price">{item.price} сум</span>
                                                <div className="installment__price">{item.twelveMonths} сум / 12 мес
                                                </div>
                                            </div>
                                        </div>

                                        <div className="buttons mt-3">
                                            <div style={{width: "37.5%"}}>
                                                <button className='p-2 w-100 default-btn'>
                                                    <span>Рассрочка</span>
                                                </button>
                                            </div>

                                            <div style={{width: "57.5%"}}>
                                                <button className='p-2 w-100 default-btn btn-primary-custom'>
                                                    <span>Купить</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )

                        })
                    }

                </div>
                <div className="col-lg-9  col-md-12 row">

                    {
                        sectionNames?.map((sectionName) => {
                            return (
                                <>
                                    <div className="col-lg-12 mt-4">
                                        <h3 className='products-title'>{sectionName}</h3>
                                    </div>

                                    {
                                        InitialState.products.filter((item) => item.section === sectionName)?.map((item) => {
                                            return (
                                                <div
                                                    className="col-lg-6 col-md-4 col-xl-3 col-xs-12 px-2 mt-2  pb-2"
                                                    key={item.id}>
                                                    <div className="product">
                                                        <div className='basket' onClick={()=>setBasket(item)}>
                                                            <AiOutlineShoppingCart/>
                                                        </div>

                                                        <div>
                                                            {item.isLike ?
                                                                <AiFillHeart onClick={() => setLike(item.id)}
                                                                             color='red' className='heart'/> :
                                                                <AiOutlineHeart onClick={() => setLike(item.id)}
                                                                                className='heart'/>}
                                                        </div>

                                                        {item?.discount && <div className="discount">
                                                            СКИДКА
                                                        </div>}

                                                        {item?.isNew && <div className="new">
                                                            НОВИНКА
                                                        </div>}

                                                        <div className="product-image">
                                                            <img className='img-fluid' src={item.image}
                                                                 alt=""/>
                                                        </div>

                                                        <div className="product-info">
                                                            <Link className='product-name' to={"/"}>{item.name}</Link>

                                                            <div className="rating">
                                                                <StarComp star={item?.star}/>


                                                                <div className="comments">
                                                                    <AiOutlineComment color='#c2c6d1'/>
                                                                    <span
                                                                        className='comment'>{item.commentNumber} отзывов</span>
                                                                </div>
                                                            </div>

                                                            <div className="product-item-price">
                                                                {item.discount && <span
                                                                    className='product-oldPrice'>{item.oldPrice} сум</span>}
                                                                <span className="product-price">{item.price} сум</span>
                                                                <div
                                                                    className="installment__price">{item.twelveMonths} сум
                                                                    / 12 мес
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="buttons mt-3">
                                                            <div style={{width: "37.5%"}}>
                                                                <button className='p-2 w-100 default-btn'>
                                                                    <span>Рассрочка</span>
                                                                </button>
                                                            </div>

                                                            <div style={{width: "57.5%"}}>
                                                                <button
                                                                    className='p-2 w-100 default-btn btn-primary-custom'>
                                                                    <span>Купить</span>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )

                                        })
                                    }

                                </>

                            )
                        })
                    }


                </div>


            </div>

        </main>
    )
}

export default memo(Main)