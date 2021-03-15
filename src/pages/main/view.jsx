import React from 'react';
import { blocks } from '../../blocks';
import { LayoutBlock } from '../../layouts';

const View = () => {
    return (<>
        {Object.keys(blocks).map( (key) => {
            const {block: Block, id: idTarget} = blocks[key];

            return (
                    <LayoutBlock key={key} id={ idTarget }>
                        <Block/>
                    </LayoutBlock>
                )
            }
        )}
    </>);
}

export { View };