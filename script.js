document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const mainNav = document.getElementById('main-nav');
    const backToTop = document.getElementById('back-to-top');
    const dropdownToggles = document.querySelectorAll('nav .dropdown > .dropdown-toggle');

    // تابع برای مدیریت منوی همبرگری
    menuToggle.addEventListener('click', () => {
        mainNav.classList.toggle('active');
        if (!mainNav.classList.contains('active')) {
            document.querySelectorAll('.dropdown.active-dropdown').forEach(d => d.classList.remove('active-dropdown'));
        }
    });

    // تابع برای مدیریت زیرمنوهای کشویی در موبایل
    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', (e) => {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                const parentDropdown = toggle.parentElement;
                document.querySelectorAll('nav .dropdown').forEach(d => {
                    if (d !== parentDropdown) d.classList.remove('active-dropdown');
                });
                parentDropdown.classList.toggle('active-dropdown');
            }
        });
    });

    // بستن منو پس از کلیک بر روی لینک
    document.querySelectorAll('nav .nav-link').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                mainNav.classList.remove('active');
                document.querySelectorAll('.dropdown.active-dropdown').forEach(d => d.classList.remove('active-dropdown'));
            }
        });
    });

    // تابع برای مدیریت دکمه برگشت به بالا
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });

    // تابع برای فعال کردن لینک منوی ناوبری
    function setActiveNavLink() {
        const currentPath = window.location.pathname.split('/').pop();
        const urlParams = new URLSearchParams(window.location.search);
        const hash = window.location.hash;

        document.querySelectorAll('nav ul li a.nav-link').forEach(link => {
            link.classList.remove('active-nav-link');
        });

        if (currentPath === 'index.html' || currentPath === '') {
            if (hash) {
                document.querySelector(`nav ul li a[href="index.html${hash}"]`)?.classList.add('active-nav-link');
            } else {
                document.querySelector('nav ul li a[href="index.html"]')?.classList.add('active-nav-link');
            }
        } else if (currentPath === 'products-list.html') {
            const typeParam = urlParams.get('type');
            const brandParam = urlParams.get('brand');
            const filterParam = urlParams.get('filter');
            
            // پیدا کردن لینک دقیق
            let selector = `nav ul li a[href*="?type=${typeParam}"]`;
            if (brandParam) selector += `[href*="brand=${brandParam}"]`;
            if (filterParam) selector += `[href*="filter=${filterParam}"]`;

            const specificProductLink = document.querySelector(selector);
            if (specificProductLink) {
                specificProductLink.classList.add('active-nav-link');
                const parentDropdownToggle = specificProductLink.closest('.dropdown')?.querySelector('.dropdown-toggle');
                if (parentDropdownToggle) {
                    parentDropdownToggle.classList.add('active-nav-link');
                }
            } else {
                // اگر لینک دقیق پیدا نشد، لینک اصلی دسته‌بندی را فعال می‌کنیم
                const parentToggle = document.querySelector(`nav ul li a.nav-link.dropdown-toggle[href*="?type=${typeParam}"]`);
                if (parentToggle) {
                    parentToggle.classList.add('active-nav-link');
                }
            }
        }
    }

    // اجرای تابع setActiveNavLink در زمان بارگذاری و تغییر هش URL
    setActiveNavLink();
    window.addEventListener('hashchange', setActiveNavLink);

    // --- کدهای مخصوص صفحه لیست محصولات ---
    if (document.getElementById('product-list')) {
        const productListContainer = document.getElementById('product-list');
        const filterButtonsContainer = document.getElementById('filter-buttons-container');
        const pageTitle = document.getElementById('page-title');

        const urlParams = new URLSearchParams(window.location.search);
        let productType = urlParams.get('type') || '';
        let initialFilter = urlParams.get('filter') || 'all';
        let initialBrand = urlParams.get('brand');

        if (productsData[productType]) {
            pageTitle.textContent = productsData[productType].title;

            // ساخت دکمه‌های فیلتر
            if (productsData[productType].filters) {
                filterButtonsContainer.innerHTML = '';
                productsData[productType].filters.forEach(filter => {
                    const button = document.createElement('button');
                    button.classList.add('filter-btn');
                    button.dataset.filter = filter.id;
                    button.textContent = filter.text;
                    filterButtonsContainer.appendChild(button);
                });
                filterButtonsContainer.style.display = 'flex';
            } else {
                filterButtonsContainer.style.display = 'none';
            }

            // مدیریت فیلتر محصولات
            const filterAndDisplayProducts = (filterCategory, productType, brand) => {
                const currentProductsArray = productsData[productType]?.products || [];
                let filtered = [];

                if (brand) {
                     filtered = currentProductsArray.filter(p => p.brand === brand);
                } else if (filterCategory === 'all') {
                    filtered = currentProductsArray;
                } else {
                    filtered = currentProductsArray.filter(product => product.category === filterCategory);
                }
                
                renderProducts(filtered, productType);
            };

            // رندر محصولات
            const renderProducts = (productsToRender, productType) => {
                productListContainer.innerHTML = '';
                if (productsToRender.length === 0) {
                    productListContainer.innerHTML = '<p style="text-align: center; color: #777;">محصولی یافت نشد.</p>';
                    return;
                }

                productsToRender.forEach(product => {
                    const productItem = document.createElement('a');
                    productItem.href = '#';
                    productItem.classList.add('product-item');

                    let productDetails = '';
                    if (productType === 'mobile') {
                        productDetails = `
                            <h3>${product.model} ${product.storage} ${product.color}</h3>
                            <p><strong>منطقه:</strong> ${product.region}</p>
                        `;
                    } else if (productType === 'applewatch') {
                        const yearInfo = product.year ? ` (${product.year})` : '';
                        productDetails = `
                            <h3>${product.model} ${product.size} ${product.color}${yearInfo}</h3>
                            <p><strong>گارانتی:</strong> ${product.guaranty ? 'دارد' : 'تماس بگیرید'}</p>
                        `;
                    } else {
                        productDetails = `
                            <h3>${product.model}</h3>
                            <p>${product.description || ''}</p>
                        `;
                    }

                    productItem.innerHTML = `
                        <div class="product-item-image">
                            <img src="${product.image}" alt="${product.model}">
                        </div>
                        <div class="product-item-details">
                            ${productDetails}
                            <div class="product-item-price">${product.price} تومان</div>
                        </div>
                    `;
                    productListContainer.appendChild(productItem);
                });
            };

            // افزودن ایونت‌لیسنر برای دکمه‌های فیلتر
            document.querySelectorAll('.filter-btn').forEach(button => {
                button.addEventListener('click', () => {
                    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
                    button.classList.add('active');
                    filterAndDisplayProducts(button.dataset.filter, productType);
                });
            });

            // اجرای اولیه فیلتر
            if (initialBrand) {
                // اگر برند در URL بود، محصولات بر اساس برند فیلتر می‌شوند
                filterAndDisplayProducts(null, productType, initialBrand);
            } else {
                // در غیر این صورت، بر اساس فیلترهای دسته بندی
                const activeFilterButton = document.querySelector(`.filter-btn[data-filter="${initialFilter}"]`);
                if (activeFilterButton) {
                    activeFilterButton.classList.add('active');
                    filterAndDisplayProducts(initialFilter, productType);
                } else {
                    const allButton = document.querySelector('.filter-btn[data-filter="all"]');
                    if (allButton) {
                        allButton.classList.add('active');
                        filterAndDisplayProducts('all', productType);
                    } else {
                        filterAndDisplayProducts(null, productType);
                    }
                }
            }
        }
    }
});
