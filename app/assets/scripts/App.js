import '../styles/styles.css'
import Footer from './modules/_footer'


let efectoservicio;
let serviciomovil;
let header;
let headermovil;

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

/* Header */
if (w >= 800) {
    import('./modules/_header').then(x => {
        header = new x.default()
    }).catch(() => console.log("No se cargo el modulo Header.")) 
}else{
    import('./modules/_header_movil').then(x => {
        headermovil = new x.default()
    }).catch(() => console.log("No se cargo el modulo HeaderMovil."))
}

let footer = new Footer();



if (module.hot) {
    module.hot.accept()
}