import React from "react";
import { AreaHeader } from "./styled";
import { Link } from 'react-router-dom';

function Header(props) {
    return (
        <AreaHeader>
            <div className="container">
                <div className="logo">
                    <img src="../../../Samu-logo.png"></img>

                </div>
                <nav>
                    <ul>
                        <li><Link to="/">inicio</Link></li>
                        <li><Link to="/config">Config</Link></li>
                        <li><Link to="/logout">Sair</Link></li>
                        


                    </ul>
                    <div className="avatar">
                        <img src={props.user.avatar}/>
                        <label>{props.user.name}</label>

                    </div>
                </nav>
            </div>
        </AreaHeader>
    )
}
export default Header;