import React from 'react';
import { NavLink } from 'react-router-dom';
import Banniere from '../Components/Banniere';
import Navigation from '../Components/Navigation';
import { MdKeyboardArrowRight } from "react-icons/md";
import Reload from "../Reload";
import Footer from '../Components/Footer';

const Home = () => {
    return (
        <div className='home'>
           
            <Navigation />
            <Banniere />

            <div className="container mt-5 mb-5">
                <div className="row mt-5 mb-5">
                    <div className="col-md-5">
                        <img src="/../img/c.jpg" alt="" className='img-enseignant'/>   
                    </div>
                    <div className="col-md-1"></div>
                    <div className="col-md-6 mb-5">
                        <h1 className="fw-bold display-4">Des enseignants qualifiés</h1>
                        <h3 className='mb-5'>qui t'aident et t'enseignent les réalités du métier, des équipements comme sur le terrain ... Ici, tout prend son sens !</h3>

                        <NavLink to="/programmes" onClick={Reload } className='btn-pgrm mt-5'>Decouvre nos formations <MdKeyboardArrowRight /> </NavLink>
                        
                    </div>
                </div>
            </div>

            <div className="container mt-5 mb-5">
                <div className="row">
                    <div className="col-md-6 mb-5">
                        <h1 className="display-2">Votre reussite commence avec nous ... </h1>
                        <h3 className='mb-5'>Le centre de Chebbi de Formation assure ton avenir professionnel et ce, de manière sûr ... </h3>
                        <NavLink onClick={Reload }  to="/contact" className='btn-pgrm mt-5'>Contactez-nous<MdKeyboardArrowRight /> </NavLink>
                    </div>
                    <div className="col-md-6">
                        <img src="/../img/pp.jpg" alt="" className='img-enseignant'/>  
                    </div>
                </div>
            </div>

            <div className="container-fluid mb-5 avantages">
                <div className="row mb-4">
                    <div className="col-md-8">
                        <h1 className="display-2">Au CICF, les avantages sont énormes <MdKeyboardArrowRight /> </h1>
                    </div>
                    <div className="col-md-4">
                        {/* <img src="/../img/banRev.png" alt="" width="100" className='img-enseignant'/>   */}
                    </div>
                </div>

                <div className="avantages-cicf">
                    <div className="row">
                        <div className="col-md-4 a p-5">
                            <h4 className="display-6">ENSEIGNANTS</h4>
                            <p>
                            Chaque enseignant est un professionnel toujours actif dans son champ d’expertise. Ce qui signifie que la matière enseignée te montre les réalités du métier. Elle est à jour, concrète et utile!
                            </p>
                        </div>
                        <div className="col-md-4 p-5">
                            <h4 className="display-6">EQUIPEMENTS</h4>
                            <p>
                            Dans nos laboratoires et locaux, c’est comme si tu étais sur le terrain. Nous utilisons des équipements de pointe pour un apprentissage plus performant et plus près de la réalité en milieu de travail. 
                            </p>
                            
                            <NavLink to="" onClick={Reload } className="text-center text-decoration-none text-white fw-bold border p-3">Visitez-nos laboratoires</NavLink>
                        </div>
                        <div className="col-md-4 c p-5">
                            <h4 className="display-6">AIDE</h4>
                            <p>
                            Nos étudiants évoluent dans de petits groupes. Tes professeurs te connaissent bien. Ils sont présents, dévoués et qualifiés pour t’accompagner avec brio dans tes études collégiales et l’obtention de ton diplôme.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mb-5">
                <div className="row mb-5">
                    <h1 className="display-1 fw-bold">Bienvenu (e) au Centre International Chebbi de Formation</h1>

                    <div className="col-md-8 mx-auto">
                        <p className='display-6 mb-5'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat distinctio qui atque praesentium aliquid laudantium id repudiandae aliquam, nemo voluptatum assumenda nihil, rerum dolorum omnis perferendis illum in quam quis doloremque beatae officiis! Repellendus natus, at numquam iste dolor placeat?
                        </p>

                        <NavLink to="/programmes" onClick={Reload } className='btn-pgrm mt-5'>Decouvre nos formations <MdKeyboardArrowRight /> </NavLink>

                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Home;