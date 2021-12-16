import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

const Work = () => {
    useEffect(() => {
        ScrollReveal().reveal('.container-work__centered', {
            duration: 500,
            origin: 'right',
            distance: '100px',
            delay: 500
        })
    }, [])
    return(
        <div className="container-work">
            <div className="container-work__centered">
                <div className="container-work__centered__info">
                    <h2>- Professional Experience</h2>
                    <div className="container-work__centered__info__list">
                        <ul className="container-work__centered__info__list__all">
                            <li><b>Firm:</b> Currently working as software developer in Accenture</li>
                            <li><b>Technology:</b>
                                <p>The principal technologies that I use at work are</p>
                                <ul>
                                    <li>SAP PI Module, which is an SAP middleware used to facilitate the exchange of data between two different systems</li>
                                    <li>XML/WSDL for developing the data structures for interfaces design</li>
                                    <li>Java for creating/modify custom mappings and adapters</li>
                                </ul>
                            </li>
                            <li>
                                <b>Projects:</b>
                                <p>I have been working on several projects, most of them included soap/rest adapters for the APIs calls and file/proxy adapters</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="container-work__centered__info">
                    <h2>- Personal Projects Experience</h2>
                    <div className="container-work__centered__info__list">
                        <ul className="container-work__centered__info__list__all">
                            <li><b>Position:</b> FullStack Javascript Developer</li>
                            <li>
                                <b>Technologies:</b><p>The principal technologies that I use for my personal projects are</p>
                                <ul>
                                    <li>
                                        I have been using for most of my personal projects technologies such as Javascript frameworks/engine (React, Node and Express).
                                    </li>
                                    <li>
                                        The databases that I prefer to use are PostgreSQL and MongoDB
                                    </li>
                                    <li>
                                        For deployment, I use docker for containerization process and DigitalOcean for hosting my apps.
                                    </li>
                                </ul>
                            </li>
                            <li><b>Projects:</b><p>In total there are 2 projects, Reddit Clone and Chat App</p></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}


export { Work as default }