export class BoxFooter extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
    }
  
    connectedCallback() {
      this.render();
    }
  
    render() {
      this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="src/components/footer/BoxFooter.css">
      <div class="box-footer">
        <div class="footer-logo">
          <img src="path-to-your-logo.png" alt="Brand Logo">
        </div>
        <div class="footer-column">
          <h4>About Us</h4>
          <ul>
            <li><a href="#">Our Story</a></li>
            <li><a href="#">Sustainability</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </div>
        <div class="footer-column">
          <h4>Customer Service</h4>
          <ul>
            <li><a href="#">Help & FAQs</a></li>
            <li><a href="#">Shipping & Delivery</a></li>
            <li><a href="#">Returns & Exchanges</a></li>
            <li><a href="#">Track Your Order</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>
        <div class="footer-column">
          <h4>Shop</h4>
          <ul>
            <li><a href="#">New Arrivals</a></li>
            <li><a href="#">Best Sellers</a></li>
            <li><a href="#">Sale</a></li>
            <li><a href="#">Gift Cards</a></li>
          </ul>
        </div>
        <div class="footer-column">
          <h4>Follow Us</h4>
          <ul class="social-media">
            <li><a href="#"><img src="path-to-facebook-icon.png" alt="Facebook"></a></li>
            <li><a href="#"><img src="path-to-instagram-icon.png" alt="Instagram"></a></li>
            <li><a href="#"><img src="path-to-twitter-icon.png" alt="Twitter"></a></li>
            
          </ul>
        </div>
        <div class="footer-column">
          <h4>Contact Information</h4>
          <ul>
            <li>Phone: (123) 456-7890</li>
            <li>Email: <a href="mailto:support@yourclothingstore.com">support@yourclothingstore.com</a></li>
            <li>Address: 123 Fashion St, Style City, Fashionland</li>
          </ul>
        </div>
        <div class="footer-column map-column">
          <h4>Find Us</h4>
          <div id="map">
            <!-- Embed a Google Map here -->
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.469743263348!2d-122.419415384689!3d37.77492977975926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808e51a9c1ab%3A0xb0e672d6a4da2f91!2s123%20Fashion%20St%2C%20Style%20City%2C%20Fashionland!5e0!3m2!1sen!2sus!4v1606745803041!5m2!1sen!2sus"
              width="100%"
              height="200"
              frameborder="0"
              style="border:0;"
              allowfullscreen=""
              aria-hidden="false"
              tabindex="0"></iframe>
          </div>
        </div>
        <div class="footer-column search-column">
          <h4>Search</h4>
          <form>
            <input type="text" placeholder="Search our store" />
            <button type="submit">Search</button>
          </form>
        </div>
        <div class="footer-copyright">
          <p>&copy; 2024 Your Clothing Store. All rights reserved.</p>
        </div>
      </div>

      `;
    }
  }
  
  customElements.define('box-footer', BoxFooter);
  