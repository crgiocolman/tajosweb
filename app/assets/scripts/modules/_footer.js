class Footer {
    constructor(){
        this.InsertarFooter()
    }

    InsertarFooter(){
        document.body.insertAdjacentHTML('beforeend', `
            <footer>
            <div class="container-four">
            <div class="son-two">
                <ul class="son-of-son-two">
        
                <li class="lista">
                    <Link to='footer'>
                    <i class="fab fa-facebook-f hola"></i>
                    </Link>
                </li>
        
                <li class="lista">
                    <Link to='footerr'>
                    <i class="fab fa-twitter hola"></i>
                    </Link>
                </li>
        
                <li class="lista">
                    <Link to='footer'>
                    <i class="fab fa-youtube hola"></i>
                    </Link>
                </li>
        
        
                <li class="lista">
                    <Link to='footer'>
                    <i class="fab fa-instagram hola"></i>
                    </Link>
                </li>
        
                </ul>
            </div>
            </div>
        
            <div class="footer">
            <div class="footer--extra"></div>
            <div class="footer--son-one">
                <a class="footer--son-of-son-one">
        
                <img src="assets/images/logoTajosWhite.png" alt="tajoslogo" class="footer--logofooter" />
        
                </a>
            </div>
            <div class="son-two">
        
                <ul class="son-of-son-two">
        
                <li class="lista">
                    <Link to='footer'>
                    <i class="fab fa-facebook-f hola"></i>
                    </Link>
                </li>
        
                <li class="lista">
                    <Link to='footerr'>
                    <i class="fab fa-twitter hola"></i>
                    </Link>
                </li>
        
                <li class="lista">
                    <Link to='footer'>
                    <i class="fab fa-youtube hola"></i>
                    </Link>
                </li>
        
        
                <li class="lista">
                    <Link to='footer'>
                    <i class="fab fa-instagram hola"></i>
                    </Link>
                </li>
        
                </ul>
        
            </div>
        
            </div>
        
        
            <div class="container-two">
            <hr class="son-one" />
            </div>
        
        
            <div class="container-three">
            <div class="son-one">
                <a>Copyright ©2020.</a><a> Todos los derechos reservados.</a>
            </div>
            <div class="son-two">
                <a>sacst</a>
            </div>
            </div>
        </footer>
        `)
    }
}

export default Footer;