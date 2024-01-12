import React, {useState} from 'react';
import { Navigate } from 'react-router-dom';
import './styless.css'

const Form = () => {
    const [form, setForm] = useState({
        nick: '',
        email: '',
        gender: '',
        age: '',
    });
    const [isError, setIsError] = useState(null);
    // const [errorList, setErrorList] = useState([]);

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        const errors = validate(form);
        // console.log(errors)
        // setErrorList(errors)
        // console.log('out')
        // console.log(errorList)
        errors.length > 0 ? setIsError(0) : setIsError(1)
    };

    if(isError === 0){
        console.log('opening error')
        return <Navigate to="/error" state={validate(form)} replace />
    }

    if(isError === 1) {
        console.log('opening ok')
        return <Navigate to="/ok" replace />
    }

    return (
        <form onSubmit={handleSubmit}>

            <label htmlFor="nik"><b>Нік:</b></label>
            <div>
                <input className="inputs" id="nik" type="text" name="nick" onChange={handleChange}/>
            </div>
            <br/>

            <label htmlFor="email"><b>E-mail:</b></label>
            <div>
                <input className="inputs" id="email" type="email" name="email" onChange={handleChange}/>
            </div>
            <br/>

            <label htmlFor="gender"><b>Стать:</b> </label>
            <div>
                <select id="gender" name="gender" onChange={handleChange}>
                <option value="">Виберіть стать</option>
                <option value="male">Чоловіча</option>
                <option value="female">Жіноча</option>
            </select>
            </div>
            <br/>

            <label htmlFor="age"><b>Вік:</b></label>
            <div>
                <input className="inputs" id="age" type="number" name="age" onChange={handleChange}/>
            </div>
            <br/>

            <button type="submit">Зареєструватися</button>
        </form>
    );
};

function validate(form) {
    let errors = []
    if (!form.nick) errors.push("Нік - обов'язкове поле")
    if (!form.email) errors.push("Емейл - обов'язкове поле")
    if (!form.gender) errors.push("Стать - обов'язкове поле")
    if (!form.age) errors.push("Вік - обов'язкове поле")
    return errors
}

export default Form;
