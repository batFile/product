import React from 'react';
import { Navigation } from './../nav';
import { Logo } from './../logo';
import './style.scss';

const View = React.memo(() => {
	return (
		<header>
			<div className={ 'wrapper' }>
				<Logo/>
				<Navigation/>
			</div>
		</header>);
});

export { View };