import Glider from '../modules/glider.min.js'

class ServicioMovil{
    constructor(){
        this.insertarHTML()
        this.Slider()
    }

    insertarHTML() {
        document.getElementById("serviciosMovil").insertAdjacentHTML('afterbegin', `
        <div class="carousel">
            <div class="carousel__contenedor">
                <button aria-label="Anterior" class="carousel__anterior" >
                    <i class="fas fa-angle-left"></i>
                </button>

            <div class="carousel__lista">
                <div class="carousel__elemento">
                <img src="./assets/images/servicios/barba.png" alt="barba">
                <p>Barba</p>
                </div>
                <div class="carousel__elemento">
                <img src="./assets/images/servicios/corte.png" alt="corte">
                <p>Corte</p>
                </div>
                <div class="carousel__elemento">
                <img src="./assets/images/servicios/pigmentacion.png" alt="pigmentacion">
                <p>Pigmentacion</p>
                </div>
                <div class="carousel__elemento">
                <img src="./assets/images/servicios/cejas.png" alt="cejas">
                <p>Cejas</p>
                </div>
            </div>

            <button aria-label="Siguiente" class="carousel__siguiente" >
                <i class="fas fa-angle-right"></i>
            </button>
            </div>

            <div role="tablist" class="carousel__indicadores"></div>
        </div>
                    
        `)
        document.getElementById("serviciosMovil").style.display = "block";
    }

    Slider(){
    new Glider(document.querySelector('.carousel__lista'), {
        slidesToShow: 'auto',
        slidesToScroll: 'auto',
        itemWidth: 150,
        rewind: true,
        draggable: true,
        dragVelocity: 3,
        dots: '.carousel__indicadores',
        arrows: {
        prev: '.carousel__anterior',
        next: '.carousel__siguiente'
        }
    });
    }
}

export default ServicioMovil;