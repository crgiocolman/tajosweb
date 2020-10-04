import '../styles/styles.css'
import EfectoServicio from './modules/_servicios'

let efectoServicio = new EfectoServicio();

if (module.hot) {
    module.hot.accept()
}