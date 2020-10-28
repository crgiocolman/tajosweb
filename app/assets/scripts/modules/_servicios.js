class EfectoServicio {
    constructor() {
        this.insertarHTML()
        this.contenedorServicio = document.querySelectorAll(".caja")
        this.events()
    }

    insertarHTML() {
        document.getElementById("serviciosNormal").insertAdjacentHTML('afterbegin', `
                <div class="servicios" id="servicios">
                    <div class="grid-container">
                    <div class="grid-item grid-principal">
                        <h1 class="tituloServicio" translate="yes" tituloServicio="Tajos">
                        Tajos</h1>
                        <p class="descripcionServicio"
                        descripcionServicio="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure deleniti quidem minus voluptatibus repellendus error, excepturi quam, iste vitae tenetur fugiat possimus in. In iure cum facilis, saepe, libero accusantium.">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure deleniti quidem minus voluptatibus
                        repellendus error, excepturi quam, iste vitae tenetur fugiat possimus in. In iure cum facilis, saepe,
                        libero accusantium.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure deleniti quidem minus voluptatibus
                        repellendus error, excepturi quam, iste vitae tenetur fugiat possimus in. In iure cum facilis, saepe,
                        libero accusantium.</p>
                    </div>
            
                    <div class="grid-item caja" data-toggle="modal" data-target="#modalServicios">
                        <figure class="text-center myitem">
                        <h1 descripcion="Cortamos el cabello!!" class="idServicio">Cabello</h1>
                        </figure>
                        <img src="./assets/images/servicios/corte.png" class="img-fluid" width="100%">
                    </div>
            
                    <div class="grid-item caja" data-toggle="modal" data-target="#modalServicios">
                        <figure class="text-center myitem">
                        <h1 descripcion="Pigmentacion" class="idServicio">Pigmentacion</h1>
                        </figure>
                        <img src="./assets/images/servicios/pigmentacion.png" class="img-fluid" width="100%">
                    </div>
            
                    <div class="grid-item caja" data-toggle="modal" data-target="#modalServicios">
                        <figure class="text-center myitem">
                        <h1 descripcion="Ceja" class="idServicio">Ceja</h1>
                        </figure>
                        <img src="./assets/images/servicios/cejas.png" class="img-fluid" width="100%">
                    </div>
            
                    <div class="grid-item caja" data-toggle="modal" data-target="#modalServicios">
                        <figure class="text-center myitem">
                        <h1 descripcion="Barba" class="idServicio">Barba</h1>
                        </figure>
                        <img src="./assets/images/servicios/barba.png" class="img-fluid" width="100%">
                    </div>
            
                    </div>
                </div> 
        `)
        document.getElementById("serviciosNormal").style.display = "block";
    }

    events() {
        this.contenedorServicio.forEach(el => el.addEventListener("mouseover", () => {
            this.IncluirEfecto(el)
        }))
        this.contenedorServicio.forEach(el => el.addEventListener("mouseout", () => {
            this.QuitarEfecto(el)
        }))
    }

    IncluirEfecto(el) {
        console.log(el)
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

