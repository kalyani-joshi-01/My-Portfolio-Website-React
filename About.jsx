import React from "react";
import './about.css';
import ME from '../../assets/me-about.jpg';
import {FaAward} from 'react-icons/fa'
import {BsAward} from 'react-icons/bs'
import {ImFolderOpen} from 'react-icons/im'

const About = () => {
    return (
        <section id='about'>
            <h5>Get To Know</h5>
            <h2>About Me</h2>
            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME} alt="About Img" />
                    </div> 
                </div>

                <div className="about__content">
                    <div className="about__cards">
                        <article className='about__card'>
                            <FaAward className='about__icon'/>
                            <h5>Experience</h5>
                            <small>6 months Working</small>
                        </article>

                        <article className='about__card'>
                            <BsAward className='about__icon'/>
                            <h5>Internship</h5>
                            <small>6 months- at COGNIZANT</small>
                        </article>

                        <article className='about__card'>
                            <ImFolderOpen className='about__icon'/>
                            <h5>Projects</h5>
                            <small><a href="https://github.com">Check here!</a></small>
                        </article>
                    </div>

                    <p>
                    Hii all! I am working as programmer analyst trainee in cognizant as full time employee since January 2023. Interested in the role where I can contribute my analytical skills and knowledge acquired. 
Looking for an opportunity where my skills are utilized in the maximum way possible.
                    </p>

                    <a href="#contact" className='btn btn-primary'>Let's Talk</a>
                </div>
            </div>
        </section>
    )
}

export default About;