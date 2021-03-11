import React from 'react';
import { RoutesSwitch } from './../../../routes';
import './../../../assets/styles/index.scss';

const View = React.memo(() => {
	return (
		<RoutesSwitch />
	);
});

export { View };