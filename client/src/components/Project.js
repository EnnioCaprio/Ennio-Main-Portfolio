import React, {useEffect} from 'react';
import ScrollReveal from 'scrollreveal';

const Project = () => {
    useEffect(() => {
        ScrollReveal().reveal('.container-project__center__single', {
            reset: true,
            duration: 500,
            origin: 'left',
            distance: '100px',
            delay: 500,
            opacity: 0
        })
    });
    return(
        <div className="container-project">
            <div className="container-project__title">
                <h1>Projects</h1>
                <h3>Under here all the projects</h3>
            </div>
            <div className="container-project__center">
                <div className="container-project__center__single">
                    <div className="container-project__center__single__photo__one"><a href="https://ecommerce-application-project.herokuapp.com/" target="_blank" target="noopener noreferrer"><div className="overlay-image"></div></a></div>
                    <div className="container-project__center__single__description">
                        <div className="container-project__description">
                            <div className="container-project__description__title">
                                <h1>Ecommerce App</h1>
                            </div>
                            <div className="container-project__description__content">
                                <p>In this Ecommerce like app, you can login, see, create, delete, update and buy products. You also can add a wallet to your profile where you can check your current amount</p>
                            </div>
                        </div>
                        <div className="container-project__technologies">
                            <ul className="container-project__technologies__list">
                                <li>React</li>
                                <li>Node</li>
                                <li>Express</li>
                                <li>MongoDB</li>
                            </ul>
                        </div>
                        <div className="container-project__social">
                            <ul className="container-project__social__list">
                                <li className="container-project__social__link"><a href="https://github.com/EnnioCaprio/Ecommerce-Application" target="_blank">GitHub</a></li>
                                <li className="container-project__social__link"><a href="https://ecommerce-application-project.herokuapp.com/" target="_blank">Heroku</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="container-project__center__single">
                    <div className="container-project__center__single__photo__two"><a href="https://www.google.it/" target="_blank" target="noopener noreferrer"><div className="overlay-image"></div></a></div>
                    <div className="container-project__center__single__description">
                        <div className="container-project__description">
                            <div className="container-project__description__title">
                                <h1>Chat App</h1>
                            </div>
                            <div className="container-project__description__content">
                                <p>This is a chat app where people can choose their own room and talk with each other</p>
                            </div>
                        </div>
                        <div className="container-project__technologies">
                            <ul className="container-project__technologies__list">
                                <li>React</li>
                                <li>Node</li>
                                <li>Express</li>
                                <li>Socket.io</li>
                            </ul>
                        </div>
                        <div className="container-project__social">
                            <ul className="container-project__social__list">
                                <li className="container-project__social__link"><a>GitHub</a></li>
                                <li className="container-project__social__link"><a>Heroku</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="container-project__center__single">
                    <div className="container-project__center__single__photo__three"><a href="https://www.google.it/" target="_blank" target="noopener noreferrer"><div className="overlay-image"></div></a></div>
                    <div className="container-project__center__single__description">
                        <div className="container-project__description">
                            <div className="container-project__description__title">
                                <h1>User Showcase</h1>
                            </div>
                            <div className="container-project__description__content">
                                <p>This is a simple SPA App with pagination</p>
                            </div>
                        </div>
                        <div className="container-project__technologies">
                            <ul className="container-project__technologies__list">
                                <li>React</li>
                                <li>Node</li>
                                <li>Express</li>
                                <li>GraphQL</li>
                                <li>MongoDB</li>
                            </ul>
                        </div>
                        <div className="container-project__social">
                            <ul className="container-project__social__list">
                                <li className="container-project__social__link"><a>GitHub</a></li>
                                <li className="container-project__social__link"><a>Heroku</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export { Project as default }