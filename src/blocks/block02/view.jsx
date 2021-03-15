import React from 'react';
import { Information } from '../../components/index';
import watch from '../../assets/images/watch.png';

const View = () => {
    return (<>
        <img src={ watch } alt={ 'mac_img' }/>
        <Information 
            h2={ 'Temporibus autem quibusdam et aut officiis debitis' }
            text={ 'At vero eos et accusamus et iusto odio dignissimos ducimus, qui blanditiis praesentium voluptatum deleniti atque corrupti, quos dolores et quas molestias excepturi sint, obcaecati cupiditate non provident, similique sunt in culpa, qui officia deserunt mollitia animi, id est laborum et dolorum fuga.' }
            btnText={ 'Try for free ' }
        />
    </>);
}

export { View };