document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const mainNav = document.getElementById('main-nav');
    const navLinks = document.querySelectorAll('.nav-link');
    const backToTopButton = document.getElementById('back-to-top');
    const accordionTitles = document.querySelectorAll('.accordion-title');
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
    const footerTitles = document.querySelectorAll('.footer-column-title');

    // --- Navigation & Header Logic ---
    menuToggle.addEventListener('click', () => {
        mainNav.classList.toggle('active');
        if (!mainNav.classList.contains('active')) {
            document.querySelectorAll('.dropdown.active-dropdown').forEach(d => d.classList.remove('active-dropdown'));
        }
    });

    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', (e) => {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                const parentDropdown = toggle.closest('li.dropdown');
                document.querySelectorAll('nav .dropdown').forEach(d => {
                    if (d !== parentDropdown) d.classList.remove('active-dropdown');
                });
                parentDropdown.classList.toggle('active-dropdown');
            }
        });
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                mainNav.classList.remove('active');
                document.querySelectorAll('.dropdown.active-dropdown').forEach(d => d.classList.remove('active-dropdown'));
            }
        });
    });

    // --- Scroll & Back to Top Logic ---
    window.addEventListener('scroll', () => {
        if (window.scrollY > 200) {
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    });

    backToTopButton.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // --- FAQ & Footer Accordion Logic (Combined) ---
    const allAccordionTitles = [...accordionTitles, ...footerTitles];
    allAccordionTitles.forEach(title => {
        title.addEventListener('click', () => {
            const content = title.nextElementSibling;
            const isActive = title.classList.contains('active');

            const isFooterAccordion = title.closest('footer');
            const shouldToggle = !isFooterAccordion || window.innerWidth <= 768;

            if (shouldToggle) {
                const titlesToClose = isFooterAccordion ? footerTitles : accordionTitles;
                titlesToClose.forEach(t => {
                    if (t !== title) {
                        t.classList.remove('active');
                        t.nextElementSibling.classList.remove('active');
                    }
                });

                if (!isActive) {
                    title.classList.add('active');
                    content.classList.add('active');
                } else {
                    title.classList.remove('active');
                    content.classList.remove('active');
                }
            }
        });
    });


    // --- Product List Page Logic ---
    const productListContainer = document.querySelector('.product-list-container');
    const pageTitleElement = document.getElementById('page-title');
    const filterContainer = document.getElementById('filter-container');

    if (productListContainer && productsData) {
        const urlParams = new URLSearchParams(window.location.search);
        const categoryKey = urlParams.get('type') || 'mobile';
        const initialFilter = urlParams.get('filter');
        const initialBrand = urlParams.get('brand');
        
        const categoryData = productsData[categoryKey];

        if (categoryData) {
            pageTitleElement.textContent = categoryData.title;

            if (filterContainer && categoryData.filters) {
                filterContainer.innerHTML = '';
                categoryData.filters.forEach(filter => {
                    const button = document.createElement('button');
                    button.textContent = filter.text;
                    button.classList.add('filter-btn');
                    button.dataset.filterId = filter.id;
                    filterContainer.appendChild(button);
                });
            }

            const renderProducts = (productsToRender) => {
                productListContainer.innerHTML = '';
                if (productsToRender.length === 0) {
                    productListContainer.innerHTML = '<p class="no-products-message">محصولی در این دسته بندی یافت نشد.</p>';
                    return;
                }

                productsToRender.forEach(product => {
                    const productItem = document.createElement('a');
                    productItem.classList.add('product-item');
                    productItem.href = '#';
                    
                    let productDetails = '';
                    if (categoryKey === 'mobile') {
                        productDetails = `
                            <h3>${product.model}</h3>
                            <p><strong>حافظه:</strong> ${product.storage}</p>
                            <p><strong>رنگ:</strong> ${product.color}</p>
                        `;
                    } else if (categoryKey === 'applewatch') {
                        const yearInfo = product.year ? ` (${product.year})` : '';
                        productDetails = `
                            <h3>${product.model} ${product.size}${yearInfo}</h3>
                            <p><strong>رنگ:</strong> ${product.color}</p>
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

            const filterAndDisplayProducts = (filterId) => {
                const currentProducts = categoryData.products || [];
                let filteredProducts = [];

                if (filterId === 'all') {
                    filteredProducts = currentProducts;
                } else if (categoryKey === 'mobile' || categoryKey === 'headphone') {
                    filteredProducts = currentProducts.filter(p => p.brand === filterId);
                } else {
                    filteredProducts = currentProducts.filter(p => p.category === filterId);
                }

                renderProducts(filteredProducts);
            };

            document.querySelectorAll('.filter-btn').forEach(button => {
                button.addEventListener('click', () => {
                    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
                    button.classList.add('active');
                    filterAndDisplayProducts(button.dataset.filterId);
                });
            });

            let activeFilterId = 'all';
            if (initialBrand) {
                activeFilterId = initialBrand;
            } else if (initialFilter) {
                activeFilterId = initialFilter;
            }
            
            const activeFilterButton = document.querySelector(`.filter-btn[data-filter-id="${activeFilterId}"]`);
            if (activeFilterButton) {
                activeFilterButton.classList.add('active');
                filterAndDisplayProducts(activeFilterId);
            } else {
                const allButton = document.querySelector(`.filter-btn[data-filter-id="all"]`);
                if (allButton) {
                    allButton.classList.add('active');
                    filterAndDisplayProducts('all');
                } else {
                    filterAndDisplayProducts('all'); 
                }
            }
        }
    }
});
