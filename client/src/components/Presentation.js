import React, { useEffect } from 'react';
import MainHeader from './MainHeader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import ScrollReveal from 'scrollreveal';

const Presentation = () => {
    useEffect(() => {
        ScrollReveal().reveal('.container-presentation', {
            delay: 500,
            duration: 500,
            origin: 'left',
            distance: '100px' 
        })
    }, [])
    
    return(
        <div className="container-content">
            <MainHeader />
            <div className="container-presentation">
                <div className="container-presentation__details">
                    <div className="container-presentation__details__one">
                        <h1>Ennio</h1>
                        <h1>Caprio.</h1>
                    </div>
                    <div className="container-presentation__details__two">
                        <a href="https://www.linkedin.com/in/ennio-caprio-52846a161/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} className="container-presentation__icon" /></a>
                        <a href="https://github.com/EnnioCaprio" target="_blank" target="noopener noreferrer"><FontAwesomeIcon icon={faGithub} className="container-presentation__icon" /></a>
                    </div>
                </div>
                <div className="container-presentation__description">
                    <div className="container-presentation__description__one">
                        <div className="container-presentation__description__one__content">
                            <h4>- Introduction</h4>
                            <h2>Software Developer based in Italy, Naples</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ante sapien, dapibus sit amet cursus vel, vestibulum nec nisi.</p>
                        </div>
                    </div>
                    <div className="container-presentation__description__two">
                        <div className="container-presentation__description__two__content">
                            <button>Go to projects</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export { Presentation as default }