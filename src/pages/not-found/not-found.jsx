import React, { Fragment } from 'react';
import Header from '../../components/Header/Header';

import './not-found.scss';

const NotFound = () => {

    return (
        <Fragment>
            <Header />
            <h1 className="notfound">Página não encontrada</h1>
        </Fragment>
    )
}

export default NotFound;