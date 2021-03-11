import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { routes } from './../../../routes';
import logo from '../../../assets/images/logo.png';
import './style.scss';

const View = React.memo(() => {
    const navbarRoutes = useMemo(() => [
		{ name: 'Main', key: 'main' }
	], []);

	return (<div className={ 'logo' }>
                <ul>
                    {navbarRoutes.map((route) => (
                        <li key={route.key}>
                            <Link to={routes[route.key].link()}>
                                <img src={logo} className={ 'logo__img' } alt='logo'/>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            );
});

export { View };