export class BoxColor extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="src/components/signin/BoxColor.css">
        <div class="box">
            <h1>Sign In</h1>
            <form class="signin-form">
                <label for="username">Username:</label>
                <input type="text" id="username" name="username" required>
                
                <label for="password">Password:</label>
                <input type="password" id="password" name="password" required>
                
                <button type="submit" class="signin-button">Sign In</button>
            </form>
            <div class="forgot-password">
                <a href="#">Forgot your password?</a>
            </div>
            <div class="signup-info">
                <p>Don't have an account? <a href="#">Sign up here</a></p>
            </div>
        </div>
        `;
    }
}

customElements.define('box-color', BoxColor);
