import React, {useState} from 'react';
import './style.css'

const Email = () => {
    const defaultEmail = 'u789@i.ua'
    const [email, setEmail] = useState(defaultEmail);

    const emailValChange = (e) => {
        setEmail(e.target.value)
    }

    return (
        <div>
            <label htmlFor='email'><b>E-Mail:</b></label>
            <div>
                <input className="ex4-input" id='email' type={email} value={email} onChange={emailValChange}/>
                <button onClick={() => setEmail(defaultEmail)}>За замовчуванням</button>
            </div>
        </div>
    );
};

export default Email;
