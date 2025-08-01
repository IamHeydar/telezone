const iphone16Products = [
    { model: "iPhone 16 Pro Max", storage: "1TB", color: "Black", price: "205,000,000", region: "ZA NOT", category: "ProMax", image: "https://via.placeholder.com/150/000000/FFFFFF?text=iPhone+16+Pro+Max" },
    { model: "iPhone 16 Pro Max", storage: "512GB", color: "Black", price: "171,000,000", region: "ZA NOT", category: "ProMax", image: "https://via.placeholder.com/150/000000/FFFFFF?text=iPhone+16+Pro+Max" },
    { model: "iPhone 16 Pro", storage: "256GB", color: "Black", price: "143,500,000", region: "ZA NOT", category: "Pro", image: "https://via.placeholder.com/150/808080/FFFFFF?text=iPhone+16+Pro" },
    { model: "iPhone 16", storage: "128GB", color: "Black", price: "97,000,000", region: "CH NOT", category: "16", image: "https://via.placeholder.com/150/333333/FFFFFF?text=iPhone+16" },
];

const appleWatchProducts = [
    { model: "Apple Watch Series 10", size: "46mm", color: "Jet Black", price: "30,300,000", guaranty: true, category: "Series10", image: "https://via.placeholder.com/150/663399/FFFFFF?text=Apple+Watch+10" },
    { model: "Apple Watch Series 9", size: "45mm", color: "Black", price: "تماس بگیرید", guaranty: true, category: "Series9", image: "https://via.placeholder.com/150/663399/FFFFFF?text=Apple+Watch+9" },
    { model: "Apple Watch SE", size: "44mm", year: "2024", color: "Midnight", price: "19,600,000", guaranty: true, category: "SE", image: "https://via.placeholder.com/150/663399/FFFFFF?text=Apple+Watch+SE" },
];

const airpodsProducts = [
    { model: "AirPods Pro 2 Type-C", price: "16,450,000", category: "Pro2", image: "https://via.placeholder.com/150/f0f0f0/000000?text=AirPods+Pro+2" },
    { model: "AirPods 4 ANC", price: "13,650,000", category: "AirPods4", image: "https://via.placeholder.com/150/f0f0f0/000000?text=AirPods+4+ANC" },
    { model: "AirPods 2", price: "8,600,000", category: "AirPods2", image: "https://via.placeholder.com/150/f0f0f0/000000?text=AirPods+2" }
];

const generalProducts = [
    { model: "هدفون بی‌سیم Sony WH-1000XM4", category: "headphone", brand: "Sony", price: "8,500,000", image: "https://via.placeholder.com/150/ff4500/FFFFFF?text=Sony+Headphone" },
    { model: "هندزفری بلوتوثی Xiaomi Buds 4 Pro", category: "headphone", brand: "Xiaomi", price: "3,100,000", image: "https://via.placeholder.com/150/ff4500/FFFFFF?text=Xiaomi+Buds" },
    { model: "ساعت هوشمند سامسونگ Galaxy Watch 6", category: "smartwatch", brand: "Samsung", price: "9,000,000", image: "https://via.placeholder.com/150/1e90ff/FFFFFF?text=Galaxy+Watch+6" },
    { model: "کابل شارژ Type-C", category: "accessory", filter: "cable", brand: "Apple", price: "1,300,000", image: "https://via.placeholder.com/150/008000/FFFFFF?text=Type-C+Cable" },
];

// داده‌های اصلی محصولات
const productsData = {
    'mobile': {
        title: 'لیست گوشی‌های موبایل',
        products: iphone16Products,
        filters: [
            { id: 'all', text: 'همه' },
            { id: 'ProMax', text: 'Pro Max' },
            { id: 'Pro', text: 'Pro' },
            { id: '16', text: 'iPhone 16' }
        ]
    },
    'applewatch': {
        title: 'لیست ساعت‌های هوشمند Apple Watch',
        products: appleWatchProducts,
        filters: [
            { id: 'all', text: 'همه' },
            { id: 'Series10', text: 'Series 10' },
            { id: 'Series9', text: 'Series 9' },
            { id: 'SE', text: 'SE 2024' }
        ]
    },
    'headphone': {
        title: 'هدفون و هندزفری',
        products: generalProducts.filter(p => p.category === 'headphone'),
        filters: [
            { id: 'all', text: 'همه' },
            { id: 'Sony', text: 'Sony' },
            { id: 'Xiaomi', text: 'Xiaomi' }
        ]
    },
    'airpods': {
        title: 'ایرپاد',
        products: airpodsProducts,
        filters: [
            { id: 'all', text: 'همه' },
            { id: 'Pro2', text: 'Pro 2' },
            { id: 'AirPods4', text: 'AirPods 4' },
            { id: 'AirPods2', text: 'AirPods 2' }
        ]
    },
    'accessory': {
        title: 'لوازم جانبی',
        products: generalProducts.filter(p => p.category === 'accessory'),
        filters: [
            { id: 'all', text: 'همه' },
            { id: 'adapter', text: 'آداپتور' },
            { id: 'cable', text: 'کابل' },
            { id: 'case_glass', text: 'کاور و گلس' }
        ]
    },
    'smartwatch': {
        title: 'ساعت‌های هوشمند (متفرقه)',
        products: generalProducts.filter(p => p.category === 'smartwatch'),
        filters: [
            { id: 'all', text: 'همه' },
            { id: 'Samsung', text: 'Samsung' }
        ]
    }
};

