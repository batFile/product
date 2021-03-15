import React from 'react';
import { Information } from '../../components/index';
import mac from '../../assets/images/iMac.png';

const View = () => {
    return (<>
        <Information 
            h1={ 'At vero eos et accusamus et iusto odio dignissimos ducimus' }
            text={ 'Nam libero tempore, cum soluta nobis est eligendi optio, cumque nihil impedit, quo minus id, quod maxime placeat, facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet, ut et voluptates repudiandae sint et molestiae non recusandae.' }
            btnText={ 'Try for free ' }
        />
        <img src={ mac } alt={ 'mac_img' }/>
    </>);
}

export { View };