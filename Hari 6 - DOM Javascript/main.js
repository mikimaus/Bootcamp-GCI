let items = [
    ['001', 'Keyboard Logitek', 60000, 'Keyboard untuk kantoran', 'logitech.jpeg'], 
    ['002', 'Keyboard MSI', 300000, 'Keyboard gaming MSI mekanik', 'MSI.jpg'], 
    ['003', 'Mouse Genius', 50000, 'Mouse Genius biar lebih pinter', 'genius.jpg'], 
    ['004', 'Mouse Jerry', 30000, 'Mouse yang disukai kucing', 'jerry.jpg']
]

const listBarang = document.getElementById('listBarang');
const searchForm = document.getElementById('formItem');
const searchInput = document.getElementById('keyword');
const cartButton = document.getElementById('cart');

// Initialize cart count
let cartCount = 0;

function displayItems(itemsToDisplay) {
    // Clear existing content
    listBarang.innerHTML = '';

    // Loop through items array and create cards
    itemsToDisplay.forEach(item => {
        const [id, name, price, desc, image] = item;
        
        const cardHTML = `
            <div class="col-4 mt-3">
                <div class="card" style="width: 18rem;">
                    <img 
                        src="${image}" 
                        class="card-img-top"
                        style="object-fit: cover; height: 200px;"
                        alt="${name}"
                    >
                    <div class="card-body">
                        <h5 class="card-title" style="min-height: 48px;">${name}</h5>
                        <p class="card-text" style="min-height: 72px;">${desc}</p>
                        <p class="card-text"><strong>Rp ${price.toLocaleString()}</strong></p>
                        <a 
                            href="#" 
                            class="btn btn-primary btn-block"
                            onclick="addToCart('${id}')"
                        >
                            Add to Cart
                        </a>
                    </div>
                </div>
            </div>
        `;
        
        listBarang.innerHTML += cardHTML;
    });
}

// Initial display of all items
displayItems(items);

// Search input event listener
searchInput.addEventListener('input', () => {
    const keyword = searchInput.value.toLowerCase();
    
    const filteredItems = items.filter(item => {
        const [id, name, price, desc] = item;
        return name.toLowerCase().includes(keyword) || 
               desc.toLowerCase().includes(keyword);
    });
    
    displayItems(filteredItems);
});

function addToCart(itemId) {
    const item = items.find(item => item[0] === itemId);
    if (item) {
        cartCount++;
        cartButton.innerHTML = `<i class="fas fa-shopping-cart"></i>(${cartCount})`;
        console.log(`Added ${item[1]} to cart`);
    }
}
