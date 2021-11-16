import React from "react";
import './Header.css'

// eslint-disable-next-line import/no-anonymous-default-export
export default ({black}) => {
    return(
        <header className={black ? 'black' : ''}>
            <div className="header--logo">
                <a href="/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="Logo da Netflix" />
                </a>
            </div>
            <div className="header--user">
                <a href="/">
                    <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/bb3a8833850498.56ba69ac33f26.png" alt="Usuário" />
                </a>
            </div>
        </header>
    );
}