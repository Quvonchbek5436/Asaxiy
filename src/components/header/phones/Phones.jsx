import React from "react";
import './phones.css';

const Phones = ({ phonesref }) => {
    return (
        <div className="header_container" >
            {/* row 1  */}
            <div className="row">
                <div className="col-lg-3">
                    <div className="col-lg-12">
                        <a href="#1" className='menu_title'>Телефоны</a>
                        <div>
                            <a href="#1" className='menu_item_title'>Все товары</a>
                            <a href="#1" className='menu_item_title'>Кнопочные телефоны</a>
                            <a href="#1" className='menu_item_title'>Смартфоны</a>
                            <a href="#1" className='menu_item_title'>Радиотелефоны</a>
                            <a href="#1" className='menu_item_title'>Проводные телефоны</a>
                            <a href="#1" className='menu_item_title'>IP-телефоны</a>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <a href="#1" className='menu_title'>Планшеты</a>
                        <div>
                            <a href="#1" className='menu_item_title'>Все товары</a>
                            <a href="#1" className='menu_item_title'> Чехлы для планшетов </a>
                            <a href="#1" className='menu_item_title'>Графические планшеты</a>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <a href="#1" className='menu_title'>Смарт-часы и браслеты</a>
                        <div>
                            <a href="#1" className='menu_item_title'>Все товары</a>
                            <a href="#1" className='menu_item_title'> Аксессуары для смарт часов и фитнес браслетов</a>
                            <a href="#1" className='menu_item_title'>Смарт-часы</a>
                            <a href="#1" className='menu_item_title'>Фитнес-браслеты</a>
                            <a href="#1" className='menu_item_title'>Умные часы для детей</a>
                        </div>
                    </div>
                </div>

                <div className="col-lg-3">
                    <div className="col-lg-12">
                        <a href="#1" className='menu_title'>Факсы</a>
                        <div>
                            <a href="#1" className='menu_item_title'>Все товары</a>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <a href="#1" className='menu_title'>Аксессуары для смартфонов и планшетов</a>
                        <div>
                            <a href="#1" className='menu_item_title'>Все товары</a>
                            <a href="#1" className='menu_item_title'>Защитные стекла для смартфонов</a>
                            <a href="#1" className='menu_item_title'>Беспроводные зарядные устройства </a>
                            <a href="#1" className='menu_item_title'>Чехлы для телефонов</a>
                            <a href="#1" className='menu_item_title'>Зарядные устройства и USB Кабели</a>
                            <a href="#1" className='menu_item_title'>Игровые гаджеты </a>
                            <a href="#1" className='menu_item_title'>Внешний аккумулятор (Power bank)</a>
                            <a href="#1" className='menu_item_title'>Автомобильные держатели</a>
                            <a href="#1" className='menu_item_title'>Aдаптеры</a>
                            <a href="#1" className='menu_item_title'>Аксессуары для авто</a>
                            <a href="#1" className='menu_item_title'>Стилусы</a>
                            <a href="#1" className='menu_item_title'>Штативы для кольцевых ламп и телефонов</a>
                            <a href="#1" className='menu_item_title'>Для чистки гаджетов</a>
                            <a href="#1" className='menu_item_title'>Подставки для смартфонов и планшетов</a>
                        </div>
                    </div>
                </div>

                <div className="col-lg-3">
                    <div className="col-lg-12">
                        <a href="#1" className='menu_title'>Наушники и аудиотехника</a>
                        <div>
                            <a href="#1" className='menu_item_title'>Все товары</a>
                            <a href="#1" className='menu_item_title'>Беспроводные наушники</a>
                            <a href="#1" className='menu_item_title'>Наушники</a>
                            <a href="#1" className='menu_item_title'>Bluetooth гарнитуры </a>
                            <a href="#1" className='menu_item_title'>Портативные колонки </a>
                            <a href="#1" className='menu_item_title'>Микрофоны</a>
                            <a href="#1" className='menu_item_title'>Диктофоны</a>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <a href="#1" className='menu_title'>Электронные книги</a>
                        <div>
                            <a href="#1" className='menu_item_title'>Все товары</a>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <a href="#1" className='menu_title'>Очки виртуальной реальности</a>
                        <div>
                            <a href="#1" className='menu_item_title'>Все товары</a>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <a href="#1" className='menu_title'>Радиостанции</a>
                        <div>
                            <a href="#1" className='menu_item_title'>Все товары</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default React.memo(Phones); 