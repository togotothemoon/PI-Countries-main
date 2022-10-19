import React from 'react';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import './Footer.css';

function Footer() {
  return (
    <>
        <footer className="footer">
            <div className="box-container">
                <div className="box">
                    <a href={`https://www.linkedin.com/in/ken-cordero/`} style={{ textDecoration: 'none' }}>
                    <span><AiFillLinkedin /> linkedin </span>
                    </a>
                </div>
                <div className="box">
                    <a href={`https://github.com/togotothemoon`} style={{ textDecoration: 'none' }}>
                    <span>   <AiFillGithub /> github </span>
                    </a>
                </div>

            </div>

            <div className="credit">Creado por <span> togotothemoon</span> | todos los derechos reservados!</div>

        </footer>

    </>
  )
}

export default Footer