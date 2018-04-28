import React from 'react';
import { Link } from 'react-router-dom';

import * as routes from '../constants/routes';

const Navigation = () =>
    <div>
        <ul><Link to={routes.SIGN_IN}>Sign In</Link></ul>
        <ul><Link to={routes.LANDING}>Landing</Link></ul>
        <ul><Link to={routes.HOME}>Home</Link></ul>
        <ul><Link to={routes.ACCOUNT}>Account</Link></ul>
    </div>

export default Navigation;