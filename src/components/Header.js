import React from 'react';
import Button from '@material-ui/core/Button';

export const Header = () => {
    return ( 
        <div className="header">
            <p className="breadcrumb">Dashboard/Opportunity</p>
            <Button color="primary">Edit</Button>
            <h3>GENENTECH - Manufacturing Data Scientist</h3>
        </div>
    );
};