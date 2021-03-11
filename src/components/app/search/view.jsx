import React from 'react';
import search from './../../../assets/images/search.svg';
import './style.scss';

const View = () => {
	return (
		<div className={ 'search' }>
        	<img src={ search } className={ 'search__img' } alt='icon'/>
		</div>
	);
};

export { View };