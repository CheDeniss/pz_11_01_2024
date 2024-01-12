import React, {useState} from 'react';

const Residence = () => {
    const defaultRes = 'Львів'
    const [residence, setResidence] = useState(defaultRes)

    const residenceValChange = (e) => {
        setResidence(e.target.value)
    }

    return (
        <div>
            <label htmlFor='residence'><b>Місце проживання:</b></label>
            <div>
                <input className="ex4-input" id='residence' value={residence} onChange={residenceValChange}/>
                <button onClick={() => setResidence(defaultRes)}>За замовчуванням</button>
            </div>
        </div>
    );
};

export default Residence;
