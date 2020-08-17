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
                            <li><b>Technology:</b> I'm working with SAP PI module</li>
                            <li><b>Projects:</b> I worked on several projects, Leonardo SPA, Fiat Leasys, Seda</li>
                            <li><b>Other infos:</b> I have been working mostly on SOAP and REST interfaces</li>
                        </ul>
                    </div>
                </div>
                <div className="container-work__centered__info">
                    <h2>- Self Taught Experience</h2>
                    <div className="container-work__centered__info__list">
                        <ul className="container-work__centered__info__list__all">
                            <li><b>Position self-taught:</b> FullStack Web Developer</li>
                            <li><b>Technologies:</b> I have been using mostly javascript framework/engine (React, Node and Express) and as DB I use MongoDB and PostgreSQL</li>
                            <li><b>Projects:</b> In total there are 3 projects</li>
                            <li><b>Other skills:</b> html, css, scss, graphql</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}


export { Work as default }