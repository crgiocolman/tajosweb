import '../styles/styles.css'
import Header from './modules/_header'
import Footer from './modules/_footer'


let efectoservicio;
let serviciomovil;

var w = window.innerWidth

/* Servicios */
if (w >= 800) {
    import('./modules/_servicios').then(x => {
        efectoservicio = new x.default()
    }).catch(() => console.log("No se cargo el modulo Servicios.")) 
}else{
    import('./modules/_servicios_movil').then(x => {
        serviciomovil = new x.default()
    }).catch(() => console.log("No se cargo el modulo ServiciosMovil."))
}

let header = new Header();
let footer = new Footer();



if (module.hot) {
    module.hot.accept()
}