class EfectoServicio {
    constructor(){
        this.contenedorServicio = document.querySelectorAll(".caja")
        this.events()
    }

    events(){
        this.contenedorServicio.forEach(el => el.addEventListener("mouseover", () => {
            this.IncluirEfecto(el)
        }))
        this.contenedorServicio.forEach(el => el.addEventListener("mouseout", () => {
            this.QuitarEfecto(el)
        }))
    }

    IncluirEfecto(el) {
        el.querySelector("figure").classList.remove("myitem")
        el.querySelector("figure").classList.add("efecto")
        var c = el.querySelector("figure").childNodes[2].parentNode.innerText;
        var b = el.querySelector("h1").getAttribute("descripcion");
        document.querySelector(".tituloServicio").innerHTML = c;
        document.querySelector(".descripcionServicio").innerHTML = b;
    }

    QuitarEfecto(el) {
        el.querySelector("figure").classList.add("myitem")
        el.querySelector("figure").classList.remove("efecto")
        var a = document.querySelector(".tituloServicio").getAttribute("tituloServicio");
        var b = document.querySelector(".descripcionServicio").getAttribute("descripcionServicio");
        document.querySelector(".tituloServicio").innerHTML = a;
        document.querySelector(".descripcionServicio").innerHTML = b;
        }
}

export default EfectoServicio;

