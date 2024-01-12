import React, {useState} from 'react';

const Phone = () => {
    const defaultPhone = '0660519404'
    const [phone, setPhone] = useState(defaultPhone);

    const phoneValChange = (e) => {
        setPhone(e.target.value)
    }

    return (
        <div>
            <label htmlFor='phone'><b>Телефон:</b></label>
            <div>
                <input className="ex4-input" type={phone} value={phone} onChange={phoneValChange} id='phone'/>
                <button onClick={() => setPhone(defaultPhone)}>За замовчуванням</button>
            </div>
        </div>
    );
};

export default Phone;
