class Header {
    constructor(){
        this.toggle = document.getElementById("toggle");
        this.menu = document.querySelector(".menu");
        this.idioma = document.querySelector(".idioma");
        this.barra = document.getElementById("barra_x");
        this.sub = document.querySelectorAll(".has-submenu");
        this.events();
    }

    toggleMenu() {
        if (this.menu.classList.contains("active")) {
            
            this.menu.classList.remove("active");
            this.idioma.classList.remove("idioma-visible")
            this.idioma.classList.add("idioma");
            this.barra.classList.remove("fa-times");
            this.barra.classList.add("fa-bars");
        } else {
            this.menu.classList.add("active");
            // adds the close (x) icon
            this.idioma.classList.remove("idioma")
            this.idioma.classList.add("idioma-visible");
            this.barra.classList.remove("fa-bars");
            this.barra.classList.add("fa-times");
        }
    }

    toggleSubMenu(el) {
        if (el.querySelector(".submenu").classList.contains("submenu")) {
            el.querySelector(".submenu").classList.toggle("submenu-active")
            el.querySelector(".fa-angle-down").classList.toggle("fa-angle-up")
            var a = el.querySelectorAll(".subitem")
            a.forEach(e => e.addEventListener("click", () => this.closemenu()))   
        }
    }


    events(){
        this.toggle.addEventListener("click", () => this.toggleMenu())
        this.sub.forEach(el => el.addEventListener("click", () => this.toggleSubMenu(el)))
    }

    closemenu(){
        this.menu.classList.remove("active");
        this.barra.classList.remove("fa-times");
        this.barra.classList.add("fa-bars");
        this.idioma.classList.remove("idioma-visible")
        this.idioma.classList.add("idioma");

    }
   
}
export default Header;