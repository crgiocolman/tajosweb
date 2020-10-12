class HeaderMovil {
    constructor(){
        this.InsertarHtml()
    }

    insertarHTML() {
        document.getElementById("header").insertAdjacentHTML('afterbegin', `
        <nav class="navbar">
            <a href="/" class="navbar-logo">
                <img src="assets/images/tajoslogo.png" class="logo">
            </a>
    
            <div class="menu-icon">
                <i class="fas fa-times"></i>
            </div>
    
            <ul class="nav-menu">
                <li class="nav-item">
                    <a href="/" class="nav-links">
                    Inicio
                    </a>
                </li>
                
                <li class="nav-item">
                    <a href="#sucursales" class="nav-links">
                    Sucursales
                    </a>
                </li>
                <li class="nav-item">
                    <a href="#servicios" class="nav-links">
                    Servicios
                    </a>
                </li>
                <li class="nav-item">
                    <a href="#tienda" class="nav-links">
                    Tienda
                    </a>
                </li>
                <li class="nav-item">
                    <a href="#contacto" class="nav-links">
                    Contáctenos
                    </a>
                </li>
            </ul>
            <a href="/">
                <button class="btnEs" id="esp">Es</button>
                <button class="btnEn" id="eng">En</button>
            </a>
        </nav> 
        `)
        document.getElementById("header").style.display = "block";
    }

}

export default HeaderMovil;