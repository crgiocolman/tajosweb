import '../styles/styles.css'
import Footer from './modules/_footer'

let efectoservicio;
let serviciomovil;

var w = window.innerWidth
if (w >= 800) {
    import('./modules/_servicios').then(x => {
        efectoservicio = new x.default()
    }).catch(() => console.log("No se cargo el modulo Servicios.")) 
}else{
    import('./modules/_servicios_movil').then(x => {
        serviciomovil = new x.default()
    }).catch(() => console.log("No se cargo el modulo ServiciosMovil."))
}

let footer = new Footer();

if (module.hot) {
    module.hot.accept()
}