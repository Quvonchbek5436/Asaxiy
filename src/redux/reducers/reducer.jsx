import * as t from "../types";

const initialState = {
    products: [
        {
            id: 1,
            image: "https://assets.asaxiy.uz/product/main_image/desktop//613364d9ccd91.jpg.webp",
            name: 'Футболка YOKI "Akang talaba uje" Black',
            isLike: false,
            isNew: false,
            star: 4,
            commentNumber: 3,
            price: "119 000",
            twelveMonths: "13 900",
            discount: false,
            section: "Cнова в школу",
            countBasket:0
        },
        {
            id: 2,
            image: "https://assets.asaxiy.uz/product/main_image/desktop//614ee39a5e264.jpg.webp",
            name: 'Планшет Xiaomi Pad 5 6/128Gb Wi-Fi White',
            isLike: false,
            isNew: false,
            star: 5,
            commentNumber: 9,
            price: "4 083 000",
            twelveMonths: "493 300",
            discount: false,
            section: "Cнова в школу",
            countBasket:0
        },
        {
            id: 5,
            image: "https://assets.asaxiy.uz/product/main_image/desktop//6220a914dad87.jpg.webp",
            name: 'Смарт часы Modio kids MK05 (Blue, Pink) (Хит продаж)',
            isLike: false,
            isNew: false,
            star: 5,
            commentNumber: 1,
            price: "269 000",
            twelveMonths: "32 600",
            discount: false,
            section: "Cнова в школу",
            countBasket:0
        },
        {
            id: 3,
            image: "https://assets.asaxiy.uz/product/main_image/desktop//629999705fc48.png.webp",
            name: ' Супер чегирма. Элликта машҳур китоб - 999 000 Сўм  ',
            isLike: false,
            isNew: false,
            star: 5,
            commentNumber: 132,
            oldPrice: "1 587 000",
            price: "999 000",
            twelveMonths: "108 300",
            discount: true,
            section: "Cнова в школу",
            countBasket:0
        },
        {
            id: 6,
            image: "https://assets.asaxiy.uz/product/main_image/desktop//62cfb3e842358.jpg.webp",
            name: ' Смарт часы Amazfit Bip 3 Black  ',
            isLike: false,
            isNew: false,
            star: 5,
            commentNumber: 1,
            oldPrice: "635 000",
            price: "999 000",
            twelveMonths: "67 600",
            discount: true,
            section: "Cнова в школу",
            countBasket:0
        },
        {
            id: 4,
            image: "https://assets.asaxiy.uz/product/main_image/desktop//6325aa1ecd141.png.webp",
            name: ' Смартфон iPhone 14 Pro 128GB Deep Purple ',
            isLike: false,
            isNew: false,
            star: 5,
            commentNumber: 0,
            price: "15 699 000",
            twelveMonths: "1 929 000",
            discount: false,
            section: "Cнова в школу",
            countBasket:0
        },
        {
            id: 7,
            image: "https://assets.asaxiy.uz/product/main_image/desktop//6321ba0ff3ba3.png.webp",
            name: ' Смартфон HUAWEI nova Y70 4/64GB Midnight black ',
            isLike: false,
            isNew: false,
            star: 5,
            commentNumber: 0,
            price: "2 360 000",
            twelveMonths: "287 200",
            discount: false,
            section: "Cнова в школу",
            countBasket:0
        },
        {
            id: 8,
            image: "https://assets.asaxiy.uz/product/main_image/desktop//63230a5982893.jpg.webp",
            name: ' Клаус Шваб: Тўртинчи саноат инқилоби ',
            isLike: false,
            isNew: false,
            star: 5,
            commentNumber: 0,
            price: "60 000",
            twelveMonths: "6 500",
            discount: false,
            section: "Cнова в школу",
            countBasket:0
        },
        {
            id: 9,
            image: "https://assets.asaxiy.uz/product/main_image/desktop//6310b0528b023.jpeg.webp",
            name: ' Адаптер Смарт ТВ Xiaomi Mi TV Stick 4K HDR ',
            isLike: false,
            isNew: false,
            star: 5,
            commentNumber: 0,
            price: "645 000",
            twelveMonths: "77 300",
            discount: false,
            section: "Популярные товары",
            countBasket:0
        },
        {
            id: 10,
            image: "https://assets.asaxiy.uz/product/main_image/desktop//60783d9c2e6ed.jpg.webp",
            name: ' Защитные очки 2E Gaming Anti-blue Glasses (Black-Blue) ',
            isLike: false,
            isNew: false,
            star: 5,
            commentNumber: 0,
            oldPrice: "219 000",
            price: "209 000",
            twelveMonths: "24 400",
            discount: true,
            section: "Популярные товары",
            countBasket:0
        },
        {
            id: 11,
            image: "https://assets.asaxiy.uz/product/main_image/desktop/5e15bc4742024.jpg.webp",
            name: ' Проводные наушники Xiaomi Mi Pro HD (Серебряные) ',
            isLike: false,
            isNew: false,
            star: 5,
            commentNumber: 1,
            oldPrice: "119 000",
            price: "99 000",
            twelveMonths: "11 600",
            discount: true,
            section: "Популярные товары",
            countBasket:0
        },
        {
            id: 12,
            image: "https://assets.asaxiy.uz/product/main_image/desktop//6149831870570.jpg.webp",
            name: ' Смарт браслет HUAWEI Band 6 (Black) ',
            isLike: false,
            isNew: false,
            star: 5,
            commentNumber: 1,
            price: "499 000",
            twelveMonths: "58 300",
            discount: false,
            section: "Популярные товары",
            countBasket:0
        },
        {
            id: 13,
            image: "https://assets.asaxiy.uz/product/main_image/desktop//62cab2b216392.png.webp",
            name: ' Смарт браслет HUAWEI Band 7 (Wilderness Green) ',
            isLike: false,
            isNew: false,
            star: 5,
            commentNumber: 1,
            oldPrice: "705 000",
            price: "649 000",
            twelveMonths: "77 800",
            discount: true,
            section: "Новые скидки",
            countBasket:0
        },
        {
            id: 14,
            image: "https://assets.asaxiy.uz/product/main_image/desktop//5f0428ba75933.jpeg.webp",
            name: ' Салатник закал. Pasabahce СУЛТАНА  120мм 6шт 10286 ',
            isLike: false,
            isNew: false,
            star: 5,
            commentNumber: 2,
            oldPrice: "69 000",
            price: "59 000",
            twelveMonths: "6 900",
            discount: true,
            section: "Новые скидки",
            countBasket:0
        },
        {
            id: 15,
            image: "https://assets.asaxiy.uz/product/main_image/desktop//63382f61a012a.jpg.webp",
            name: ' Двухдиапазонный геймерский беспроводной маршрутизатор Asus RT-AC85P ',
            isLike: false,
            isNew: false,
            star: 5,
            commentNumber: 1,
            oldPrice: "1 310 000",
            price: "1 150 000",
            twelveMonths: "137 800",
            discount: true,
            section: "Новые скидки",
            countBasket:0
        },
        {
            id: 16,
            image: "https://assets.asaxiy.uz/product/main_image/desktop//628f41399373d.png.webp",
            name: ' Wi-Fi роутер Asus ROG STRIX GS-AX3000 WiFi 6 ',
            isLike: false,
            isNew: false,
            star: 5,
            commentNumber: 0,
            oldPrice: "2 070 000",
            price: "2 013 000",
            twelveMonths: "243 000",
            discount: true,
            section: "Новые скидки",
            countBasket:0
        },
        {
            id: 17,
            image: "https://assets.asaxiy.uz/product/main_image/desktop//634eede820214.jpg",
            name: ' Жанни Родари: Желсомино Ёлғончилар мамлакатида ',
            isLike: false,
            isNew: true,
            star: 5,
            commentNumber: 0,
            price: "25 000",
            twelveMonths: "2 800",
            discount: false,
            section: "Новинки",
            countBasket:0
        },
        {
            id: 18,
            image: "https://assets.asaxiy.uz/product/main_image/desktop//634eec43d9f1d.jpg",
            name: ' Набижон Боқий: Қизил тошбўрон ',
            isLike: false,
            isNew: true,
            star: 5,
            commentNumber: 0,
            price: "69 000",
            twelveMonths: "7 500",
            discount: false,
            section: "Новинки",
            countBasket:0
        },
        {
            id: 19,
            image: "https://assets.asaxiy.uz/product/main_image/desktop//634eea5435e19.jpg",
            name: ' Хуршид Дўстмуҳаммад: Ўйин ',
            isLike: false,
            isNew: true,
            star: 5,
            commentNumber: 0,
            price: "55 000",
            twelveMonths: "6 000",
            discount: false,
            section: "Новинки",
            countBasket:0
        },
        {
            id: 20,
            image: "https://assets.asaxiy.uz/product/main_image/desktop//634ee86d748f7.jpg",
            name: ' Жеймс Паттерсон, Маршалл Кэрп: Қўлингдан келса, маҳв эт ',
            isLike: false,
            isNew: true,
            star: 5,
            commentNumber: 0,
            price: "45 000",
            twelveMonths: "4 900",
            discount: false,
            section: "Новинки",
            countBasket:0
        },
        {
            id: 21,
            image: "https://assets.asaxiy.uz/product/main_image/desktop//5fbe07fea81ca.jpg.webp",
            name: ' Ноутбук Apple MacBook Air 13 8GB/512GB 2020 (Gray, Silver, Gold) (процессор M1) ',
            isLike: false,
            isNew: false,
            star: 0,
            commentNumber: 0,
            price: "14 929 000",
            twelveMonths: "1 840 700",
            discount: false,
            section: "Компьютеры и ноутбуки",
            countBasket:0
        },
        {
            id: 22,
            image: "https://assets.asaxiy.uz/product/main_image/desktop//60e03f8abed24.jpg.webp",
            name: ' SSD Lexar 128GB (NQ100) ',
            isLike: false,
            isNew: false,
            star: 5,
            commentNumber: 0,
            oldPrice: "322 000",
            price: "293 000",
            twelveMonths: "35 200",
            discount: true,
            section: "Компьютеры и ноутбуки",
            countBasket:0
        },
        {
            id: 23,
            image: "https://assets.asaxiy.uz/product/main_image/desktop//624fcdd52231f.jpg.webp",
            name: ' Ноутбук Asus X515J / Intel i3-1005 / DDR4 8GB / SSD 256GB / 15.6" HD ',
            isLike: false,
            isNew: false,
            star: 4,
            commentNumber: 0,
            price: "4 968 000",
            twelveMonths: "618 500",
            discount: false,
            section: "Компьютеры и ноутбуки",
            countBasket:0
        },
        {
            id: 24,
            image: "https://assets.asaxiy.uz/product/main_image/desktop//6315af3ec0efd.jpg.webp",
            name: ' Принтер Canon Pixma G2415 (Струйный, А4) ',
            isLike: false,
            isNew: false,
            star: 4,
            commentNumber: 0,
            price: "2 149 000",
            twelveMonths: "254 800",
            discount: false,
            section: "Компьютеры и ноутбуки",
            countBasket:0
        },
    ],
    leftProducts:[
        {
            id: 1,
            image: "https://assets.asaxiy.uz/product/main_image/desktop//5fbe07fea81ca.jpg.webp",
            name: ' Ноутбук Apple MacBook Air 13 8GB/512GB 2020 (Gray, Silver, Gold) (процессор M1) ',
            isLike: false,
            isNew: false,
            star: 0,
            commentNumber: 0,
            price: "14 929 000",
            twelveMonths: "1 840 700",
            discount: false,
            section: "Компьютеры и ноутбуки"
        },
        {
            id: 23,
            image: "https://assets.asaxiy.uz/product/main_image/desktop//624fcdd52231f.jpg.webp",
            name: ' Ноутбук Asus X515J / Intel i3-1005 / DDR4 8GB / SSD 256GB / 15.6" HD ',
            isLike: false,
            isNew: false,
            star: 4,
            commentNumber: 0,
            price: "4 968 000",
            twelveMonths: "618 500",
            discount: false,
            section: "Компьютеры и ноутбуки"
        },
    ],
    basket: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case t.SET_LIKE:
            let dataLike = [...state.products];
            dataLike.forEach((d) => {
                if (d.id === action.payload) {
                    d.isLike = !d.isLike
                }
            })
            return {...state, products: dataLike};

        case t.SET_LIKE_LEFT:
            let dataLikeLeft = [...state.leftProducts];
            dataLikeLeft.forEach((d) => {
                if (d.id === action.payload) {
                    d.isLike = !d.isLike
                }
            })
            return {...state, leftProducts: dataLikeLeft};

        case t.SET_BASKET:
            const index = state.basket.findIndex((item) => item.id === action.payload.id)
            const newBasket = state.basket
            if (index >= 0) {
                newBasket[index].count = newBasket[index].count + 1
            } else {
                const product = action.payload;
                product.count = 1
                newBasket.push(product)
            }

            console.log(newBasket)

            return {...state, basket: newBasket};

        case t.REMOVE_BASKET:
            let removeData=[...state.basket];
            removeData.forEach((d,i)=>{
                if(d.id===action.payload){
                    removeData.splice(i,1)
                }
            })

            return {...state, basket: removeData};
        case t.REMOVE_LIKES:
                let likeData=[...state.products]
            likeData.forEach((d) => {
                if (d.id === action.payload) {
                    d.isLike = !d.isLike
                }
            })
            return {...state, products: likeData};
        default:
            return state;
    }
};

export default reducer;