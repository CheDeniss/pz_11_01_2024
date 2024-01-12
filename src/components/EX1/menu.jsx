import React, {useState} from 'react';
import {Link} from "react-router-dom";
import './styles.css'

const Menu = () => {
    const [inputVal, setInputVal] = useState(100)

    const inputValChange = (e) => {
        setInputVal(e.target.value)
    }

    return (
        <nav>
            <ul className="menu-ul">
                <li className="menu-li"><Link to="/biography">BIOGRAPHY</Link></li>
                <li className="menu-li"><Link to = "/famouspaint">FAMOUS PAINTING</Link></li>
                <li className="menu-li"><Link to="/gallery">GALLERY</Link></li>
                <li className="menu-li"><Link to={`/parampicture/${inputVal}`}>EX3 PARAMETR</Link><label> - img height <input type={"number"} onChange={inputValChange} placeholder={100} min={100} max={1000}/></label></li>
                <li className="menu-li"><Link to="/perspage">EX4 - PERSONAL PAGE</Link></li>
                <li className="menu-li"><Link to="/regform">EX5 - REGISTRATION FORM</Link></li>
            </ul>
        </nav>
    );
};

export default Menu;
