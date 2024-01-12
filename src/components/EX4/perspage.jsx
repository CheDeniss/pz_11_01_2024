import React from 'react';
import Email from "./email.jsx";
import Fullname from "./fullname.jsx";
import Residence from "./residence.jsx";
import Phone from "./phone.jsx";

const PersonalPage = () => {
    return (
        <div className='container'>
            <img height={150} src='https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/corporate-user-icon.png' alt='USER LOGO'/>
            <br/>
            <Email/>
            <br/>
            <Fullname/>
            <br/>
            <Residence/>
            <br/>
            <Phone/>
        </div>
    );
};

export default PersonalPage;
