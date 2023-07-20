import React, { Children } from 'react';
import { HeadingDiv } from './HeadingStyle'

function Heading({ children }) {
    return (
        <HeadingDiv>
            {children}
        </HeadingDiv>
    );
}

export default Heading;