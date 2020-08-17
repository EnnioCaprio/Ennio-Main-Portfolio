import React, {useState, useLayoutEffect} from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const MainHeader = () => {
    const [bars, setBars] = useState(false);


    const useWindowSize = () => {
        const [size, setSize] = useState(0);
        useLayoutEffect(() => {
          const updateSize = () => {
            setSize(window.innerWidth);
          }
          window.addEventListener('resize', updateSize);
          updateSize();
          return () => window.removeEventListener('resize', updateSize);
        }, []);
        return size;
    }
    
    const width = useWindowSize();
    console.log(width)

    return(
        <header className="header">
            <div className="header-logo">
                <h3>Logo</h3>
            </div>
            <div className="header-button">
                <FontAwesomeIcon icon={faBars} size="2x" onClick={() => setBars(!bars)}/>
            </div>
            <div className="header-list">
                <ul className="header-list__links" id={bars ? "open" : ""}>
                    <NavLink to="" className="link" onClick={() => {
                        if(width > 600){
                            window.scrollTo(0, 350)
                        }else{
                            window.scrollTo(0, 800)
                        }
                    }}>
                        <li>About Me</li>   
                    </NavLink> 
                    <NavLink to="" className="link" onClick={() => width > 600 ? window.scrollTo(0, 1000) : window.scrollTo(0, 1600)}>
                        <li>Works</li>
                    </NavLink>
                </ul>
            </div>
        </header>
    )
}


export { MainHeader as default }