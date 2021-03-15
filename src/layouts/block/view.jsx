import React from 'react';

const View = React.memo((props) => {
	const { children } = props;

	return (
		<div className={ 'wrapper' } id={ props.id }>
			{children}
		</div>
	);
});

export { View };