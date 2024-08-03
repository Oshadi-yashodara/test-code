export class Box extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
             <link rel="stylesheet" href="src/components/cart/Box.css">
        <div class="box">
            <h1>Cart</h1>
            <div class="cart-items">
                <!-- Example Cart Item 1 -->
                <div class="cart-item">
                    <img src="path-to-item-image.jpg" alt="Item 1 Name">
                    <div class="item-details">
                        <p class="item-name">Item 1 Name</p>
                        <p class="item-description">Description of item 1, size: Medium, color: Blue</p>
                        <p class="item-price">$49.99</p>
                        <div class="item-quantity">
                            <label for="quantity1">Quantity:</label>
                            <input type="number" id="quantity1" name="quantity1" min="1" value="1">
                        </div>
                        <p class="item-subtotal">Subtotal: $49.99</p>
                    </div>
                    <button class="remove-item">Remove</button>
                </div>

                <!-- Example Cart Item 2 -->
                <div class="cart-item">
                    <img src="path-to-item-image.jpg" alt="Item 2 Name">
                    <div class="item-details">
                        <p class="item-name">Item 2 Name</p>
                        <p class="item-description">Description of item 2, size: Large, color: Red</p>
                        <p class="item-price">$79.99</p>
                        <div class="item-quantity">
                            <label for="quantity2">Quantity:</label>
                            <input type="number" id="quantity2" name="quantity2" min="1" value="1">
                        </div>
                        <p class="item-subtotal">Subtotal: $79.99</p>
                    </div>
                    <button class="remove-item">Remove</button>
                </div>
            </div>

            <div class="cart-summary">
                <p>Subtotal: <span class="subtotal">$129.98</span></p>
                <p>Taxes: <span class="taxes">$10.40</span></p>
                <p>Shipping: <span class="shipping">$5.00</span></p>
                <p>Discount: <span class="discount">-$10.00</span></p>
                <p>Total: <span class="cart-total">$135.38</span></p>
                <button class="checkout-button">Proceed to Checkout</button>
                <button class="continue-shopping-button">Continue Shopping</button>
            </div>

            <div class="additional-info">
                <p>Estimated Delivery Date: <span class="delivery-date">Aug 10, 2024</span></p>
                <a href="#" class="save-for-later">Save for Later</a> |
                <a href="#" class="wishlist">Move to Wishlist</a>
            </div>

            <div class="security-info">
                <p>Secure Checkout with:</p>
                <img src="path-to-secure-payment-icon.png" alt="Secure Payment">
            </div>

            <div class="customer-support">
                <p>Need help? <a href="mailto:support@yourclothingstore.com">Contact Customer Support</a></p>
                <p><a href="#">Return Policy</a></p>
            </div>
        </div>
        `;
    }
}

customElements.define('cart-box', Box);