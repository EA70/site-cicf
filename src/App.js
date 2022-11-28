import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Apropos from './Components/Apropos';
import ChoixLangue from './Components/ChoixLangue';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import ListLangues from './Components/ListLangues';
import Navigation from './Components/Navigation';
import Home from './Pages/Home';
import Home_English from './Pages/English/Home_English';
import Home_Arabic from './Pages/Arabic/Home_Arabic';
import SocialNetwork from './Components/SocialNetwork';
import CategorieProgramme from './Pages/CategorieProgramme';
import Cat_langues from './Pages/Cat_langues';
import Cat_Informatique from './Pages/Cat_Informatique';
import Cat_Patisserie from './Pages/Cat_Patisserie';
import Cat_Gestion from './Pages/Cat_Gestion';
import Clubs from './Pages/Clubs';

import Coiffure from './Services/Coiffure';
import Comptabilite from './Services/Comptabilite';
import Informatique from './Services/Informatique';
import Langue from './Services/Langue';
import MaintenanceGSM from './Services/Maintenance_GSM';
import MaintencanceInfo from './Services/Maintenance_Informatique';
import Marketing from './Services/Marketing';
import Multimedia from './Services/Multimedia_Infographie';
import Patisserie from './Services/Patisserie';

import SoutienEnfant from './Clubs/SoutienEnfant';
import SoutienEtudiant from './Clubs/SoutienEtudiants';
import Robotique from './Clubs/Robotique';

const App = () => {
  return (
      <BrowserRouter>
            <SocialNetwork />
            <Routes>
                {/* Les routes en francais  */}
                <Route exact path='/' element={<Home />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/a-propos-de-nous' element={<Apropos />} />
                <Route path='/programmes' element={<CategorieProgramme />} />
                <Route path='/programmes/langues' element={<Cat_langues />} />
                <Route path='/programmes/informatiques' element={<Cat_Informatique />} />
                <Route path='/programmes/patisserie-coiffure' element={<Cat_Patisserie />} />
                <Route path='/programmes/gestion' element={<Cat_Gestion />} />
                <Route path='/clubs' element={<Clubs />} />

                <Route path='/formation/coiffure' element={< Coiffure />} />
                <Route path='/formation/comptabilite' element={< Comptabilite />} />
                <Route path='/formation/informatique' element={< Informatique />} />
                <Route path='/formation/langues' element={< Langue />} />
                <Route path='/formation/maintenance-gsm' element={< MaintenanceGSM />} />
                <Route path='/formation/maintenance-informatique' element={< MaintencanceInfo />} />
                <Route path='/formation/marketing' element={< Marketing />} />
                <Route path='/formation/multimedia' element={< Multimedia />} />
                <Route path='/formation/patisserie' element={< Patisserie />} />
                
                
                <Route path='/clubs/enfants' element={< SoutienEnfant />} />
                <Route path='/clubs/etudiants' element={< SoutienEtudiant />} />
                <Route path='/clubs/robotique' element={< Robotique />} />





                <Route exact path='/langues' element={<ListLangues />} />
                
                {/* Les routes en Arabe */}
                <Route exact path='/arabic' element={<Home_Arabic />} />

                {/* Les routes en Anglais */}
                <Route exact path='/english' element={<Home_English />} />
            </Routes>
  
            <ChoixLangue />
      </BrowserRouter>
  );
};

export default App;