// Data for iPhone 16 series
const iphone16Products = [
    { model: "iPhone 16 Pro Max", storage: "1TB", color: "Black", price: "205,000,000", region: "ZA NOT", category: "ProMax" },
    { model: "iPhone 16 Pro Max", storage: "1TB", color: "Desert", price: "208,000,000", region: "ZA NOT", category: "ProMax" },
    { model: "iPhone 16 Pro Max", storage: "512GB", color: "Black", price: "171,000,000", region: "ZA NOT", category: "ProMax" },
    { model: "iPhone 16 Pro Max", storage: "512GB", color: "Silver", price: "173,000,000", region: "ZA NOT", category: "ProMax" },
    { model: "iPhone 16 Pro Max", storage: "512GB", color: "Desert", price: "172,000,000", region: "ZA NOT", category: "ProMax" },
    { model: "iPhone 16 Pro Max", storage: "256GB", color: "Black", price: "149,500,000", region: "ZA NOT", category: "ProMax" },
    { model: "iPhone 16 Pro Max", storage: "256GB", color: "Silver", price: "151,000,000", region: "ZA NOT", category: "ProMax" },
    { model: "iPhone 16 Pro Max", storage: "256GB", color: "Natural", price: "150,000,000", region: "ZA NOT", category: "ProMax" },
    { model: "iPhone 16 Pro Max", storage: "256GB", color: "Desert", price: "150,000,000", region: "ZA NOT", category: "ProMax" },
    { model: "iPhone 16 Pro Max", storage: "256GB", color: "Black", price: "144,000,000", region: "CH NOT", category: "ProMax" },
    { model: "iPhone 16 Pro Max", storage: "256GB", color: "Desert", price: "142,000,000", region: "CH NOT", category: "ProMax" },
    { model: "iPhone 16 Pro", storage: "256GB", color: "Black", price: "143,500,000", region: "ZA NOT", category: "Pro" },
    { model: "iPhone 16 Pro", storage: "256GB", color: "Silver", price: "143,000,000", region: "ZA NOT", category: "Pro" },
    { model: "iPhone 16 Pro", storage: "256GB", color: "Natural", price: "144,000,000", region: "ZA NOT", category: "Pro" },
    { model: "iPhone 16 Pro", storage: "256GB", color: "Desert", price: "144,000,000", region: "ZA NOT", category: "Pro" },
    { model: "iPhone 16 Pro", storage: "128GB", color: "Desert", price: "134,000,000", region: "ZA NOT", category: "Pro" },
    { model: "iPhone 16", storage: "256GB", color: "Black", price: "118,000,000", region: "CH NOT", category: "16" },
    { model: "iPhone 16", storage: "256GB", color: "Silver", price: "117,000,000", region: "CH NOT", category: "16" },
    { model: "iPhone 16", storage: "128GB", color: "Black", price: "97,000,000", region: "CH NOT", category: "16" },
    { model: "iPhone 16", storage: "128GB", color: "Silver", price: "96,000,000", region: "CH NOT", category: "16" },
    { model: "iPhone 16", storage: "128GB", color: "Blue", price: "96,000,000", region: "CH NOT", category: "16" },
    { model: "iPhone 16", storage: "128GB", color: "Pink", price: "100,000,000", region: "CH NOT", category: "16" }
];

// Data for Apple Watch
const appleWatchProducts = [
    { model: "Apple Watch Series 10", size: "46mm", color: "Jet Black", price: "30,300,000", guaranty: true, category: "Series10" },
    { model: "Apple Watch Series 10", size: "46mm", color: "Silver", price: "29,500,000", guaranty: true, category: "Series10" },
    { model: "Apple Watch Series 10", size: "46mm", color: "Rose Gold", price: "27,800,000", guaranty: true, category: "Series10" },
    { model: "Apple Watch Series 10", size: "42mm", color: "Jet Black", price: "28,400,000", guaranty: true, category: "Series10" },
    { model: "Apple Watch Series 10", size: "42mm", color: "Silver", price: "29,200,000", guaranty: true, category: "Series10" },
    { model: "Apple Watch Series 10", size: "42mm", color: "Rose Gold", price: "29,200,000", guaranty: true, category: "Series10" },
    { model: "Apple Watch Series 9", size: "45mm", color: "Black", price: "تماس بگیرید", guaranty: true, category: "Series9" },
    { model: "Apple Watch SE", size: "44mm", year: "2024", color: "Midnight", price: "19,600,000", guaranty: true, category: "SE" },
    { model: "Apple Watch SE", size: "44mm", year: "2024", color: "Silver", price: "تماس بگیرید", guaranty: true, category: "SE" },
    { model: "Apple Watch SE", size: "44mm", year: "2024", color: "Starlight", price: "19,600,000", guaranty: true, category: "SE" },
    { model: "Apple Watch SE", size: "40mm", year: "2024", color: "Black", price: "17,600,000", guaranty: true, category: "SE" },
    { model: "Apple Watch SE", size: "40mm", year: "2024", color: "Silver", price: "17,600,000", guaranty: true, category: "SE" },
    { model: "Apple Watch SE", size: "40mm", year: "2024", color: "Starlight", price: "17,600,000", guaranty: true, category: "SE" }
];

// New data for AirPods
const airpodsProducts = [
    { model: "AirPods Pro 2 Type-C", price: "16,450,000", category: "Pro2" },
    { model: "AirPods 4 ANC", price: "13,650,000", category: "AirPods4" },
    { model: "AirPods 4", price: "10,250,000", category: "AirPods4" },
    { model: "AirPods 2", price: "8,600,000", category: "AirPods2" }
];

// Refined general products (only relevant ones for new categories)
const generalProducts = [
    {
        id: 2,
        name: "هدفون بی‌سیم Sony WH-1000XM4",
        category: "headphone",
        brand: "Sony",
        description: "کیفیت صدای استثنایی با حذف نویز فعال، باتری 30 ساعته و طراحی ارگونومیک.",
        price: "8,500,000"
    },
    {
        id: 6,
        name: "هندزفری بلوتوثی Xiaomi Buds 4 Pro",
        category: "headphone",
        brand: "Xiaomi",
        description: "صدای Hi-Res و حذف نویز تا 48dB، اتصال همزمان به دو دستگاه.",
        price: "3,100,000"
    },
    {
        id: 9,
        name: "ساعت هوشمند سامسونگ Galaxy Watch 6",
        category: "smartwatch",
        brand: "Samsung",
        description: "ردیابی سلامت پیشرفته و امکانات هوشمند، طراحی شیک.",
        price: "9,000,000"
    },
    // New accessories from your list, mapped to new categories
    { model: "Apple 20W org Adapter", category: "adapter", price: "1,640,000", brand: "Apple" },
    { model: "Apple Cable Type-C to Lightning", category: "cable", price: "1,000,000", brand: "Apple" },
    { model: "Apple Cable Type-C to Type-C", category: "cable", price: "1,300,000", brand: "Apple" },
    { model: "Apple Cable USB to Lightning", category: "cable", price: "800,000", brand: "Apple" },
    { model: "کاور سیلیکونی آیفون 14 Pro", category: "case_glass", brand: "Apple", description: "محافظت عالی با طراحی زیبا و رنگ‌بندی متنوع، جنس نرم و ضد لغزش.", price: "450,000", brand: "Apple" },
    { model: "پاور بانک 20000mAh شیائومی", category: "powerbank", brand: "Xiaomi", description: "ظرفیت بالا برای شارژ چندین باره گوشی، دارای پورت‌های USB-C و USB-A.", price: "900,000", brand: "Xiaomi" }
];

// Centralized product data configuration
const productsData = {
    'mobile': {
        title: 'لیست گوشی‌های iPhone 16',
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
        products: generalProducts
            .filter(p => p.category === 'headphone')
            .map(p => ({
                model: p.name,
                description: p.description,
                price: p.price,
                category: p.brand
            })),
        filters: [
            { id: 'all', text: 'همه' },
            { id: 'Sony', text: 'Sony' },
            { id: 'Xiaomi', text: 'Xiaomi' },
            { id: 'Apple', text: 'Apple' }
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
        products: generalProducts
            .filter(p => ['adapter', 'cable', 'case_glass', 'powerbank'].includes(p.category))
            .map(p => ({
                model: p.name || p.model,
                description: p.description || '',
                price: p.price,
                category: p.category,
                brand: p.brand || ''
            })),
        filters: [
            { id: 'all', text: 'همه' },
            { id: 'adapter', text: 'آداپتور' },
            { id: 'cable', text: 'کابل' },
            { id: 'case_glass', text: 'کاور و گلس' },
            { id: 'powerbank', text: 'پاور بانک' }
        ]
    },
    'smartwatch': {
        title: 'ساعت‌های هوشمند (متفرقه)',
        products: generalProducts
            .filter(p => p.category === 'smartwatch')
            .map(p => ({
                model: p.name,
                description: p.description,
                price: p.price,
                category: p.brand
            })),
        filters: [
            { id: 'all', text: 'همه' },
            { id: 'Samsung', text: 'Samsung' }
        ]
    }
};
