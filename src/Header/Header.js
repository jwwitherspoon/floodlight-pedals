function Header() {
    return (
        <header>
            <a href="index.html" class="logo">
                <img id="logo-img" src="assets/img/logo-symbol.svg" alt="Floodlight Pedals Logo"/>
                <img id="logo-text" src="assets/img/logo-text.svg" alt="Floodlight Pedals Logo Text"/>
            </a>
            <i id="menu-btn" class="fa-solid fa-bars"></i>
            <div class="links">
                <a href="index.html">ABOUT</a>
                <a href="mods.html">MODS</a>
                <a href="index.html">CONTACT</a>
            </div>
        </header>
    );
}

export default Header;
