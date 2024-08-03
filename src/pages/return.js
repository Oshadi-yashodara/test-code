const returnItem = () => {
    return (`
      <link rel="stylesheet" href="src/pages/return.css">
    <div class="return">
        <h1>Return</h1>
        <div class="return-info">
            <p>If you are not satisfied with your purchase, you can return items within 30 days of receipt. Please follow the instructions below to process your return.</p>
        </div>
        <form class="return-form">
            <label for="order-number">Order Number:</label>
            <input type="text" id="order-number" name="order-number" required>
            
            <label for="item-name">Item Name:</label>
            <input type="text" id="item-name" name="item-name" required>
            
            <label for="return-reason">Reason for Return:</label>
            <textarea id="return-reason" name="return-reason" rows="4" required></textarea>
            
            <button type="submit" class="submit-button">Submit Return Request</button>
        </form>
        <div class="contact-info">
            <p>For further assistance, please <a href="mailto:support@yourstore.com">contact our support team</a>.</p>
        </div>
    </div>
    `)
}

export default returnItem;