import React from 'react';
import { NavLink } from 'react-router-dom';
import Banniere from '../Components/Banniere';
import { MdKeyboardArrowRight } from "react-icons/md";
import Reload from "../Reload";

const Home = () => {
    return (
        <div className='home'>
           
            { /** La bannière du site */ }
            <Banniere />

            <div className="container mt-5 mb-5">
                <div className="row mt-5 mb-5">
                    <div className="col-md-5">
                        <img src="/../img/banRev.png" alt="" className='img-enseignant'/>   
                    </div>
                    <div className="col-md-1"></div>
                    <div className="col-md-6 mb-5">
                        <h1 className="fw-bold display-4">Des enseignants qualifiés</h1>
                        <h3 className='mb-5'>qui t'aident et t'enseignent les réalités du métier, des équipements comme sur le terrain ... Ici, tout prend son sens !</h3>

                        <NavLink to="" className='btn-pgrm mt-5'>Decouvre nos formations <MdKeyboardArrowRight /> </NavLink>
                        
                    </div>
                </div>
            </div>

            <div className="container mt-5 mb-5">
                <div className="row">
                    <div className="col-md-6">
                        <h1 className="display-2">Ta reussite commence certes avec nous !</h1>
                        <h3 className='mb-5'>Le centre de Chebbi de Formation assure ton avenir professionnel et ce, de manière sûr ... </h3>
                        <NavLink onClick={Reload }  to="/contact" className='btn-pgrm mt-5'>Contactez-nous<MdKeyboardArrowRight /> </NavLink>
                    </div>
                    <div className="col-md-6">
                        <img src="/../img/banniere.jpg" alt="" className='img-enseignant'/>  
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
                </div>
            </div>
        </div>
    );
};

export default Home;