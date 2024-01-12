import React from 'react';

const Menu = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/biography">BIOGRAPHY</Link></li>
                <li><Link to = "/famouspaint">FAMOUS PAINTING</Link></li>
                <li><Link to="/gallery">GALLERY</Link></li>
            </ul>
        </nav>
    );
};

export default Menu;
