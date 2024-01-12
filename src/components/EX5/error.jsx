import React from 'react';
import {useLocation, useNavigate} from "react-router-dom";

const Error5 = () => {
    const location = useLocation()
    const navigate = useNavigate();
    const errorsList = location.state || []

    return (
        <div>
            <h1>Помилки при заповненні форми:</h1>
            <ul>
                {
                    errorsList.map((error, index) => (
                        <li key={index}>{error}</li>)
                    )
                }
            </ul>
            <button onClick={() => navigate("/regform", { replace: true })}>Поправити</button>
        </div>
    );
};

export default Error5;
