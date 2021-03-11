import React, { useMemo } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { anchors } from './../../../routes';
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

	return (<div className={ 'nav' }>
                <Search/>
                <Call/>
                <ul className={ 'nav--anchors' }>
                    {navbarAnchors.map((anchor) => (
                        <li key={anchor.key} className={ 'nav--anchor' }>
                            <Link to={anchors[anchor.key].link()} className={ 'nav--link' }><p className={ 'nav__p' }>{anchor.name}</p></Link>
                        </li>
                    ))}
                </ul>
                <Button text={ 'Download' } class={ 'button--fill' }/>
                <Button text={ 'Sign up' } class={ 'button--unfill' }/>
            </div>
            );
});

export { View };