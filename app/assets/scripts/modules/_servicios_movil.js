class ServicioMovil{
    constructor(){
        this.insertarHTML()
        this.events()
    }

    insertarHTML() {
        document.getElementById("serviciosMovil").insertAdjacentHTML('afterbegin', `
                <h1 class="serviciosMovil--titulo">SERVICIOS</h1>
                <div class="slide-inner">
                <ul class="slide-area">
                    <li>
                    <a href="#modalServicios" data-toggle="modal" descripcion="corte">
                        <img src="./assets/images/servicios/corte.png">
                    </a>
                    </li>
                    <li>
                    <a href="#modalServicios" data-toggle="modal" descripcion="corte">
                        <img src="./assets/images/servicios/corte.png">
                    </a>
                    </li>
                    <li>
                    <a href="#modalServicios" data-toggle="modal" descripcion="corte">
                        <img src="./assets/images/servicios/corte.png">
                    </a>
                    </li>
                    <li>
                    <a href="#modalServicios" data-toggle="modal" descripcion="corte">
                        <img src="./assets/images/servicios/corte.png">
                    </a>
                    </li>
                </ul>
                <a class="prev" href="#">
                    <i class="slide-anterior"></i>
                </a>
                <a class="next" href="#">
                    <i class="slide-next"></i>
                </a>
                </div>
                <div class="slide-botones">
                <div class="indicate-area"></div>
                </div>
                    
        `)
        document.getElementById("serviciosMovil").style.display = "block";
    }

    events(){
        this.Slider();
    }

    Slider(){
        console.log("estamos trabajando en ello.")
    }
}

export default ServicioMovil;