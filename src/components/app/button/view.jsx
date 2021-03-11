import React from 'react';

const View = (props) => {
	return (
		<button className={ 'button ' + props.class }><p className={ 'btn-text' }>{props.text}</p></button>
	);
};

export { View };