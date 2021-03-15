import React from 'react';
import { Button } from './../button';
import './style.scss';

const View = (props) => {

	return (
            <div className={ 'inform' }>
                {(props.h1)?<h1>{props.h1}</h1>:<h2>{props.h2}</h2>}
                <p>{props.text}</p>
                <Button text={ props.btnText } class={ 'button--fill' }/>
            </div>
        );
};

export { View };