const productsData = {
    'mobile': {
        title: 'گوشی‌های موبایل',
        filters: [
            { id: 'all', text: 'همه' },
            { id: 'Apple', text: 'Apple' },
            { id: 'Samsung', text: 'Samsung' },
            { id: 'Xiaomi', text: 'Xiaomi' }
        ],
        products: [
            { model: 'iPhone 15 Pro Max', brand: 'Apple', region: 'ZA/A', storage: '256GB', color: 'مشکی تیتانیوم', image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-max-black-titanium-select-202309', price: '75,000,000', category: 'Apple' },
            { model: 'Galaxy S24 Ultra', brand: 'Samsung', region: 'CH', storage: '512GB', color: 'خاکستری تیتانیوم', image: 'https://images.samsung.com/is/image/samsung/p6pim/levant/2401/gallery/levant-galaxy-s24-ultra-sm-s928bztgmea-thumb-539573859', price: '68,000,000', category: 'Samsung' },
            { model: 'Xiaomi 13T Pro', brand: 'Xiaomi', region: 'Global', storage: '256GB', color: 'مشکی', image: 'https://m.media-amazon.com/images/I/71N-E4d-EHL._AC_SL1500_.jpg', price: '28,000,000', category: 'Xiaomi' },
            { model: 'iPhone 14 Pro', brand: 'Apple', region: 'LL/A', storage: '128GB', color: 'بنفش', image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-pro-deep-purple-select-202209', price: '52,000,000', category: 'Apple' },
        ]
    },
    'headphone': {
        title: 'هدفون و هندزفری',
        filters: [
            { id: 'all', text: 'همه' },
            { id: 'Apple', text: 'Apple' },
            { id: 'QCY', text: 'QCY' },
            { id: 'Haylou', text: 'Haylou' },
        ],
        products: [
            { model: 'Apple AirPods Max', brand: 'Apple', description: 'هدفون روگوشی با کیفیت صدای عالی و نویز کنسلینگ', image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airpods-max-green-select-202011', price: '32,000,000', category: 'Apple' },
            { model: 'QCY T13', brand: 'QCY', description: 'هندزفری بی‌سیم با کیفیت بالا و عمر باتری طولانی', image: 'https://m.media-amazon.com/images/I/51wWwBvV1pL._AC_SL1500_.jpg', price: '950,000', category: 'QCY' },
            { model: 'Haylou GT7 Neo', brand: 'Haylou', description: 'هندزفری بی‌سیم با طراحی ارگونومیک و صدای استریو', image: 'https://cdn.shopify.com/s/files/1/0278/1824/2916/products/GT7_1.jpg?v=1648020999', price: '750,000', category: 'Haylou' }
        ]
    },
    'airpods': {
        title: 'ایرپاد',
        filters: [
            { id: 'all', text: 'همه' },
            { id: 'airpods-pro', text: 'AirPods Pro' },
            { id: 'airpods', text: 'AirPods' }
        ],
        products: [
            { model: 'Apple AirPods Pro 2', brand: 'Apple', description: 'هندزفری بی‌سیم با نویز کنسلینگ فعال', image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MME73?wid=1144&hei=1144&fmt=jpeg&qlt=95&.v=1632861342000', price: '12,000,000', category: 'airpods-pro' },
            { model: 'Apple AirPods 3', brand: 'Apple', description: 'نسل سوم ایرپاد با طراحی جدید', image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MME73?wid=1144&hei=1144&fmt=jpeg&qlt=95&.v=1632861342000', price: '8,500,000', category: 'airpods' }
        ]
    },
    'applewatch': {
        title: 'اپل واچ',
        filters: [
            { id: 'all', text: 'همه' },
            { id: 'series9', text: 'Series 9' },
            { id: 'ultra2', text: 'Ultra 2' },
        ],
        products: [
            { model: 'Apple Watch Ultra 2', brand: 'Apple', size: '49mm', color: 'تیتانیوم', year: '2023', image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MT4M3_VW_PF_watch_band_config?wid=2000&hei=2000&fmt=jpeg&qlt=95&.v=1690069418654', price: '38,000,000', category: 'ultra2', guaranty: true },
            { model: 'Apple Watch Series 9', brand: 'Apple', size: '45mm', color: 'مشکی', year: '2023', image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MT5V3_VW_PF_watch_band_config?wid=2000&hei=2000&fmt=jpeg&qlt=95&.v=1690069695028', price: '22,000,000', category: 'series9', guaranty: true },
            { model: 'Apple Watch Series 9', brand: 'Apple', size: '41mm', color: 'صورتی', year: '2023', image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MT5K3_VW_PF_watch_band_config?wid=2000&hei=2000&fmt=jpeg&qlt=95&.v=1690069708754', price: '18,000,000', category: 'series9', guaranty: true }
        ]
    },
    'accessory': {
        title: 'لوازم جانبی',
        filters: [
            { id: 'all', text: 'همه' },
            { id: 'adapter', text: 'آداپتور و شارژر' },
            { id: 'cable', text: 'کابل' },
            { id: 'case_glass', text: 'کاور و گلس' }
        ],
        products: [
            { model: 'آداپتور 20 وات اپل', brand: 'Apple', description: 'شارژر اصلی ۲۰ واتی مناسب آیفون', image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MU7V2?wid=1144&hei=1144&fmt=jpeg&qlt=95&.v=1708892694767', price: '1,500,000', category: 'adapter' },
            { model: 'کابل شارژ Type-C به Lightning', brand: 'Apple', description: 'کابل اصلی برای آیفون، ۱ متری', image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MQGH2?wid=1144&hei=1144&fmt=jpeg&qlt=95&.v=1661608670180', price: '900,000', category: 'cable' },
            { model: 'گلس محافظ صفحه نمایش', brand: 'Samsung', description: 'محافظ صفحه نمایش شفاف و ضد ضربه', image: 'https://m.media-amazon.com/images/I/61r5K8s-8PL._AC_SL1500_.jpg', price: '300,000', category: 'case_glass' },
            { model: 'کاور سیلیکونی آیفون', brand: 'Apple', description: 'کاور اصلی با جنس سیلیکونی برای آیفون', image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MPU33?wid=1144&hei=1144&fmt=jpeg&qlt=95&.v=1661448056557', price: '450,000', category: 'case_glass' }
        ]
    }
};
