import React from "react";
import './books.css';

const Books = () => {
    return (
        <div className="header_container show">
            {/* row 1  */}
            <div className="row">
                <div className="col-lg-3">
                    <a href="#1" className='menu_title'>Asaxiy Books китоблари</a>
                    <div>
                        <a href="#1" className='menu_item_title'>Все товары</a>
                    </div>
                </div>
                <div className="col-lg-3">
                    <a href="#1" className='menu_title'>Детская литература</a>
                    <div>
                        <a href="#1" className='menu_item_title'>Все товары</a>
                    </div>
                </div>
                <div className="col-lg-3">
                    <a href="#1" className='menu_title'>Детская литература</a>
                    <div>
                        <a href="#1" className='menu_item_title'>Все товары</a>
                    </div>
                </div>
                <div className="col-lg-3">
                    <a href="#1" className='menu_title'>Детективы и фантастика</a>
                    <div>
                        <a href="#1" className='menu_item_title'>Все товары</a>
                    </div>
                </div>
            </div>

            {/* row 2 */}
            <div className="row">
                <div className="col-lg-3">
                    <a href="#1" className='menu_title'>Художественная литература</a>
                    <div>
                        <a href="#1" className='menu_item_title'>Все товары</a>
                        <a href="#1" className='menu_item_title'>Мировая литература</a>
                        <a href="#1" className='menu_item_title'>Узбекская литература</a>
                        <a href="#1" className='menu_item_title'>Современная узбекская литература</a>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="col-lg-12 mb-4">
                        <a href="#1" className='menu_title'>Религиозная литература</a>
                        <div>
                            <a href="#1" className='menu_item_title'>Все товары</a>
                        </div>
                    </div>
                    <div className="col-lg-12 mb-4">
                        <a href="#1" className='menu_title'>Книги на русском</a>
                        <div>
                            <a href="#1" className='menu_item_title'>Все товары</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="col-lg-12 mb-4">
                        <a href="#1" className='menu_title'>ТОП-100 бестселлер</a>
                        <div>
                            <a href="#1" className='menu_item_title'>Все товары</a>
                        </div>
                    </div>
                    <div className="col-lg-12 mb-4">
                        <a href="#1" className='menu_title'>Сборники бестселлеров</a>
                        <div>
                            <a href="#1" className='menu_item_title'>Все товары</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="col-lg-12 mb-4">
                        <a href="#1" className='menu_title'>Биография</a>
                        <div>
                            <a href="#1" className='menu_item_title'>Все товары</a>
                        </div>
                    </div>
                    <div className="col-lg-12 mb-4">
                        <a href="#1" className='menu_title'>Канцтовары</a>
                        <div>
                            <a href="#1" className='menu_item_title'>Все товары</a>
                        </div>
                    </div>
                </div>
            </div>

            {/* row 3 */}
            <div className="row">
                <div className="col-lg-3">
                    <a href="#1" className='menu_title'>Психология и саморазвитие</a>
                    <div>
                        <a href="#1" className='menu_item_title'>Все товары</a>
                    </div>
                </div>
                <div className="col-lg-3">
                    <a href="#1" className='menu_title'>Наука и учебники</a>
                    <div>
                        <a href="#1" className='menu_item_title'>Все товары</a>
                    </div>
                </div>
                <div className="col-lg-3">
                    <a href="#1" className='menu_title'>Политика</a>
                    <div>
                        <a href="#1" className='menu_item_title'>Все товары</a>
                    </div>
                </div>
                <div className="col-lg-3">
                    <a href="#1" className='menu_title'>Турецкая литература</a>
                    <div>
                        <a href="#1" className='menu_item_title'>Все товары</a>
                    </div>
                </div>
            </div>

            {/* row 4 */}
            <div className="row">
                <div className="col-lg-3">
                    <a href="#1" className='menu_title'>Книги про бизнес</a>
                    <div>
                        <a href="#1" className='menu_item_title'>Все товары</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default React.memo(Books);