import React, { useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { SiFacebook, SiInstagram, SiLinkedin} from "react-icons/si";
import { MdEmail, MdHome, MdPhone } from "react-icons/md";
import Navigation from './Navigation';
import Footer from './Footer';


const Contact = () => {

    const form = useRef();
    const [inputName, setInputName] = useState('');

    const [inputSociete, setInputSociete] = useState('');
   
    const [inputEmail, setInputEmail] = useState('');

   // comme
    const [inputSujet, setInputSujet] = useState('');

    const [message, setMessage] = useState('');
 
    const [btn, setBtn] = useState(false);
    const [show , setShow] = useState(true);

    const soumissionFormulaire = (event) => {

        event.preventDefault()

        const data = {

            inputName:inputName,
            inputSociete:inputSociete,
            inputEmail:inputEmail,
            inputSujet:inputSujet,
            message:message
        }

        setBtn(true)

         if(inputEmail&&inputSociete&&inputName&&inputSujet&&message) {

             emailjs.sendForm('service_70mdp6f', 'template_6rbvi2p', form.current, 'user_dT1SfdJrjv1SloBulGu1A')
                 .then((result) => {
                     setShow(false);
                 }, (error) => {
                     console.log('rezrza');
                 });
         }

        else {
            throw new Error("Tous les champs sont requis");
        }

       
    };
  



    return (
        <div className='contact'>
            <Navigation />

            <div className="container-fluid">
                <div className="row">
                    <div className='header_contact'>
                        <h3>Contactez-nous !</h3>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-md-4  mt-5">
                        <h4 className='display-6 contact_title'>Communiquez avec nous ! </h4>
                        <p className='fw-bold my-4'>
                            Nous sommmes le CENTRE INTERNATIONAL CHEBBI DE FORMATION "CICF", situé à Tunis, au 37 Avenue Ahmed TLLILI, Mégrine Jawhara 2033, à coté du magasin à AZIZA.
                        </p>

                        <h4 className='display-6 contact_title'>Suivez-nous</h4>
                        <div className="social_networks my-4">
                                <NavLink to=""> <SiFacebook /> </NavLink>
                                <NavLink to=""> <SiInstagram /> </NavLink>
                                <NavLink to=""> <SiLinkedin /> </NavLink>
                        </div>
                    </div>

                    <div className="col-md-1">
                        
                    </div>

                    <div className="col-md-7 mt-5 mb-5">
                        <h4 className=' display-4 contact_title'> Prenez contact avec nous</h4>

                        <p className='fw-bold my-4'>
                            Pour toute demande d'information ou pour obtenir la réponse à ta question, nous sommes là pour toi. Ecris-nous !
                        </p>
                        
                        {show == true ? <form ref={form} id="form">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group mb-3">
                                        <input type="text" name='inputName' className={`form-control ${btn === true && inputName.trim().length ===0 ? "is-invalid" : ''}`} onChange={e=>setInputName(e.target.value,)} id='inputName' placeholder='Nom / Prénom' />
                                        {btn === true && inputName.trim().length === 0 ? <div className="text-danger " > champs obligatoire </div> : ""}

                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input type="email" name="inputEmail" className={`form-control ${btn === true && inputEmail.trim().length ===0 ? "is-invalid" : ''}`} onChange={e => setInputEmail(e.target.value)} id='email' placeholder='Email' />
                                        {btn === true && inputEmail.trim().length === 0? <div className="text-danger " > champs obligatoire </div> : ""}

                                    </div>
                                </div>
                            </div>

                            <div className="row mt-3">
                                <div className="col-md-6">
                                    <div className="form-group mb-3">
                                        <input type="text" name='inputSociete' className={`form-control ${btn === true && inputSociete.trim().length ===0 ? "is-invalid" : ''}`} onChange={e => setInputSociete(e.target.value)} id='societe' placeholder='Téléphone' />
                                        {btn === true && inputSociete.trim().length === 0  ? <div className="text-danger " > champs obligatoire </div> : ""}
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="form-group">

                                        <input type="email" name='inputSujet' className={`form-control ${btn === true && inputSujet.trim().length ===0 ? "is-invalid" : ''}`} onChange={e => setInputSujet(e.target.value)} id='message' placeholder='Sujet' />
                                        {btn === true && inputSujet.trim().length === 0 ? <div className="text-danger " > champs obligatoire </div> : ""}
                                    </div>

                                </div>
                            </div>

                            <div className="row mt-3 mb-3">
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <textarea name="message" id="inputMessage" className={`form-control ${btn === true && message.trim().length ===0 ? "is-invalid" : ''}`} onChange={e => setMessage(e.target.value)} placeholder='Message' rows="10"></textarea>
                                        {btn === true && message.trim().length === 0 ? <div className="text-danger " > champs obligatoire </div> : ""}
                                    </div>
                                </div>
                            </div>

                            <div>
                                <button onClick={soumissionFormulaire} d="soumissionFormulaire" className="btnEnvoyer" >Envoyer Message</button>
                            </div>

                 </form>
                    : <div className='msgSuccess'>Merci de nous avoir contacté ! Nous vous répondrons dès que possible.</div> }
                    </div>
                </div>


                <div className="row mb-5">
                    <h3 className="display-6 text-center fw-bold mt-5">Réserve ta place dès maintenant</h3>
                    <h1 className="display-2 text-center mb-5">Direction : Ta carrière professionnelle ! </h1>

                    <div className="col-md-5 mt-3">
                        <img src="/../img/banniere.jpg" alt="" className='img-contact'/>
                    </div>
                    <div className="col-md-2"></div>
                    <div className="col-md-5 mb-5">
                        <h4 className='fw-bold'>CICF Centre International Chebbi de Formation</h4>
                        <h1 className='my-5' >Coordonnées</h1>
                        <div className="details">
                            <div className="detailItem">
                                <span className="itemKey"> <MdPhone /> </span>
                                <span className="itemValue">95 23 19 18</span>
                            </div>
                            <div className="detailItem">
                                <span className="itemKey"> <MdEmail /> </span>
                                <span className="itemValue">contact@cicf-formation.com</span>
                            </div>
                            <div className="detailItem">
                                <span className="itemKey"> <MdHome /> </span>
                                <span className="itemValue">37, Avenue Ahmed TLILI - Cité Jawhara, Mégrine 2033 , Tunis - Tunisie.</span>
                            </div>
                        </div>

                        <h1 className='my-5'>Les heures d'ouvertures</h1>
                        <h3>Pour les visiteurs</h3>
                        <div className="details">
                            <div className="detailItem">
                                <span className="itemKey">Lundi à Vendredi : </span>
                                <span className="itemValue">De 08h à 20h</span>
                            </div>
                            <div className="detailItem">
                                <span className="itemKey">Samedi </span>
                                <span className="itemValue">De 08 à 17h</span>
                            </div>
                            <div className="detailItem">
                                <span className="itemKey">Dimanche </span>
                                <span className="itemValue">De 08h30 à 14h</span>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid mb-5">
                <div className="row">
                    <h4 className='display-6 text-center contact_title mb-5'>Trouvez-nous ! </h4>
                    <div className="text-center">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3195.6608291175885!2d10.228738714835337!3d36.77870327661003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd35f16c25ab89%3A0x73364ec6e9e7ea14!2sCentre%20international%20Chebbi%20de%20formation%20(CICF)!5e0!3m2!1sfr!2stn!4v1669644053198!5m2!1sfr!2stn" ></iframe>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Contact;