import React, {useEffect} from 'react';
import ScrollReveal from 'scrollreveal';

const Project = () => {
    useEffect(() => {
        ScrollReveal().reveal('.container-project__center__single', {
            duration: 500,
            origin: 'left',
            distance: '100px',
            delay: 500,
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
                    <div className="container-project__center__single__photo__one"><a href="https://redditclone.myportfolio-ennio.com/" target="_blank" target="noopener noreferrer"><div className="overlay-image"></div></a></div>
                    <div className="container-project__center__single__description">
                        <div className="container-project__description">
                            <div className="container-project__description__title">
                                <h1>Reddit Clone</h1>
                            </div>
                            <div className="container-project__description__content">
                                <p>
                                    Reddit Clone, as the name suggests it is the clone of the famous site Reddit, to develop this web app I used ReactJS, Node, Express and Postgres.
                                </p>
                            </div>
                        </div>
                        <div className="container-project__technologies">
                            <ul className="container-project__technologies__list">
                                <li>React</li>
                                <li>Express</li>
                                <li>GraphQL</li>
                                <li>Postgresql</li>
                            </ul>
                        </div>
                        <div className="container-project__social">
                            <ul className="container-project__social__list">
                                <li className="container-project__social__link"><a href="https://github.com/EnnioCaprio/Reddit-Clone-Application" target="_blank">GitHub</a></li>
                                <li className="container-project__social__link"><a href="https://redditclone.myportfolio-ennio.com/" target="_blank">Application</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="container-project__center__single">
                    <div className="container-project__center__single__photo__two"><a href="https://chatapp.myportfolio-ennio.com/" target="_blank" target="noopener noreferrer"><div className="overlay-image"></div></a></div>
                    <div className="container-project__center__single__description">
                        <div className="container-project__description">
                            <div className="container-project__description__title">
                                <h1>Chat App</h1>
                            </div>
                            <div className="container-project__description__content">
                                <p>
                                    Chat App, this was my first WebSockets-based App.
                                    I used ReactJS and Node as the main stack and for WebSockets-based technology, I used a library called Socket.io.
                                    Users can create their own room and chat and share their locations with other users.
                                </p>
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
                                <li className="container-project__social__link"><a href="https://github.com/EnnioCaprio/Chat-Application-Live" target="_blank">GitHub</a></li>
                                <li className="container-project__social__link"><a href="https://chatapp.myportfolio-ennio.com/" target="_blank">Application</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export { Project as default }