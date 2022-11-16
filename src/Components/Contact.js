import React, { useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { SiFacebook, SiInstagram, SiLinkedin} from "react-icons/si";


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

             emailjs.sendForm('service_hh485o3', 'template_fzqhsce', form.current, '222k-fNR9PUFFCLdx')
                 .then((result) => {
                     setShow(false);
                 }, (error) => {
                     console.log('rezrza');
                 });
         }

        else {
            throw new Error("tous les champs sont requis");
        }

       
    };
  



    return (
        <div className='contact'>

            <div className="container-fluid">
                <div className="row">
                    <div className='header_contact'>
                        <h3>Contact</h3>
                        <nav>
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"> <NavLink to="/" className="text-decoration-none text-white ">Home</NavLink> </li>
                                <li className="breadcrumb-item active" aria-current="page" > Contact </li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-md-4  mt-5">
                        <h4 className='display-6 contact_title'>Communique avec nous ! </h4>
                        <p className='fw-bold my-4'>
                            Nous sommmes le CENTRE INTERNATIONAL CHEBBI DE FORMATION "CICF", situé à Tunis, au 37 Avenue Ahmed TLLILI, Mégrine Jawhara, à coté du magasin à AZIZA.
                        </p>

                        <h4 className='display-6 contact_title'>Suis nous</h4>
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
                    : <div className='msgSuccess'>Merci de nous avoir contacté ! Nous reviendrons vers vous rapidement.</div> }
                    </div>
                </div>


                <div className="row mb-5">
                    <h3 className="display-6 text-center fw-bold mt-5">Réserve ta place dès maintenant</h3>
                    <h1 className="display-2 text-center mb-5">Direction : Ta carrière professionnelle ! </h1>

                    <div className="col-md-6">
                        image ici
                    </div>
                    <div className="col-md-6 mb-5">
                        <h4>Centre de Mégrine</h4>
                        <h1>Coordonnées</h1>
                        <div className="coordone">
                            <span>Mobile : 95 23 19 18</span>
                            <span>Email : </span>
                        </div>
                        <h1>Heure d'ouvertures</h1>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Contact;