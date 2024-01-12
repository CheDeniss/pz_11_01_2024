import React, {useState} from 'react';

const Fullname = () => {
    const defaultFullname = 'Денис Чернета'
    const [fullname, setFullname] = useState(defaultFullname)

    const fullnameValChage = (e) => {
        setFullname(e.target.value)
    }

    return (
        <div>
            <label htmlFor='fullname'><b>Ім'я та прізвищє:</b></label>
            <div>
                <input className="ex4-input" id="fullname" onChange={fullnameValChage} value={fullname}/>
                <button onClick={() => setFullname(defaultFullname)}>За замовчуванням</button>
            </div>
        </div>
    );
};

export default Fullname;
