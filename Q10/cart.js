function displayCart() {
    const cartGrid = document.getElementById('cartGrid');
    cartGrid.innerHTML = "";
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    cart.forEach(user => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <img src="https://i.pravatar.cc/150?img=${user.id}" alt="${user.name}">
            <h3>${user.name}</h3>
            <p>Email: ${user.email}</p>
            <button class="delete" onclick="removeFromCart(${user.id})">Delete</button>
        `;
        cartGrid.appendChild(card);
    });
}

function removeFromCart(userId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart = cart.filter(user => user.id !== userId);
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCart(); // Re-display cart after deletion
}

window.onload = () => {
    displayCart();
};
