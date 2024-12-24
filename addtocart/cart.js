let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

cartItems = cartItems.map(item => ({
    image: item.image || "../images/product-1.jpg",
    title: item.title || "Unnamed Product",
    price: Number(item.price) || 0,
    quantity: Number(item.quantity) || 1
}));

function renderCartItems() {
    const tableBody = document.querySelector("#cartTable");
    tableBody.innerHTML = `
        <thead>
            <tr>
                <th>Product</th>
                <th>Quantity</th>
                <th>Subtotal</th>
            </tr>
        </thead>
    `;

    if (cartItems.length === 0) {
        tableBody.innerHTML += `<tr><td colspan="3" style="text-align: center;">Your cart is empty.</td></tr>`;
        updateTotals();
        return;
    }

    cartItems.forEach((item, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>
                <div class="cart-info">
                    <img src="${item.image}" alt="${item.title}" style="width: 50px; height: 50px;">
                    <div>
                        <p>${item.title}</p>
                        <sub>Price: ₹${item.price.toFixed(2)}</sub>
                        <br>
                        <a href="#" onclick="removeItem(${index})">Remove</a>
                    </div>
                </div>
            </td>
            <td>
                <div class="quantity-controls">
                    <button onclick="decrementQuantity(${index})">-</button>
                    <span>${item.quantity}</span>
                    <button onclick="incrementQuantity(${index})">+</button>
                </div>
            </td>
            <td>₹${(item.price * item.quantity).toFixed(2)}</td>
        `;
        console.log(item.image)
        tableBody.appendChild(row);
    });

    updateTotals();
}

function incrementQuantity(index) {
    cartItems[index].quantity += 1;
    saveCartToLocalStorage();
    renderCartItems();
}

function decrementQuantity(index) {
    if (cartItems[index].quantity > 1) {
        cartItems[index].quantity -= 1;
        saveCartToLocalStorage();
        renderCartItems();
    } else {
        Swal.fire ({
            title: "Quantity cannot be zero",
            text: "To remove the item, click 'Remove'.",
            icon: "info",
            confirmButtonColor: "#3085d6",
        });
    }
}

function updateTotals() {
    const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    const tax = subtotal * 0.18;
    const total = subtotal + tax;

    document.getElementById("subtotal").textContent = `₹${subtotal.toFixed(2)}`;
    document.getElementById("tax").textContent = `₹${tax.toFixed(2)}`;
    document.getElementById("total").textContent = `₹${total.toFixed(2)}`;
}

function removeItem(index) {
    Swal.fire({
        title: "Are you sure?",
        text: "Do you want to remove this item from your cart?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, remove it!"
    }).then(result => {
        if (result.isConfirmed) {
            cartItems.splice(index, 1);
            saveCartToLocalStorage();
            renderCartItems();
            Swal.fire("Removed!", "The item has been removed from your cart.", "success");
        }
    });
}

function showLoading() {
    if(cartItems.length === 0) {
        Swal.fire({
            title: 'Cart is empty!',
            text: 'Please add items to your cart before placing an order...',
            icon: "error",
            confirmButtonColor: "#3085d6",
        });
        return;
    }
    Swal.fire({
        title: 'Processing...',
        text: 'Please wait while your order is being placed.',
        timer: 2000,
        showConfirmButton: false,
        willClose: () => {
            localStorage.removeItem("cartItems");
            window.location.href = "../buyNow/buynow.html";
        },
    });
}


function saveCartToLocalStorage() {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
}

document.addEventListener("DOMContentLoaded", renderCartItems);