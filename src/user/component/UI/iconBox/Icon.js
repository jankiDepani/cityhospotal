import React, { Children } from 'react';
import { FinalIcon } from './Iconstyle';

function Icon({ Children }) {
    return (
        <FinalIcon>
            {Children}
        </FinalIcon>
    );
}

export default Icon;