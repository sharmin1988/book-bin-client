import React from 'react';

const Title = ({children}) => {
    return (
        <div>
            <h2 className='text-4xl font-semibold text-fuchsia-700 '>{children}</h2>
        </div>
    );
};

export default Title;