import React from "react";
import './footer.css';
import { FaFacebookF, FaFacebookSquare, FaInstagram, FaMailBulk, FaPhoneAlt, FaSearchLocation, FaShare, FaTelegramPlane, FaYoutube } from "react-icons/fa";

let data = [
    {
        imgSrc: "https://asaxiy.uz/custom-assets/images/icons/market.svg",
        productName: "Больше не нужно ходить на базар",
        productDesc: "У нас выгодные цены и доставка до дома"
    },
    {
        imgSrc: "https://asaxiy.uz/custom-assets/images/icons/fast-delivery.svg",
        productName: "Быстрая доставка",
        productDesc: "Наш сервис удивит вас"
    },
    {
        imgSrc: "https://asaxiy.uz/custom-assets/images/icons/return.svg",
        productName: "Удобства для вас",
        productDesc: "Быстрое оформление и гарантия на возврат в случае неисправности"
    },
    {
        imgSrc: "https://asaxiy.uz/custom-assets/images/icons/card.svg",
        productName: "Рассрочка",
        productDesc: "Без предоплаты на 3, 6, 9 и 12 месяцев"
    },
];

const Footer = () => {
    return (
        <div className="footer_container">
            <div className="container">
                <div className="footer_wrapper">
                    <div className="footer_top">
                        <div className="row align-items-center">
                            {data.map((dat, index) => (
                                <div key={index} className="col-lg-3 col-md-6 col-sm-12">
                                    <div className="footer_top_item">
                                        <img src={dat.imgSrc} alt="" className="footerTopImg" />
                                        <div className="footer_top_item_child">
                                            <h5>{dat.productName}</h5>
                                            <p>{dat.productDesc}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="footer_center">
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="footer_center_items">
                                    <h5>Информация</h5>
                                    <div className="footer_center_item">
                                        <span>Публичная оферта (Пользовательское соглашение)</span>
                                        <span>Оферта для покупок в рассрочку</span>
                                        <span>Условия рассрочки</span>
                                        <span>Оплата и доставка товара</span>
                                        <span>Отмена заказа и возврат товара</span>
                                        <span>О нас</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="footer_center_items">
                                    <h5>Для связи</h5>
                                    <div className="footer_center_item">
                                        <span><FaPhoneAlt /> +998 71 200 01 05</span>
                                        <span><FaMailBulk /> info@asaxiy.uz</span>
                                        <span><FaSearchLocation />Чиланзар 3, Ташкент</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="footer_center_items">
                                    <h5>Наш Facebook</h5>
                                    <div className="asaxiyWomanImg">
                                        <div className="positions">
                                            <div className="positions_top">
                                                <img
                                                    src="https://scontent.fppk1-1.fna.fbcdn.net/v/t39.30808-1/302147778_510370281092219_3856337463349986238_n.jpg?stp=cp0_dst-jpg_p50x50&_nc_cat=101&ccb=1-7&_nc_sid=dbb9e7&_nc_ohc=PaSUQx3jzkkAX8QBS74&_nc_oc=AQk3SjT5Zsx8pkJ-xo89uX7XwXrU2IARDnRHgsUSoJopuW9s_FYLftbT5ghJrweQjn8&_nc_ht=scontent.fppk1-1.fna&edm=AHodUMQEAAAA&oh=00_AT_ayjhCNHG1_4ua5Bf0ZrMd3De6hXJaHgP5weVPkM1XRg&oe=635429CD"
                                                    alt=""
                                                />
                                                <div className="positions_top_img_name">
                                                    <h5>Asaxiy Woman</h5>
                                                    <div>1,823 followers</div>
                                                </div>
                                            </div>
                                            <div className="positions_bottom">
                                                <a href="#1">
                                                    <FaFacebookSquare />
                                                    Follow Page
                                                </a>
                                                <a href="#1">
                                                    <FaShare />
                                                    Share
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer_bottom">
                        <hr />
                        <div className="footer_bottom_center">
                            <div className="footer_bottom_center_item">
                                <h6>Виды оплаты :</h6>
                                <img src="https://docs.click.uz/wp-content/themes/click_help/assets/images/logo.png" alt="" />
                                <img src="https://cdn.paycom.uz/documentation_assets/payme_01.svg" alt="" />
                                <img src="https://kapital24.uz/upload/media/icons/cards/system-visa_c.png" alt="" />
                                <img src="https://www.cloudera.com/content/dam/www/marketing/images/logos/customers/mastercard.png" alt="" />
                                <img src="https://uzoplata.com/wp-content/uploads/2020/10/humocard1.png" alt="" />
                                <img src="https://www.spot.uz/media/img/2019/04/fWPk2a15549570282085_b.jpg" alt="" />
                            </div>
                            <div className="footer_bottom_center_item">
                                <h6>Мы в соц. сетях :</h6>
                                <FaFacebookF />
                                <FaTelegramPlane />
                                <FaInstagram />
                                <FaYoutube />
                            </div>
                        </div>
                        <hr />
                        <p className="footer_title">2015-2022 Интернет-магазин asaxiy.uz: Бытовая техника и др. Доставка товаров осуществляется во все регионы. Все права защищены.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default React.memo(Footer);