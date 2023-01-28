class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <div class="header">
            <div class="navbar">
                <div class="logo" onclick="window.location.href='/index.html'">
                    <img loading="lazy"  src="./assets/fins.svg" style="height:30px">
                    <span>Finswealth</span>
                </div>
                <div class="menu">
                        <a href="/index.html"><div class="menu-item">Home</div></a>
                        <a href="/finboxes.html"><div class="menu-item">Discover</div></a>
                        <!-- <a href="/index.html#about"><div class="menu-item">Learn</div></a> -->
                        <a href="/aboutus.html"><div class="menu-item">About Us</div></a>
                        <!-- <div class="menu-item">Login</div>
                        <button id="sign-up">Sign up</button> -->
                </div>
                <div id="button-icon">
                    <div id="nav-icon"></div>
                    <div id="nav-icon"></div>
                    <div id="nav-icon"></div>
                </div>
            </div>
            <div id="bottom-links" style="z-index:100; display: none;">
                <button onclick="window.location.href='/index.html'" class="bottom-menu-item">Home</button>
                <button onclick="window.location.href='/finboxes.html'" class="bottom-menu-item">Discover</button>
                <!-- <button onclick="window.location.href='/index.html#about'" class="bottom-menu-item">Learn</button> -->
                <button onclick="window.location.href='/aboutus.html'" class="bottom-menu-item">About Us</button>
                <!-- <div class="menu-item">Login</div> -->
            </div>
        </div>
        `
        let hamBtn = document.getElementById('button-icon');
        let bottomLinks = document.getElementById("bottom-links");
        hamBtn.addEventListener('click', () => {
            if(bottomLinks.style.display == 'none') bottomLinks.style.display = 'flex';
            else bottomLinks.style.display = 'none';
        })
    }
}


customElements.define('header-element', Header);