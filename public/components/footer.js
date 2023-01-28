class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <div style="">
            <div style="display: grid; grid-template-columns: 7fr 1fr 1fr; width:80vw; margin:auto; text-align: left; padding-top: 10vw; gap: 2vw;">
                <div>
                    <p style="font-size: 3vw; color: #5766F6; font-weight: 600; margin: 0; margin-bottom: 2vw">Finswealth</p>
                    <p style="max-width:70%; font-size: 1.2vw; color:#787983; margin: 0">We are making your investment journey easier than ever by making a single platform to invest in Stocks, ETF’s, Real Estate, Crypto and Bonds through our product finbox which are created & managed by leading professionals who are SEBI registered research analysts and investment advisors, through your existing broker account and crypto wallet.</p>
                </div>
                <div style="display:flex; flex-direction:column; justify-content: space-between;">
                    <div style="color:#262C6A; font-size: 1.5vw">Quick Link</div>
                    <div style="color: #424672DB; font-size: 1vw">FAQ's</div>
                    <div style="color: #424672DB; font-size: 1vw">About us</div>
                    <div style="color: #424672DB; font-size: 1vw">Learn</div>
                    <div style="color: #424672DB; font-size: 1vw">T&C</div>
                </div>
                <div style="display:flex; flex-direction:column; justify-content: space-between;">
                    <div style="color:#262C6A; font-size: 1.5vw">Contact Us</div>
                    <div style="color: #424672DB; font-size: 1vw">Terms of Use</div>
                    <div style="color: #424672DB; font-size: 1vw">Privacy Policy</div>
                    <div style="color: #424672DB; font-size: 1vw">Support</div>
                    <div style="color: #424672DB; font-size: 1vw">Location</div>
                </div>
            </div>

            <div style="height: 5vw;"></div>


            <div class="footer" style="text-align: left">
                <div class="logo" onclick="window.location.href='/index.html'">
                    <img loading="lazy"  src="./assets/fins.svg" style="max-height: 2.4vw;">
                    <span style="font-size: 1.4vw;">Finswealth</span>
                </div>
                <div class="copyright" style="font-size: 1.2vw;">© 2022 Copyright and rights reserved</div>
                <div class="footer-links">
                    <a>
                        <img
                            loading="lazy"
                            src="./assets/facebook.svg"
                            style="height: 2.2vw"
                            alt="facebook"
                        >
                    </a>
                    <a>
                        <img
                            loading="lazy"
                            src="./assets/twitter.svg"
                            style="height: 2.2vw" 
                            alt="twitter"
                        >
                    </a>
                    <a>
                        <img
                            loading="lazy"
                            src="./assets/insta.svg"
                            style="height: 2.2vw" 
                            alt="insta"
                        >
                    </a>
                    <a href="https://www.linkedin.com/company/finswealth/" target="_blank">
                        <img
                            loading="lazy"
                            src="./assets/linkedin.svg"
                            style="height: 2.2vw" 
                            alt="linkedin"
                        >
                    </a>
                </div>
            </div>
            </div>
        `
    }
}


customElements.define('footer-element', Footer);