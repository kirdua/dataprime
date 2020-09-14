import React from 'react';
import Person from '@material-ui/icons/Person';
import ContactUs from './ContatUs';

const UserName = ({ userName }) => (
    <div>
        <div className="user">
            <div className="user-name"> 
                <Person className="person-icon"/>
                {userName}
            </div>
            <ContactUs/>
        </div>
    </div>
);

export default UserName;