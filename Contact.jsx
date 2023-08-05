import React from "react";
import './contact.css';
import {BsPatchCheckFill} from 'react-icons/bs'

const Contact = () => {
    return (
        <section id="contact"><h2>Contact</h2>
        <div className="contact__info">
                    <h3>Contact Information</h3>
                    <div className="contact__content">
                        <article className='contact__details'>
                            <BsPatchCheckFill className='contact__details-icon'/>
                            <div>
                            <h4>Address</h4>
                           
                            </div>
                        </article>
                        <article className='contact__details'>
                            
                            <div>
                            <h4>Aurangabad, Maharashtra</h4>
                            
                            </div>
                        </article>
                        <article className='contact__details'>
                            <BsPatchCheckFill className='contact__details-icon'/>
                            <div>
                            <h4>Email</h4>
                           
                            </div>
                        </article>
                        <article className='contact__details'>
                            
                            <div>
                            <h4>joshikalyani5242@gmail.com</h4>
                            
                            </div>
                        </article>
                    </div>

                </div>
                </section>
    )
}


export default Contact;