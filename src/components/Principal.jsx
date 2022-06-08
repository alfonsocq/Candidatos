import candidatos from './img/candidatos.png';
import planes from './img/planes.png';
import test from './img/test.png';
import { Link } from 'react-router-dom';

const Principal = () => {

    return(
        <div>
            <nav class="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" id="mainNav">
            <div class="container">
                <a class="navbar-brand" href="#page-top">VotoVerse</a>
                <button class="navbar-toggler text-uppercase font-weight-bold bg-primary text-white rounded" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i class="fas fa-bars"></i>
                </button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav ms-auto">
                        
                        <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded" href="#about">Acerca de</a></li>
                        <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded" href="#contact">Contacto</a></li>
                    </ul>
                </div>
            </div>
            </nav>

            <header class="masthead bg-primary text-white text-center">
                <div class="container d-flex align-items-center flex-column">
                    
                    <img class="masthead-avatar mb-5" src="dom.lo" alt="..." />
                    
                    <h1 class="masthead-heading text-uppercase mb-0">Voto Informado</h1>
                   
                    <div class="divider-custom divider-light">
                        <div class="divider-custom-line"></div>
                        <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                        <div class="divider-custom-line"></div>
                    </div>
                   
                    <p class="masthead-subheading font-weight-light mb-0">Encuentra la mejor informacion 
                    para las elecciones regionales y municipales 2022</p>
                </div>
            </header>
            <section class="page-section portfolio" id="portfolio">
                <div class="container">

                   <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">Secciones</h2>

                   <div class="divider-custom">
                       <div class="divider-custom-line"></div>
                       <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                       <div class="divider-custom-line"></div>
                   </div>

                   <div class="row justify-content-center">

                       <div class="col-md-6 col-lg-4 mb-5">
                           <div class="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal1">
                               <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                   <div class="portfolio-item-caption-content text-center text-white"><i class="fas fa-plus fa-3x"></i></div>
                               </div>
                               <Link className="btn btn-success" to="/all"><img class="img-fluid" src={candidatos} alt="..." /></Link>
                           </div>
                       </div>

                       <div class="col-md-6 col-lg-4 mb-5">
                           <div class="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal2">
                               <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                   <div class="portfolio-item-caption-content text-center text-white"><i class="fas fa-plus fa-3x"></i></div>
                               </div>
                               <img class="img-fluid" src={planes} alt="..." />
                           </div>
                       </div>

                       <div class="col-md-6 col-lg-4 mb-5">
                           <div class="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal3">
                               <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                   <div class="portfolio-item-caption-content text-center text-white"><i class="fas fa-plus fa-3x"></i></div>
                               </div>
                               <img class="img-fluid" src={test} alt="..." />
                           </div>
                       </div>

                       

                      

                       
                   </div>
                </div>
            </section>
        </div>
    )
    }

export default Principal;