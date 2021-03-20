import React, { useMemo } from 'react';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import { anchors, routes } from './../../../routes';
import { Search } from './../search';
import { Call } from './../call';
import { Button } from './../button';
import './style.scss';

const View = React.memo(() => {
    const navbarAnchors = useMemo(() => [
		{ name: 'About', key: 'about' },
		{ name: 'Product', key: 'product' },
        { name: 'FAQ', key: 'FAQ' },
        { name: 'Contact', key: 'contact' }
	], []);

    const routers = useMemo(() => [
        { name: 'Main', key: 'main' },
		{ name: 'Test', key: 'test' },
	], []);

	return (<div className={ 'nav' }>
                <Search/>
                <Call/>
                <ul className={ 'nav--anchors' }>
                    {navbarAnchors.map((anchor) => (
                        <li key={anchor.key} className={ 'nav--anchor' }>
                            <HashLink to={anchors[anchor.key].link()} onClick={ () => console.log('test') } className={ 'nav--link' }><p className={ 'nav__p' }>{anchor.name}</p></HashLink>
                        </li>
                    ))}
                    {/* {
                        routers.map((route) => (
                            <li key={route.key} className={ 'nav--anchor' }>
                                <Link to={routes[route.key].link()}><p>{route.name}</p></Link>
                            </li>
                        ))
                    } */}
                    <li className={ 'nav--anchor' }>
                        <Link to='/'><p>Main</p></Link>
                    </li>
                    <li className={ 'nav--anchor' }>
                        <Link to='/test'><p>Test</p></Link>
                    </li>
                </ul>
                <Button text={ 'Download' } class={ 'button--fill' }/>
                <Button text={ 'Sign up' } class={ 'button--unfill' }/>
            </div>
            );
});

export { View };