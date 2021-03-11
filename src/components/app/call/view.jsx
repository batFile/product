import React from 'react';
import search from './../../../assets/images/tel.svg';
import './style.scss';

const View = () => {
	return (
		<div className={ 'call' }>
            <img src={ search } className={ 'call__img' } alt='icon'/>
            <p className={ 'call__p' }>Call us</p>
		</div>
	);
};

export { View };