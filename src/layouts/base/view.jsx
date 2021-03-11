import React from 'react';
import { Header, Footer } from './../../components';

const View = React.memo((props) => {
	const { children } = props;

	return (
		<>
			<Header/>
			<main>{children}</main>
			<Footer/>
		</>
	);
});

export { View };